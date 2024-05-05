package SkyEdge.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/admin/subscriber")
public class SubscriberController {
    @GetMapping
    public String subscriber(){
        return"admin/subscriber/admin-subscriber";
    }
}