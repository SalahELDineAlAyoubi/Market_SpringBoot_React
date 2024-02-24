package com.market.app.exceptions;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
public class ErrorResponse {
    private int status;
    private String message;
    private long timeStamp;
}
