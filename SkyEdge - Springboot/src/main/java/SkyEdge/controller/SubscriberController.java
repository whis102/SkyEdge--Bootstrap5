package SkyEdge.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import SkyEdge.model.Subscriber;
import SkyEdge.repository.SubscriberRepository;
import SkyEdge.service.SubscriberService;

@Controller
public class SubscriberController {
    @Autowired
    private SubscriberService subscriberService;

    @Autowired
    private SubscriberRepository subscriberRepository;

    @GetMapping("/admin/subscriber")
    public String listSubscribers(Model model) {

        List<Subscriber> subscribers = subscriberService.getAllSubscribers();
        model.addAttribute("subscribers", subscribers);

        Long subscriberCount = subscriberService.getSubscriberCount();
        model.addAttribute("subscriberCount", subscriberCount);

        return "admin/subscriber/admin-subscriber";
    }

    @GetMapping("/admin/subscriber/search")
    public String searchSubscriber(@RequestParam("query") String query, Model model) {
        List<Subscriber> subscribers = subscriberRepository.findByEmailContainingIgnoreCase(query);
        System.out.println(subscribers);
        model.addAttribute("subscribers", subscribers);
        Long subscriberCount = subscriberService.getSubscriberCount();
        model.addAttribute("subscriberCount", subscriberCount);
        return "admin/subscriber/admin-subscriber";
    }

    @GetMapping("/admin/subscriber/delete")
    public String deleteSubscriber(@RequestParam int id) {
        if (subscriberRepository.findById(id).isPresent()) {
            Subscriber subscriber = subscriberRepository.findById(id).get();
            subscriberRepository.delete(subscriber);
        }
        return "redirect:/admin/subscriber";
    }
}
