package com.dh.clinica.exception;

import org.apache.log4j.Logger;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice

public class GlobalExceptions {

    private static Logger logger = Logger.getLogger(GlobalExceptions.class);

    @ExceptionHandler({ResourceNotFoundException.class})
    public ResponseEntity<String> tratarErrorNotFound(ResourceNotFoundException ex){
        logger.error(ex.getMessage());
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ex.getMessage()+" - Desde: GlobalExceptions");
    }
}
