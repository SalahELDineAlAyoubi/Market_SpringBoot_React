package com.market.app.dto.arg;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
public class CategoryDto {
    private Integer id;
    private String name;
}
