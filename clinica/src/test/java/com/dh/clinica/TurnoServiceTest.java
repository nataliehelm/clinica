package com.dh.clinica;

import com.dh.clinica.entity.Domicilio;
import com.dh.clinica.entity.Odontologo;
import com.dh.clinica.entity.Paciente;
import com.dh.clinica.entity.Turno;
import com.dh.clinica.exception.BadRequestException;
import com.dh.clinica.exception.ResourceNotFoundException;
import com.dh.clinica.service.DomicilioService;
import com.dh.clinica.service.OdontologoService;
import com.dh.clinica.service.PacienteService;
import com.dh.clinica.service.TurnoService;
import org.junit.Assert;
import org.junit.FixMethodOrder;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.MethodSorters;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.lang.module.ResolutionException;
import java.util.Date;

@FixMethodOrder(MethodSorters.NAME_ASCENDING)
@RunWith(SpringRunner.class)
@SpringBootTest
public class TurnoServiceTest {
    @Autowired
    private TurnoService turnoService;
    @Autowired
    private PacienteService pacienteService;
    @Autowired
    private DomicilioService domicilioService;
    @Autowired
    private OdontologoService odontologoService;

    /*public void cargarDataSet() {
        Domicilio domicilio = new Domicilio("Av Santa fe", "444", "CABA", "Buenos Aires");
        Paciente p = pacienteService.guardar(new Paciente("Santiago", "Paz", "88888888", new Date(), domicilio));
        Odontologo odontologo = new Odontologo( 123,"Laura", "Rodriguez");
    }*/

    @Test
    public void crearTurno() throws BadRequestException {
        Domicilio domicilio = new Domicilio("Av Santa fe", "444", "CABA", "Buenos Aires");
        Paciente p = pacienteService.guardar(new Paciente("Santiago", "Paz", "88888888", new Date(), domicilio));
        Odontologo odontologo = odontologoService.guardar(new Odontologo(123,"Laura", "Rodriguez"));

        Turno turno = new Turno(p, odontologo, new Date());
        turnoService.registrarTurno(turno);
        System.out.println(turno);
    }

    @Test
    public void buscarTurno() throws ResourceNotFoundException {
        Assert.assertNotNull(turnoService.buscar(152));
    }



}
