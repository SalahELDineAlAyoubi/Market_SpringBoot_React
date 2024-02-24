package com.market.app.dto.Response;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.*;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data

public class RegionDtoResponse {
    private Integer id;
    private String name;


}
