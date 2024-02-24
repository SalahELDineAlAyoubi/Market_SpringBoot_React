package com.market.security.models;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
public class RegistrationDTO {
    private String username;
    private String password;
    private String mobileNumber;
    private String address;

    public RegistrationDTO(){
        super();
    }

    public RegistrationDTO(String username, String password,String mobileNumber,String address){
        super();
        this.username = username;
        this.password = password;
        this.mobileNumber = mobileNumber;
        this.address = address;
    }



}
