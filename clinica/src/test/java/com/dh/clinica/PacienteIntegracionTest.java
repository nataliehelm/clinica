package com.dh.clinica;


import com.dh.clinica.entity.Domicilio;
import com.dh.clinica.entity.Paciente;
import com.dh.clinica.service.PacienteService;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.util.Date;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
public class PacienteIntegracionTest {

    @Autowired
    private PacienteService pacienteService;
    @Autowired
    private MockMvc mockMvc;

    public void cargarDataSet() {
        Domicilio domicilio = new Domicilio("Av Santa fe", "444", "CABA", "Buenos Aires");
        Paciente p = pacienteService.guardar(new Paciente("Santiago", "Paz", "88888888", new Date(), domicilio));
        Domicilio domicilio1 = new Domicilio("Av Avellaneda", "333", "CABA", "Buenos Aires");
        Paciente p1 = pacienteService.guardar(new Paciente("Micaela", "Perez", "99999999", new Date(), domicilio1));
        Domicilio domicilio2 = new Domicilio("Av Avellaneda", "3", "CABA", "Buenos Aires");
        Paciente p2 = pacienteService.guardar(new Paciente("Noelia", "Perez", "99999999", new Date(), domicilio2));
    }

    @Test
    public void listarPacientes() throws Exception {
        this.cargarDataSet();

        this.mockMvc.perform(MockMvcRequestBuilders.get("/pacientes"))
                        .andDo(MockMvcResultHandlers.print())
                        .andExpect(MockMvcResultMatchers.status().isOk());

    }


    @Test
    public void buscarPorId() throws Exception{
        System.out.println("==============================");
        System.out.println("TEST BUSCAR PACIENTE POR ID");
        System.out.println("==============================");
        Domicilio domicilio = new Domicilio("Calle", "123", "Temperley", "Buenos Aires");
        Paciente p = pacienteService.guardar(new Paciente("Tomas", "Pereyra", "12345678", new Date(), domicilio));

        MvcResult response = this.mockMvc.perform(MockMvcRequestBuilders.get("/pacientes/{id}", p.getId()))
                .andDo(MockMvcResultHandlers.print())
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andReturn();

        Assert.assertEquals("application/json", response.getResponse().getContentType());
    }


}
