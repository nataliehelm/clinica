package com.dh.clinica.service;
import com.dh.clinica.entity.Odontologo;
import com.dh.clinica.exception.GlobalExceptions;
import com.dh.clinica.exception.ResourceNotFoundException;
import com.dh.clinica.repository.OdontologoRepository;
import org.apache.log4j.Logger;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OdontologoService {

    private static Logger logger = Logger.getLogger(OdontologoService.class);

    private OdontologoRepository odontologoRepository;

    public OdontologoService(OdontologoRepository odontologoRepository) {
        this.odontologoRepository = odontologoRepository;
    }

    public Odontologo guardar (Odontologo odontologo){
        return odontologoRepository.save(odontologo);
    }

    public Odontologo buscar(Integer id){
        Odontologo odontologo=null;
        Optional<Odontologo> optionalOdontologo= odontologoRepository.findById(id);
        if (optionalOdontologo.isPresent()){
            odontologo= optionalOdontologo.get();
        }
        return odontologo;
    }

    public List<Odontologo> buscarTodos (){
        return odontologoRepository.findAll();
    }


    public void eliminar(Integer id) throws ResourceNotFoundException {
        if(buscar(id) == null){
            throw new ResourceNotFoundException("No existe el odontólogo con id: " + id);
        }else{
            odontologoRepository.deleteById(id);
            logger.info("Odontologo eliminado");
        }
    }

    public Odontologo actualizar(Odontologo o) {
        return odontologoRepository.save(o);
    }
}
