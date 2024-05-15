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

import SkyEdge.model.CartOrderDTO;
import SkyEdge.model.Order;
import SkyEdge.model.ProductOrder;
import SkyEdge.repository.OrderRepository;
import SkyEdge.repository.ProductOrderRepository;
import SkyEdge.repository.ProductRepository;

@Controller
@RequestMapping("/admin/order")
public class OrderController {
    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private ProductOrderRepository productOrderRepository;

    @GetMapping
    public String order(Model model) {
        List<Order> orders = orderRepository.findAll();

        model.addAttribute("orders", orders);
        return "admin/order/admin-order";
    }

    @GetMapping("/order-details")
    public String orderDetails(Model model, @RequestParam("id") int id) {
        Optional<Order> order = orderRepository.findById(id);
        List<Integer> productOrderIds = order.get().getProductOrderId();
        List<CartOrderDTO> cartOrders = new ArrayList<>();
        for (int productOrderId : productOrderIds) {
            ProductOrder productOrder = productOrderRepository.findByProductOrderId(productOrderId).get();
            CartOrderDTO cartOrder = new CartOrderDTO(
                    productRepository.findById(productOrder.getProductId()).get(),
                    productOrder.getQuantity());
            cartOrders.add(cartOrder);
        }
        model.addAttribute("products", cartOrders);
        model.addAttribute("order", order.get());
        return "admin/order/admin-orderdetails";
    }

    @GetMapping("/approve")
    public String approveOrder(Model model, @RequestParam("id") int id) {
        Optional<Order> order = orderRepository.findById(id);
        order.get().setStatus("APPROVED");
        orderRepository.save(order.get());
        return "redirect:/admin/order";
    }

    @GetMapping("/reject")
    public String rejectOrder(Model model, @RequestParam("id") int id) {
        Optional<Order> order = orderRepository.findById(id);
        order.get().setStatus("REJECTED");
        orderRepository.save(order.get());
        return "redirect:/admin/order";
    }
}