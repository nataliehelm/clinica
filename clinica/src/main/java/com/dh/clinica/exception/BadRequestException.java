package com.dh.clinica.exception;

public class BadRequestException extends Exception{
    public BadRequestException(String message){
        super (message);
    }
}
