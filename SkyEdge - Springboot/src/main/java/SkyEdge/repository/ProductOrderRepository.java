package SkyEdge.repository;

import java.util.List;

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

    // @Modifying
    // @Transactional
    // @Query("delete from user_product_order_junction where user_id = :user_id")
    // void deleteByUserId(int id);
}
