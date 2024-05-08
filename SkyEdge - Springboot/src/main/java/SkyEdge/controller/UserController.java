package SkyEdge.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import SkyEdge.service.UserService;

@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class UserController {

    @GetMapping("/")
    public String HelloUserController() {
        return "user access level";
    }

    @Autowired
    UserService userService;

    // @Autowired
    // UserRepository userRepository;

    // // @GetMapping("/login")
    // // public String login(Model model) {
    // // return "/login";
    // // }

    // @GetMapping("/register")
    // public String register(Model model) {
    // model.addAttribute("user", new User());
    // return "register";
    // }

    // // Sau khi ng dùng submit form bằng method POST, lưu user data được nhập vào
    // // User model
    // @PostMapping("/register")
    // public String registerHandle(Model model, PasswordEncoder encoder,
    // @Valid User user, BindingResult result) {
    // if (result.hasErrors()) {
    // model.addAttribute("user", user);
    // return "register";
    // } else {
    // userService.save(user);
    // model.addAttribute("user", new User());
    // model.addAttribute("success", true);

    // return "register";
    // }
    // }

}
