package SkyEdge.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import SkyEdge.model.CartOrder;
import SkyEdge.model.Order;
import SkyEdge.model.ProductOrder;
import SkyEdge.model.User;
import SkyEdge.repository.OrderRepository;
import SkyEdge.repository.ProductOrderRepository;
import SkyEdge.repository.ProductRepository;
import SkyEdge.repository.UserRepository;
import SkyEdge.service.AuthenticationService;

@Controller
public class CartController {
    @Autowired
    private AuthenticationService authenticationService;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private ProductOrderRepository productOrderRepository;
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private OrderRepository orderRepository;

    @GetMapping("/cart")
    public String cart(Model model, @AuthenticationPrincipal User user) {
        List<ProductOrder> productOrders = productOrderRepository.findAllByUser(user);
        List<CartOrder> orders = new ArrayList<>();
        int total = 0;
        for (ProductOrder productOrder : productOrders) {
            orders.add(new CartOrder(productRepository.findOneById(productOrder.getProductId()),
                    productOrder.getQuantity()));
            total += productRepository.findOneById(productOrder.getProductId()).getPrice();
        }
        Order myOrder = new Order();
        myOrder.setProducts(productOrders);
        myOrder.setCost(total);
        model.addAttribute("myOrder", myOrder);
        model.addAttribute("orders", orders);
        return "cart";
    }

    @PostMapping("/submitCart")
    public String shopFormCart(Model model, @AuthenticationPrincipal User user, @ModelAttribute Order myOrder) {
        Order newOrder = new Order();
        newOrder.setProducts(myOrder.getProducts());
        newOrder.setShippingNo("random shipping number");
        newOrder.setAddress(myOrder.getAddress());
        newOrder.setCost(myOrder.getCost());
        orderRepository.save(newOrder);
        return "cart";
    }

}
