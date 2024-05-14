package SkyEdge.controller;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import SkyEdge.model.Product;
import SkyEdge.model.Subscriber;
import SkyEdge.model.User;
import SkyEdge.repository.ProductRepository;
import SkyEdge.repository.SubscriberRepository;
import SkyEdge.repository.UserRepository;
import SkyEdge.security.UserTemplate;
import SkyEdge.service.AuthenticationService;
import SkyEdge.service.EmailService;
import SkyEdge.service.ProductService;
import SkyEdge.service.UserService;
import SkyEdge.util.constants.Categories;
import SkyEdge.util.email.EmailDetails;
import jakarta.validation.Valid;

@Controller
public class AuthController {
    @Value("${token.reset.timeout.minutes}")
    private int reset_token_timeout;

    @Value("${site.domain}")
    private String site_domain;
    @Autowired
    private AuthenticationService authenticationService;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserService userService;

    @Autowired
    private ProductService productService;

    @Autowired
    private EmailService emailService;
    // @Autowired
    // private JavaMailSender mailSender;

    @GetMapping("/login")
    public String login() {
        return "login";
    }

    @GetMapping("/about-us")
    public String about_us() {
        return "about-us";
    }

    @GetMapping("/contact-us")
    public String contact_us() {
        return "contact-us";
    }

    @GetMapping("/shop")
    public String shop(
            @RequestParam(value = "category", required = false, defaultValue = "default") String category,
            @RequestParam(value = "sortMode", required = false, defaultValue = "0") int sortMode,
            @RequestParam(value = "page", required = false, defaultValue = "0") int page,
            @RequestParam(value = "size", required = false, defaultValue = "10") int size,
            @RequestParam(value = "direction", required = false, defaultValue = "asc") String direction,
            @RequestParam(value = "query", required = false) String query,
            Model model) {

        List<String> categories = Categories.getAllCategories();
        model.addAttribute("categories", categories);
        model.addAttribute("category", category);
        model.addAttribute("sortMode", sortMode);

        Pageable pageable = PageRequest.of(page, size, Sort.by(getSortDirection(direction), getSortProperty(sortMode)));
        Page<Product> productsPage = productService.getAllProducts(pageable);

        if (!category.equals("default")) {
            productsPage = productService.getProductsByCategory(category, pageable);
        }

        if (query != null && !query.isEmpty()) {
            productsPage = productService.searchProducts(query, pageable);
        }

        model.addAttribute("products", productsPage);
        if (productsPage.isEmpty()) {
            model.addAttribute("message", "No products available in the selected category.");
        }

        return "shop";
    }

    private String getSortProperty(int sortMode) {
        switch (sortMode) {
            case 1:
                return "id";
            case 2:
                return "name";
            case 3:
                return "price";
            default:
                return "id";
        }
    }

    private Sort.Direction getSortDirection(String dir) {
        return "desc".equalsIgnoreCase(dir) ? Sort.Direction.DESC : Sort.Direction.ASC;
    }

    @GetMapping("/product-details/{id}")
    public String product_details(@PathVariable(value = "id") int id, Model model) throws NotFoundException {
        Product product = productRepository.findById(id).get();
        model.addAttribute("product", product);
        return "product-details";
    }

    @GetMapping("/register")
    public String register(Model model) {
        UserTemplate userTemplate = new UserTemplate();
        model.addAttribute("user", userTemplate);
        return "/register";
    }

    @PostMapping("/register")
    public String registerUser(@ModelAttribute("user") @Valid UserTemplate ut, BindingResult bindingResult,
            Model model) {
        if (bindingResult.hasErrors()) {
            model.addAttribute("error",
                    "Password must be at least 6 characters long and contain at least one digit and one uppercase letter.");
            return "/register";
        }
        authenticationService.registerUser(ut.getEmail(), ut.getUsername(), ut.getPassword());
        return "login";
    }

    @GetMapping("/forgot-password")
    public String forgotPassword(Model model) {
        return "forgot-password";
    }

    @PostMapping("/forgot-password")
    public String resetPassword(@RequestParam("email") String requestEmail, Model model,
            RedirectAttributes attributes) {
        Optional<User> optionalUser = userRepository.findOneByEmail(requestEmail);
        if (optionalUser.isPresent()) {
            User user = userRepository.findById(optionalUser.get().getUserId()).get();
            String resetToken = UUID.randomUUID().toString();
            user.setResetToken(resetToken);
            user.setTokenExpiryDate(LocalDateTime.now().plusMinutes(reset_token_timeout));
            userRepository.save(user);
            String reset_message = "This is the reset password link: " + site_domain + "change-password?token="
                    + resetToken;
            EmailDetails emailDetails = new EmailDetails(user.getEmail(), reset_message,
                    "Reset password for your SkyEdge account.");
            if (emailService.sendSimpleEmail(emailDetails) == false) {
                attributes.addFlashAttribute("error", "Error while sending email!");
            }
            attributes.addFlashAttribute("message", "Password reset email sent!");
            return "redirect:/login";
        } else {
            attributes.addFlashAttribute("message", "No user found with the email supplied!");
            return "redirect:/forgot-password";
        }

    }

    @GetMapping("/change-password")
    public String changePassword(Model model, @RequestParam("token") String token, RedirectAttributes attributes) {
        Optional<User> optionalUser = userService.findByToken(token);
        if (token.equals("")) {
            attributes.addFlashAttribute("error", "Invalid Token!");
            return "redirect:/forgot-password";
        }
        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            LocalDateTime now = LocalDateTime.now();
            if (now.isAfter(optionalUser.get().getTokenExpiryDate())) {
                attributes.addFlashAttribute("error", "Token Expired!");
                return "redirect:/forgot-password";
            }
            model.addAttribute("user", user);
            return "change-password";
        }
        attributes.addFlashAttribute("error", "Invalid Token!");
        return "redirect:/forgot-password";
    }

    @PostMapping("/change-password")
    public String handleChangePassword(@ModelAttribute User user, RedirectAttributes attributes) {
        Optional<User> newUser = userRepository.findById(user.getUserId());
        newUser.get().setPassword(user.getPassword());
        newUser.get().setResetToken("");
        userService.save(newUser.get());
        attributes.addFlashAttribute("message", "Password changed successfully!");
        return "redirect:/login";
    }

    @GetMapping("/")
    public String home() {
        return "index";
    }

    // @GetMapping("/admin")
    // public String admin(Model model) {
    // List<Product> products = productRepository.findAll();
    // List<Order> orders = orderRepository.findAll();
    // int numOfProducts = products.size();
    // List<Object> productHistory = new ArrayList<>();
    // Long numOfUsers =
    // userRepository.countByAuthorities(roleRepository.findByAuthority("USER"));
    // Double totalRevenue = 0.0;
    // for (Order order : orders) {
    // if (order.getStatus().equals("APPROVED"))
    // totalRevenue += order.getCost();
    // }
    // for (Product product : products) {
    // List<String> history = new ArrayList<>();
    // history.add(product.getCreatedBy().getUsername());
    // history.add(" has created a new product: " + product.getName() + ".");
    // history.add(product.getImageFileName());
    // productHistory.add(history);
    // }
    // model.addAttribute("totalRevenue", totalRevenue);
    // model.addAttribute("orders", orders);
    // model.addAttribute("productHistory", productHistory);
    // model.addAttribute("numOfProducts", numOfProducts);
    // model.addAttribute("numOfUsers", numOfUsers);
    // return "admin/dashboard/admin-dashboard";
    // }

    @RequestMapping("/about")
    public String requestMethodName() {
        return "about";
    }

    @Autowired
    SubscriberRepository subscriberRepository;

    @PostMapping("/sendEmail")
    public String sendEmail(@Valid @RequestParam String email) {
        Subscriber newSubscriber = new Subscriber();
        newSubscriber.setEmail(email);
        subscriberRepository.save(newSubscriber);
        return "redirect:/";
    }

    @GetMapping("/sendEmail")
    public String addEmail(Model model) {
        Subscriber subsccriber = new Subscriber();
        model.addAttribute("subscriber", subsccriber);
        return "redirect:/";
    }

}
