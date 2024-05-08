package SkyEdge.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import SkyEdge.model.ProductOrder;
import SkyEdge.model.User;

@Repository
public interface ProductOrderRepository extends JpaRepository<ProductOrder, Integer> {
    
    List<ProductOrder> findAllByUser(User user);

    ProductOrder findOneByProductId(int id);

    void deleteAllByProductId(int id);

    void deleteByProductOrderId(int id);

    Optional<ProductOrder> findByProductId(int id);

    void deleteByProductId(int id);

}
