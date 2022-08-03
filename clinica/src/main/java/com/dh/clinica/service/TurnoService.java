package com.dh.clinica.service;

import com.dh.clinica.entity.Turno;
import com.dh.clinica.exception.BadRequestException;
import com.dh.clinica.exception.ResourceNotFoundException;
import com.dh.clinica.repository.TurnoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;

@Service

public class TurnoService {

    @Autowired
    private TurnoRepository turnoRepository;
    @Autowired
    private PacienteService pacienteService;
    @Autowired
    private OdontologoService odontologoService;

    public TurnoService(TurnoRepository turnoRepository) {
        this.turnoRepository = turnoRepository;
    }

    public List<Turno> buscarTodos(){
        return turnoRepository.findAll();
    }

    public Turno registrarTurno(Turno turno) throws BadRequestException {
        if (pacienteService.buscar(turno.getPaciente().getId()) == null || odontologoService.buscar(turno.getOdontologo().getId()) == null)
            throw new BadRequestException("El paciente o el odontólogo no existen");
        return turnoRepository.save(turno);
    }

    public void eliminar(Integer id) throws ResourceNotFoundException {
        //turnoRepository.deleteById(id);
        if (this.buscar(id) == null)
            throw new ResourceNotFoundException("No existe un turno con el ID: "+id);
        turnoRepository.deleteById(id);
    }

    public Turno buscar(Integer id) throws ResourceNotFoundException {
        Turno turno=null;
        Optional<Turno> optionalTurno= turnoRepository.findById(id);

        if (!optionalTurno.isPresent())
            throw new ResourceNotFoundException("No existe un turno con el ID: "+id);
        return optionalTurno.get();
    }

    public Turno actualizar(Turno turno) {
        return turnoRepository.save(turno);
    }

}
