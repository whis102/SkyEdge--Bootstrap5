package SkyEdge.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class CartOrder {
    private Product product;
    private int quantity;
}
