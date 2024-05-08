package SkyEdge.model;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

// data transfer object
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Entity
public class ProductOrder {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int productOrderId;
    private int productId;
    private int quantity;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinTable(name = "user_product_order_junction", joinColumns = {
            @JoinColumn(name = "product_order_id") }, inverseJoinColumns = {
                    @JoinColumn(name = "user_id") })
    private User user;

    public ProductOrder(int productId, int quantity) {
        this.productId = productId;
        this.quantity = quantity;
    }
}
