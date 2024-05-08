package SkyEdge.model;

import java.time.LocalDate;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "user_order")
@NoArgsConstructor
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int orderId;

    @Column(name = "order_date", columnDefinition = "DATE")
    private LocalDate date;

    @Column(name = "shipping_no")
    private String shippingNo;

    @OneToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "order_product_junction", joinColumns = {
            @JoinColumn(name = "order_id") }, inverseJoinColumns = {
                    @JoinColumn(name = "product_order_id") })
    private List<ProductOrder> products;
    private String status;
    private String address;
    private String phone;
    private double cost;
    private String customerName;
    // @Embedded
    // private Money shippingFee;

    // @Embedded
    // private Money discount;

    // @Embedded
    // private Payment payment;

    // @ElementCollection
    // private List<OrderItem> items;
    // }

    // @Embeddable
    // class Money {
    // private BigDecimal amount;
    // private String currency;
    // }

    // @Embeddable
    // class Payment {
    // private String method;
    // private String transactionNo;
    // }

    // @Embeddable
    // class OrderItem {
    // private String itemImg;
    // private String itemName;
    // private String sku;
    // private int quantity;

    // @Embedded
    // private Money priceItem;
}