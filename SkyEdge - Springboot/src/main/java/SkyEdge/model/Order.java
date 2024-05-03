package SkyEdge.model;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Embeddable;
import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@NoArgsConstructor
public class Order {
    @Id
    private String orderID;

    @Column(name = "order_date", columnDefinition = "DATE")
    private LocalDate date;

    @Column(name = "shipping_no")
    private String shippingNo;

    private String status;
    private String address;
    private String phone;

    @Embedded
    private Money shippingFee;

    @Embedded
    private Money discount;

    @Embedded
    private Payment payment;

    @ElementCollection
    private List<OrderItem> items;
}

@Embeddable
class Money {
    private BigDecimal amount;
    private String currency;
}

@Embeddable
class Payment {
    private String method;
    private String transactionNo;
}

@Embeddable
class OrderItem {
    private String itemImg;
    private String itemName;
    private String sku;
    private int quantity;

    @Embedded
    private Money priceItem;
}