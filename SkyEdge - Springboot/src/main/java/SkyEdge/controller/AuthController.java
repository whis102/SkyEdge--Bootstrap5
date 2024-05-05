package SkyEdge.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import SkyEdge.model.Product;
import SkyEdge.model.RegistrationDTO;
import SkyEdge.model.User;
import SkyEdge.service.AuthenticationService;
import SkyEdge.service.ProductService;

@Controller
public class AuthController {
    @Autowired
    private AuthenticationService authenticationService;

    @Autowired
    private ProductService productService;

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
    public String shop() {
        return "shop";
    }

    @GetMapping("/product-details")
    public String product_details(Model model) throws NotFoundException {
        Product product = productService.findByProductId((long) 0);
        model.addAttribute("product", product);
        return "product-details";
    }

    @GetMapping("/product-details/{id}")
    public String product_details1(@PathVariable(value = "id") Long id, Model model) throws NotFoundException {
        Product product = productService.findByProductId((long) id);
        model.addAttribute("product", product);
        return "product-details";
    }

    @GetMapping("/register")
    public String register(Model model) {
        RegistrationDTO registrationDTO = new RegistrationDTO();
        model.addAttribute("user", registrationDTO);
        return "/register";
    }

    @PostMapping("/register")
    public String registerUser(@ModelAttribute User user) {
        authenticationService.registerUser(user.getUsername(), user.getPassword());
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
    public String admin() {

        return "admin/admin";
    }

    @RequestMapping("/about")
    public String requestMethodName() {
        return "about";
    }

}
