package com.dh.clinica;

import com.dh.clinica.entity.Odontologo;
import com.dh.clinica.exception.ResourceNotFoundException;
import com.dh.clinica.service.OdontologoService;
import org.junit.Assert;
import org.junit.FixMethodOrder;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.MethodSorters;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

@FixMethodOrder(MethodSorters.NAME_ASCENDING)
@RunWith(SpringRunner.class)
@SpringBootTest
public class OdontologServiceTest {

    @Autowired
    private OdontologoService odontologoService;

    @Test
    public void buscarTodos(){

        Odontologo odontologo = new Odontologo(35,"Ana", "Diaz");
        Odontologo odontologo1 = new Odontologo(452,"Juan","Perez");
        Odontologo odontologo2 = new Odontologo(42258, "Rosa","Guadalupe");
        Odontologo odontologo3 = new Odontologo(622, "Pablo","Gonzalez");

        odontologoService.guardar(odontologo);
        odontologoService.guardar(odontologo1);
        odontologoService.guardar(odontologo2);
        odontologoService.guardar(odontologo3);

        //odontologoService.eliminar(1);


        List<Odontologo> odontologos = odontologoService.buscarTodos();
        Assert.assertTrue(!odontologos.isEmpty());
        Assert.assertTrue(odontologos.size() > 0);
        System.out.println(odontologos);

    }
    @Test
    public void buscarPorId(){

        Assert.assertNotNull(odontologoService.buscar(4));
    }
    @Test
    public void eliminarPacienteTest() throws ResourceNotFoundException {
        odontologoService.eliminar(4);
        Assert.assertTrue(odontologoService.buscar(1)==null);
    }
}
