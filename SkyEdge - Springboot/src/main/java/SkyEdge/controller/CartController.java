package SkyEdge.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import SkyEdge.model.CartOrder;
import SkyEdge.model.Order;
import SkyEdge.model.Product;
import SkyEdge.model.ProductOrder;
import SkyEdge.model.User;
import SkyEdge.repository.ProductOrderRepository;
import SkyEdge.repository.ProductRepository;
import SkyEdge.service.OrderService;

@Controller
public class CartController {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private ProductOrderRepository productOrderRepository;

    private final OrderService orderService;

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
        Order productInCart = new Order();
        productInCart.setProducts(productOrders);
        productInCart.setCost(total);
        model.addAttribute("productInCart", productInCart);
        model.addAttribute("orders", orders);
        return "cart";
    }

    public CartController(OrderService orderService) {
        this.orderService = orderService;
    }

    // Endpoint to delete an order and its associated product orders
    @GetMapping("/cart/delete{orderId}")
    public void deleteOrderAndProductOrders(@PathVariable int orderId) {
        orderService.deleteOrderAndProductOrders(orderId);
    }
    @GetMapping("/cart/delete")
    public String deleteProductInCart(@RequestParam int id) {
        // if (orderService.findById(id).isPresent()) {
        //     Order order = orderService.findById(id).get();
        //     orderService.delete(order);
        // }
        return "redirect:/cart";
    }

    // @GetMapping("/cart/delete")
    // public String deleteProductInCart2(@RequestParam int id) {
        
    //     return "redirect:/cart";
    // }

    @GetMapping("/cart/payment-info")
    public String showPaymentInfo() {
        return "payment-info";
    }

    @PostMapping("/cart/payment-info")
    public String shopFormCart() {
        return "payment-info";
    }


    @GetMapping("/cart/payment")
    public String shopPayment() {
        return "payment";
    }
}
