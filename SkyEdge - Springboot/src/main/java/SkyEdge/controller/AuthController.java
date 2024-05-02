package SkyEdge.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import SkyEdge.model.MyUserDetails;
import SkyEdge.model.RegistrationDTO;
import SkyEdge.service.AuthenticationService;

@Controller
public class AuthController {
    @Autowired
    private AuthenticationService authenticationService;

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
    public String product_details() {
        return "product-details";
    }

    @GetMapping("/register")
    public String register(Model model) {
        RegistrationDTO registrationDTO = new RegistrationDTO();
        model.addAttribute("user", registrationDTO);
        return "/register";
    }

    @PostMapping("/register")
    public String registerUser(@ModelAttribute MyUserDetails user) {
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
        return "admin";
    }

    @RequestMapping("/about")
    public String requestMethodName() {
        return "about";
    }

}
