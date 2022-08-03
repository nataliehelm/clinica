package com.dh.clinica.controller;

import com.dh.clinica.entity.Turno;
import com.dh.clinica.exception.BadRequestException;
import com.dh.clinica.exception.GlobalExceptions;
import com.dh.clinica.exception.ResourceNotFoundException;
import com.dh.clinica.service.OdontologoService;
import com.dh.clinica.service.PacienteService;
import com.dh.clinica.service.TurnoService;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/turnos")
public class TurnoController {

    @Autowired
    private TurnoService turnoService;

    private static Logger logger = Logger.getLogger(TurnoController.class);

    /*@Autowired
    private PacienteService pacienteService;

    @Autowired
    private OdontologoService odontologoService;*/

    @GetMapping
    public ResponseEntity<List<Turno>> buscarTodos(){
        return ResponseEntity.ok(turnoService.buscarTodos());
    }

    @PostMapping
    public ResponseEntity<Turno> registrarTurno(@RequestBody Turno turno) throws BadRequestException{
        return ResponseEntity.ok(turnoService.registrarTurno(turno));
    }

    //ELIMINAR
    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminar(@PathVariable Integer id) throws ResourceNotFoundException {
        ResponseEntity<String> response;
        turnoService.eliminar(id);

        response = ResponseEntity.status(HttpStatus.OK).body("Eliminado");
        return response;
    }

    //ACTUALIZAR CON RESPONSE ENTITY
    @PutMapping
    public ResponseEntity<Turno> actualizar(@RequestBody Turno turno) throws ResourceNotFoundException{
        ResponseEntity<Turno> response;
        //verificar si el Id es distinto de null y si el paciente existe
        if (turno.getId() != null && turnoService.buscar(turno.getId()) != null) {
            response=ResponseEntity.ok(turnoService.actualizar(turno));
        } else {
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return response;
    }
    //BUSCAR POR ID
    @GetMapping("/{id}") //envio parametro con un GET
    public Turno buscarPorId(@PathVariable Integer id) throws ResourceNotFoundException{
        return turnoService.buscar(id);
    }

    @ExceptionHandler({BadRequestException.class})
    public ResponseEntity<String> procesarBadRequest(BadRequestException ex){
        logger.error(ex.getMessage());
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ex.getMessage());
    }

}
