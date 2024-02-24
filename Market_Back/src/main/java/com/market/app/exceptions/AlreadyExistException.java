package com.market.app.exceptions;

public class AlreadyExistException extends RuntimeException{
    public AlreadyExistException(String message) {

        super(message);
    }
}
