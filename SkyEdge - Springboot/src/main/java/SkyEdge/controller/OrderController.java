package SkyEdge.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import SkyEdge.model.Order;
import SkyEdge.repository.OrderRepository;

@Controller
@RequestMapping("/admin/order")
public class OrderController {
    @Autowired
    private OrderRepository orderRepository;

    @GetMapping
    public String order(Model model) {
        List<Order> orders = orderRepository.findAll();

        model.addAttribute("orders", orders);
        return "admin/order/admin-order";
    }
}