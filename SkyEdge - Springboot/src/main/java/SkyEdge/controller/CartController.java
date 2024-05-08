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
import org.springframework.web.bind.annotation.RequestParam;

import SkyEdge.model.CartOrder;
import SkyEdge.model.Order;
import SkyEdge.model.Product;
import SkyEdge.model.ProductOrder;
import SkyEdge.model.User;
import SkyEdge.model.Voucher;
import SkyEdge.repository.OrderRepository;
import SkyEdge.repository.ProductOrderRepository;
import SkyEdge.repository.ProductRepository;
import SkyEdge.repository.VoucherRepository;
import SkyEdge.service.OrderService;

@Controller
public class CartController {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private ProductOrderRepository productOrderRepository;

    @Autowired
    private VoucherRepository voucherRepository;
    private final OrderService orderService;

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
            Product product = productRepository.findOneById(productOrder.getProductId());
            total += product.getPrice() * (productOrder.getQuantity());
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

    @GetMapping("/cart/delete")
    public String deleteProductInCart(@RequestParam("id") int id) {
        int productOrderId = productOrderRepository.findByProductId(id).get().getProductOrderId();
        productOrderRepository.deleteById(productOrderId);
        return "redirect:/cart";
    }
    // @GetMapping("/cart/delete")
    // public String deleteProductInCart2(@RequestParam int id) {

    // return "redirect:/cart";
    // }

    @GetMapping("/cart/payment-info")
    public String showPaymentInfo(Model model, @AuthenticationPrincipal User user) {
        List<ProductOrder> productOrders = productOrderRepository.findAllByUser(user);
        List<CartOrder> orders = new ArrayList<>();
        int total = 0;
        for (ProductOrder productOrder : productOrders) {
            orders.add(new CartOrder(productRepository.findOneById(productOrder.getProductId()),
                    productOrder.getQuantity()));
            Product product = productRepository.findOneById(productOrder.getProductId());
            total += product.getPrice() * (productOrder.getQuantity());
        }
        Order productInCart = new Order();
        productInCart.setProducts(productOrders);
        productInCart.setCost(total);
        model.addAttribute("productInCart", productInCart);
        model.addAttribute("orders", orders);
        return "payment-info";
    }

    @GetMapping("/cart/payment")
    public String shopPayment(Model model, @AuthenticationPrincipal User user,
            @RequestParam("customerName") String customerName, @RequestParam("email") String email,
            @RequestParam("phone") String phone, @RequestParam("address") String address) {
        List<Voucher> vouchers = voucherRepository.findAll();
        List<ProductOrder> productOrders = productOrderRepository.findAllByUser(user);
        List<CartOrder> orders = new ArrayList<>();
        int total = 0;
        for (ProductOrder productOrder : productOrders) {
            orders.add(new CartOrder(productRepository.findOneById(productOrder.getProductId()),
                    productOrder.getQuantity()));
            Product product = productRepository.findOneById(productOrder.getProductId());
            total += product.getPrice() * (productOrder.getQuantity());
        }
        Order productInCart = new Order();
        productInCart.setProducts(productOrders);
        productInCart.setCost(total);
        productInCart.setCustomerName(customerName);
        productInCart.setAddress(address);
        productInCart.setEmail(email);
        productInCart.setPhone(phone);
        model.addAttribute("productInCart", productInCart);
        model.addAttribute("orders", orders);
        model.addAttribute("vouchers", vouchers);
        return "payment";
    }

    @PostMapping("/cart/payment/add")
    public String sendOrder(@ModelAttribute Order productInCart) {
        Order order = new Order();
        order.setCost(productInCart.getCost());
        order.setAddress(productInCart.getAddress());
        order.setCustomerName(productInCart.getCustomerName());
        order.setEmail(productInCart.getEmail());
        order.setPhone(productInCart.getPhone());
        order.setStatus("PENDING");
        orderRepository.save(order);
        return "redirect:/cart";
    }
}
