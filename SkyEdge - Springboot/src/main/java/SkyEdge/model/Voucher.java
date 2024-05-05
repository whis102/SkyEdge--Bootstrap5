// package SkyEdge.model;

// import java.time.LocalDate;

// import jakarta.persistence.Column;
// import jakarta.persistence.Entity;
// import jakarta.persistence.Id;
// import lombok.Getter;
// import lombok.NoArgsConstructor;
// import lombok.Setter;

// @Getter
// @Setter
// @Entity
// @NoArgsConstructor
// public class Voucher {
// @Id
// private String id;

// @Column(name = "voucher_icon")
// private String voucherIcon;

// @Column(name = "voucher_code", length = 45, nullable = false)
// private String voucherCode;

// @Column(name = "voucher_name", length = 100, nullable = false)
// private String voucherName;

// @Column(name = "discount", length = 10)
// private String discount;

// @Column(name = "type", length = 50)
// private String type;

// @Column(name = "stock")
// private int stock;

// @Column(name = "applicable", length = 1000)
// private String applicable;

// @Column(name = "validity_start")
// private LocalDate validityStart;

// @Column(name = "validity_end")
// private LocalDate validityEnd;

// }