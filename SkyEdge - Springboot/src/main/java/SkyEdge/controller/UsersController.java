package SkyEdge.controller;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import SkyEdge.model.Role;
import SkyEdge.model.User;
import SkyEdge.repository.RoleRepository;
import SkyEdge.repository.UserRepository;
import jakarta.validation.Valid;

@Controller
public class UsersController {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @GetMapping("admin/users")
    public String manageUsers(Model model) {
        List<User> users = userRepository.findAll();
        model.addAttribute("users", users);
        return "admin/profile/admin-manageusers";
    }

    @GetMapping("admin/users/edit")
    public String manageUser(@RequestParam int id, Model model) {
        Optional<User> user = userRepository.findById(id);
        if (user.isPresent()) {
            User newUser = user.get();
            String authority = newUser.getAuthorities().iterator().next().getAuthority();
            model.addAttribute("authority", authority);
            model.addAttribute("user", newUser);
            return "admin/profile/admin-profile";
        }
        return "admin/profile/admin-manageusers";
    }

    @PostMapping("admin/users/edit")
    public String handleManageUser(Model model, @Valid @ModelAttribute User user,
            @RequestParam String authority) {
        System.out.println(user.getUsername());
        User newUser = userRepository.findOneByUserId(user.getUserId());
        Set<Role> authorities = new HashSet<>();
        authorities.add(roleRepository.findByAuthority(authority).get());
        newUser.setAuthorities(authorities);
        newUser.setEmail(user.getEmail());
        userRepository.save(newUser);
        return "redirect:/admin/users";
    }
}