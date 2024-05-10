package SkyEdge.model;

import java.time.LocalDate;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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
    private LocalDate date = LocalDate.now();
    private List<Integer> productOrderId;
    private String status;
    private String address;
    private String phone;
    private double cost;
    private String customerName;
    private String email;
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