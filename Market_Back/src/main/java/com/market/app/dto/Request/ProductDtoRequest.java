package com.market.app.dto.Request;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
public class ProductDtoRequest {
    private String name;
    private double price;
    private int quantity;
    private String imageUrl;

}
