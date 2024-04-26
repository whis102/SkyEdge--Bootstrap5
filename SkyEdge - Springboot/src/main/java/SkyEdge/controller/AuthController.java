package SkyEdge.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class AuthController {
    @GetMapping("/login")
    public String login() {
        return "login";
    }

    @GetMapping("/")
    public String home() {
        return "home";
    }

    @GetMapping("/register")
    public String register() {
        return "register";
    }

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
