package com.dh.clinica.service;

import com.dh.clinica.exception.ResourceNotFoundException;
import com.dh.clinica.repository.DomicilioRepository;
import com.dh.clinica.entity.Domicilio;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DomicilioService {

    private DomicilioRepository domicilioRepository;

    public DomicilioService(DomicilioRepository domicilioRepository) {
        this.domicilioRepository = domicilioRepository;
    }

    public Domicilio guardar(Domicilio d){
        return domicilioRepository.save(d);
    }
    public Domicilio buscar(Integer id){
        return domicilioRepository.findById(id).get();
    }
    public List<Domicilio> buscarTodos(){
        return domicilioRepository.findAll();
    }

    public void eliminar(Integer id) throws ResourceNotFoundException {
        if(buscar(id) == null){
            throw new ResourceNotFoundException("No existe el domicilio con id: " + id);
        }else{
            domicilioRepository.deleteById(id);
        }
    }

}
