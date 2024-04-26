package SkyEdge.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class AuthController {
    @GetMapping("/sign-in")
    public String signIn() {
        return "sign-in";
    }
}
