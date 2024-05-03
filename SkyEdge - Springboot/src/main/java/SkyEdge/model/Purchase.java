package SkyEdge.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Getter
@Setter
@Entity
@NoArgsConstructor
public class Purchase {
    @Id
    private Long orderNo;

    private String name;
    private BigDecimal amount;
    private LocalDateTime dateTime;
    private String status;
}