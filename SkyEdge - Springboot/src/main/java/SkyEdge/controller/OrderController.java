package SkyEdge.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import SkyEdge.model.CartOrder;
import SkyEdge.model.Order;
import SkyEdge.model.ProductOrder;
import SkyEdge.repository.OrderRepository;
import SkyEdge.repository.ProductRepository;

@Controller
@RequestMapping("/admin/order")
public class OrderController {
    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private ProductRepository productRepository;

    @GetMapping
    public String order(Model model) {
        List<Order> orders = orderRepository.findAll();

        model.addAttribute("orders", orders);
        return "admin/order/admin-order";
    }

    @GetMapping("/order-details")
    public String orderDetails(Model model, @RequestParam("id") int id) {
        Optional<Order> order = orderRepository.findById(id);
        List<ProductOrder> productOrders = order.get().getProducts();
        List<CartOrder> cartOrders = new ArrayList<>();
        for (ProductOrder productOrder : productOrders) {
            cartOrders.add(new CartOrder(productRepository.findById(productOrder.getProductId()).get(),
                    productOrder.getQuantity()));
        }
        model.addAttribute("products", cartOrders);
        model.addAttribute("order", order.get());
        return "admin/order/admin-orderdetails";
    }
}