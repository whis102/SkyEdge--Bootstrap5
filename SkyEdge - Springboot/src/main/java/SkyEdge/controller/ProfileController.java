package SkyEdge.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/admin/profile")
public class ProfileController {
    @GetMapping
    public String profile(){
        return"admin/profile/admin-profile";
    }
}