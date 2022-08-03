package com.dh.clinica.controller;

import com.dh.clinica.entity.Paciente;
import com.dh.clinica.exception.ResourceNotFoundException;
import com.dh.clinica.service.PacienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

    @RestController //clase controlador
    @RequestMapping("/pacientes") //indicamos a que tabla pertenece
    public class PacienteController {

        @Autowired
        private PacienteService pacienteService;

        //GUARDAR
        @PostMapping
        public ResponseEntity<Paciente> guardar(@RequestBody Paciente paciente){
            return ResponseEntity.ok(pacienteService.guardar(paciente));
        }

        //ELIMINAR
        @DeleteMapping("/{id}")
        public ResponseEntity<String> eliminar(@PathVariable Integer id) throws ResourceNotFoundException {
            pacienteService.eliminar(id);
            return ResponseEntity.ok().body("Eliminado");
        }

        //BUSCAR POR ID
        @GetMapping("/{id}") //envio parametro con un GET
        public ResponseEntity<Paciente> buscarPorId(@PathVariable Integer id){
            //return pacienteService.buscar(id);
            Paciente paciente = pacienteService.buscar(id);
            if(paciente !=null){
                return ResponseEntity.ok(paciente);
            }else{
                return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
            }
        }

        //BUSCAR TODOS
        @GetMapping
        public ResponseEntity<List<Paciente>> buscarTodos(){
            return ResponseEntity.ok(pacienteService.buscarTodos());
        }

        //ACTUALIZAR CON RESPONSE ENTITY
        @PutMapping
        public ResponseEntity<Paciente> actualizar(@RequestBody Paciente paciente){
            ResponseEntity<Paciente> response;
            //verificar si el Id es distinto de null y si el paciente existe
            if (paciente.getId() != null && pacienteService.buscar(paciente.getId()) != null) {
                response = ResponseEntity.ok(pacienteService.actualizar(paciente));
            } else {
                response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();
            }
            return response;
        }

    }
