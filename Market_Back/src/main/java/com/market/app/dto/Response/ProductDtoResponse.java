package com.market.app.dto.Response;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
public class ProductDtoResponse {
    public String message ;
    public  boolean isSuccess;
}
