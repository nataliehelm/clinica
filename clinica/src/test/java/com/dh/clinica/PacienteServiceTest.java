package com.dh.clinica;


import com.dh.clinica.entity.Domicilio;
import com.dh.clinica.entity.Paciente;
import com.dh.clinica.exception.ResourceNotFoundException;
import com.dh.clinica.service.DomicilioService;
import com.dh.clinica.service.PacienteService;
import org.junit.Assert;
import org.junit.FixMethodOrder;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.MethodSorters;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Date;
import java.util.List;

@FixMethodOrder(MethodSorters.NAME_ASCENDING)
@RunWith(SpringRunner.class)
@SpringBootTest
public class PacienteServiceTest {

    @Autowired
    private PacienteService pacienteService;
    @Autowired
    private DomicilioService domicilioService;


    //@BeforeClass
    public void cargarDataSet() {
        Domicilio domicilio = new Domicilio("Av Santa fe", "444", "CABA", "Buenos Aires");
        Paciente p = pacienteService.guardar(new Paciente("Santiago", "Paz", "88888888", new Date(), domicilio));
        Domicilio domicilio1 = new Domicilio("Av Avellaneda", "333", "CABA", "Buenos Aires");
        Paciente p1 = pacienteService.guardar(new Paciente("Micaela", "Perez", "99999999", new Date(), domicilio1));
        Domicilio domicilio2 = new Domicilio("Av Avellaneda", "3", "CABA", "Buenos Aires");
        Paciente p2 = pacienteService.guardar(new Paciente("Noelia", "Perez", "99999999", new Date(), domicilio2));
    }

    @Test
    public void agregarYBuscarPacienteTest(){
        Domicilio domicilio = new Domicilio("Calle", "123", "Temperley", "Buenos Aires");
        Paciente p = pacienteService.guardar(new Paciente("Tomas", "Pereyra", "12345678", new Date(), domicilio));

        Assert.assertNotNull(pacienteService.buscar(p.getId()));
        System.out.println(p.getId());
    }


    @Test
    public void eliminarPacienteTest() throws ResourceNotFoundException {

        pacienteService.eliminar(1);
        Assert.assertTrue(pacienteService.buscar(1) == null);

    }

    @Test
    public void traerTodos() {
        List<Paciente> pacientes = pacienteService.buscarTodos();
        boolean vacio = pacientes.isEmpty();
        Assert.assertTrue(!vacio);
        //System.out.println(vacio);
        Assert.assertTrue(pacientes.size() > 0);


    }
}
