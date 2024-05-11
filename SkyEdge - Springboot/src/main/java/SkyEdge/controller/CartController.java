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
import SkyEdge.model.CartOrderDTO;
import SkyEdge.model.Order;
import SkyEdge.model.Product;
import SkyEdge.model.ProductOrder;
import SkyEdge.model.User;
import SkyEdge.model.Voucher;
import SkyEdge.repository.CartOrderRepository;
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
    private CartOrderRepository cartOrderRepository;

    @Autowired
    private VoucherRepository voucherRepository;
    private final OrderService orderService;

    @Autowired
    private OrderRepository orderRepository;

    @GetMapping("/cart")
    public String cart(Model model, @AuthenticationPrincipal User user) {
        List<CartOrder> cartOrders = cartOrderRepository.findAllByUserId(user.getUserId());
        List<Integer> cartOrderIds = new ArrayList<>();
        List<CartOrderDTO> cartOrderDTOs = new ArrayList();
        int total = 0;
        for (CartOrder cartOrder : cartOrders) {
            cartOrderIds.add(cartOrder.getCartOrderId());
            Product product = productRepository.findOneById(cartOrder.getProductId());
            CartOrderDTO cartOrderDTO = new CartOrderDTO(product, cartOrder.getQuantity());
            cartOrderDTOs.add(cartOrderDTO);
            total += product.getPrice() * (cartOrder.getQuantity());
        }
        Order productInCart = new Order();
        productInCart.setProductOrderId(cartOrderIds);
        productInCart.setCost(total);
        model.addAttribute("productInCart", productInCart);
        model.addAttribute("orders", cartOrderDTOs);
        return "cart";
    }

    public CartController(OrderService orderService) {
        this.orderService = orderService;
    }

    // Endpoint to delete an order and its associated product orders

    @GetMapping("/cart/delete")
    public String deleteProductInCart(@RequestParam("id") int id, @AuthenticationPrincipal User user) {
        int cartOrderId = cartOrderRepository.findByProductIdAndUserId(id, user.getUserId()).get().getCartOrderId();
        cartOrderRepository.deleteById(cartOrderId);
        return "redirect:/cart";
    }
    // @GetMapping("/cart/delete")
    // public String deleteProductInCart2(@RequestParam int id) {

    // return "redirect:/cart";
    // }

    @GetMapping("/cart/payment-info")
    public String showPaymentInfo(Model model, @AuthenticationPrincipal User user) {
        List<CartOrder> cartOrders = cartOrderRepository.findAllByUserId(user.getUserId());
        List<Integer> cartOrderIds = new ArrayList<>();
        List<CartOrderDTO> cartOrderDTOs = new ArrayList<>();
        int total = 0;
        for (CartOrder cartOrder : cartOrders) {
            cartOrderIds.add(cartOrder.getCartOrderId());
            Product product = productRepository.findOneById(cartOrder.getProductId());
            CartOrderDTO cartOrderDTO = new CartOrderDTO(product, cartOrder.getQuantity());
            cartOrderDTOs.add(cartOrderDTO);
            total += product.getPrice() * (cartOrder.getQuantity());
        }
        Order productInCart = new Order();
        productInCart.setProductOrderId(cartOrderIds);
        productInCart.setCost(total);
        model.addAttribute("productInCart", productInCart);
        model.addAttribute("orders", cartOrderDTOs);
        return "payment-info";
    }

    @GetMapping("/cart/payment")
    public String shopPayment(Model model, @AuthenticationPrincipal User user,
            @RequestParam("customerName") String customerName, @RequestParam("email") String email,
            @RequestParam("phone") String phone, @RequestParam("address") String address) {
        List<CartOrder> cartOrders = cartOrderRepository.findAllByUserId(user.getUserId());
        List<Integer> productOrderIds = new ArrayList<>();
        List<CartOrderDTO> cartOrderDTOs = new ArrayList<>();
        List<Voucher> vouchers = voucherRepository.findAll();
        List<ProductOrder> productOrders = productOrderRepository.findAllByUserId(user.getUserId());
        int total = 0;
        for (CartOrder cartOrder : cartOrders) {
            Product product = productRepository.findOneById(cartOrder.getProductId());
            CartOrderDTO cartOrderDTO = new CartOrderDTO(product, cartOrder.getQuantity());
            cartOrderDTOs.add(cartOrderDTO);
            total += product.getPrice() * (cartOrder.getQuantity());
            ProductOrder productOrder = new ProductOrder();
            productOrder.setProductId(product.getId());
            productOrder.setQuantity(cartOrder.getQuantity());
            productOrder.setUserId(user.getUserId());
            productOrderRepository.save(productOrder);
            productOrderIds.add(productOrder.getProductOrderId());
        }
        Order productInCart = new Order();
        productInCart.setProductOrderId(productOrderIds);
        productInCart.setCost(total);
        productInCart.setCustomerName(customerName);
        productInCart.setAddress(address);
        productInCart.setEmail(email);
        productInCart.setPhone(phone);
        model.addAttribute("productInCart", productInCart);
        model.addAttribute("orders", cartOrderDTOs);
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
        order.setProductOrderId(productInCart.getProductOrderId());
        orderRepository.save(order);
        cartOrderRepository.deleteAll();
        return "redirect:/cart";
    }
}
