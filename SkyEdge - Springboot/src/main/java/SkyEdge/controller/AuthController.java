package SkyEdge.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import SkyEdge.model.Product;
import SkyEdge.model.Subscriber;
import SkyEdge.repository.ProductRepository;

import SkyEdge.repository.SubscriberRepository;
import SkyEdge.repository.RoleRepository;
import SkyEdge.repository.UserRepository;
import SkyEdge.security.UserTemplate;
import SkyEdge.service.AuthenticationService;
import jakarta.validation.Valid;

@Controller
public class AuthController {
    @Autowired
    private AuthenticationService authenticationService;

    @Autowired
    private ProductRepository productRepository;


    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

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

    @GetMapping("/cart")
    public String cart() {
        return "cart";
    }

    @GetMapping("/shop")
    public String shop(Model model) {
        List<Product> products = productRepository.findAll();
        model.addAttribute("products", products);
        return "shop";
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
        authenticationService.registerUser(ut.getUsername(), ut.getPassword());
        return "redirect:/";
    }

    @GetMapping("/")
    public String home() {
        return "index";
    }

    // @GetMapping("/register")
    // public String register() {
    // return "register";
    // }

    @GetMapping("/member")
    public String member() {
        return "member";
    }

    @GetMapping("/admin")
    public String admin(Model model) {
        List<Product> products = productRepository.findAll();
        int numOfProducts = products.size();
        List<Object> productHistory = new ArrayList<>();
        Long numOfUsers = userRepository.countByAuthorities(roleRepository.findByAuthority("USER"));
        for (Product product : products) {
            List<String> history = new ArrayList<>();
            history.add(product.getCreatedBy().getUsername());
            history.add(" has created a new product: " + product.getName() + ".");
            history.add(product.getImageFileName());
            productHistory.add(history);
        }
        model.addAttribute("productHistory", productHistory);
        model.addAttribute("numOfProducts", numOfProducts);
        model.addAttribute("numOfUsers", numOfUsers);
        return "admin/dashboard/admin-dashboard";
    }

    @RequestMapping("/about")
    public String requestMethodName() {
        return "about";
    }

    

    @Autowired
    SubscriberRepository subscriberRepository;
    
    @PostMapping("/send")
    public String sendEmail(@Valid @ModelAttribute Subscriber subscriber) {
        Subscriber newSubscriber = new Subscriber();
        newSubscriber.setEmail(subscriber.getEmail());
        subscriberRepository.save(newSubscriber);
        return "redirect:/";
    }
    @GetMapping("/send")
    public String addVoucher(Model model) {
        Subscriber subsccriber = new Subscriber();
        model.addAttribute("subscriber", subsccriber);
        return "redirect:/";
    }
}
