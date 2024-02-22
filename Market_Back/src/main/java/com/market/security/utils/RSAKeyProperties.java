package com.market.security.utils;

import java.security.KeyPair;
import java.security.interfaces.RSAPrivateKey;
import java.security.interfaces.RSAPublicKey;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.springframework.stereotype.Component;

@Component
@Data
@Getter
@Setter
public class RSAKeyProperties {

    private RSAPublicKey publicKey;
    private RSAPrivateKey privateKey;

    public RSAKeyProperties(){
        KeyPair pair = KeyGeneratorUtility.generateRsaKey();
        this.publicKey = (RSAPublicKey) pair.getPublic();
        this.privateKey = (RSAPrivateKey) pair.getPrivate();
    }



}