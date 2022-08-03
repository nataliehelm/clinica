package com.dh.clinica.repository;

import com.dh.clinica.entity.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.Optional;

@Repository
@Transactional
public interface UsuarioRepository extends JpaRepository<Usuario,Long> {

    public Optional<Usuario> findByEmail(String email); //uso este método para buscar user por su email
}
