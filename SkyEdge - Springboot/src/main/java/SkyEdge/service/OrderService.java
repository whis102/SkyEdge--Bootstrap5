package SkyEdge.service;

import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import SkyEdge.model.Order;
import SkyEdge.model.Product;
import SkyEdge.repository.OrderRepository;

@Service
@Transactional
public class OrderService {
    private final OrderRepository orderRepository;

    public OrderService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    public void deleteOrderAndProductOrders(int orderId) {
        Order order = orderRepository.findById(orderId).orElse(null);
        if (order != null) {
            // Xóa tất cả các product orders của order
            order.getProducts().clear();
            // Lưu lại để cập nhật cơ sở dữ liệu
            orderRepository.save(order);
            // Xóa order
            orderRepository.delete(order);
        }
    }

    public Optional<Product> findById(int id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'findById'");
    }

    public void delete(Order order) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'delete'");
    }
}
