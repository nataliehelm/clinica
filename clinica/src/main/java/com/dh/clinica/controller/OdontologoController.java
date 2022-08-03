package com.dh.clinica.controller;

import com.dh.clinica.entity.Odontologo;
import com.dh.clinica.exception.ResourceNotFoundException;
import com.dh.clinica.service.OdontologoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController //clase controlador
@RequestMapping("/odontologos") //indicamos a que tabla pertenece

public class OdontologoController {

    @Autowired
    private OdontologoService odontologoService;

    //GUARDAR
    @PostMapping
    public ResponseEntity<Odontologo> guardar(@RequestBody Odontologo odontologo){
        return ResponseEntity.ok(odontologoService.guardar(odontologo));
    }

    //ELIMINAR
    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminar(@PathVariable Integer id) throws ResourceNotFoundException {
            odontologoService.eliminar(id);
            return ResponseEntity.status(HttpStatus.OK).body("Eliminado");
    }

    //BUSCAR POR ID
    @GetMapping("/{id}") //envio parametro con un GET
    public ResponseEntity<Odontologo> buscar(@PathVariable Integer id){
        Odontologo odontologo = odontologoService.buscar(id);
        if(odontologo !=null){
            return ResponseEntity.ok(odontologo);
        }else{
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    //BUSCAR TODOS
    @GetMapping
    public ResponseEntity<List<Odontologo>> buscarTodos(){
        return ResponseEntity.ok(odontologoService.buscarTodos());
    }

    //ACTUALIZAR CON RESPONSE ENTITY
    @PutMapping
    public ResponseEntity<Odontologo> actualizar(@RequestBody Odontologo odontologo){
        ResponseEntity<Odontologo> response;
        //verificar si el Id es distinto de null y si el paciente existe
        if (odontologo.getId() != null && odontologoService.buscar(odontologo.getId()) != null) {
            response=ResponseEntity.ok(odontologoService.actualizar(odontologo));
        } else {
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return response;
    }
}
