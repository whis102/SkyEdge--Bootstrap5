package SkyEdge.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import SkyEdge.model.User;
import SkyEdge.repository.UserRepository;
import SkyEdge.service.UserService;
import jakarta.validation.Valid;

@Controller
public class UserController {

    @Autowired
    UserService userService;

    @Autowired
    UserRepository userRepository;

    @GetMapping("/login")
    public String login(Model model) {
        return "/login";
    }

    @GetMapping("/register")
    public String register(Model model) {
        model.addAttribute("user", new User());
        return "register";
    }

    // Sau khi ng dùng submit form bằng method POST, lưu user data được nhập vào
    // User model
    @PostMapping("/register")
    public String registerHandle(Model model, PasswordEncoder encoder,
            @Valid User user, BindingResult result) {
        if (result.hasErrors()) {
            model.addAttribute("user", user);
            return "register";
        } else {
            userService.save(user);
            model.addAttribute("user", new User());
            model.addAttribute("success", true);

            return "register";
        }
    }

}
