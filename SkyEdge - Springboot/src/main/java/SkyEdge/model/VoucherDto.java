package SkyEdge.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class VoucherDto {
@Id
private int id;
private String icon;

private String code;


private String name;


private String discount;


private String type;


private int stock;


// private String applicable;


// private LocalDate validityStart;


// private LocalDate validityEnd;

}