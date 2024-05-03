package SkyEdge.model;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import java.math.BigDecimal;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@NoArgsConstructor
public class Product {
    @Id
    private String id;

    @Column(name = "img_src")
    private String imgSrc;

    @Column(name = "product_id", length = 45, nullable = false)
    private String productId;

    @Column(name = "product_name", length = 100, nullable = false)
    private String productName;

    @Column(name = "price", precision = 10, scale = 2)
    private BigDecimal price;

    @Column(name = "stock")
    private int stock;

    @Column(name = "description", length = 1000)
    private String description;

    @Column(name = "country", length = 100)
    private String country;

    @Column(name = "manufacturer", length = 100)
    private String manufacturer;

    @Column(name = "category", length = 50)
    private String category;

    @Column(name = "discount", length = 10)
    private String discount;

    @Column(name = "front", length = 10)
    private String front;

    @Column(name = "side", length = 10)
    private String side;

    @Column(name = "width", length = 10)
    private String width;

    @Column(name = "height", length = 10)
    private String height;

}