package com.dh.clinica.service;

import com.dh.clinica.entity.Usuario;
import com.dh.clinica.entity.UsuarioRole;
import com.dh.clinica.repository.UsuarioRepository;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    private UsuarioRepository usuarioRepository;

    public DataLoader(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    @Override
    public void run(ApplicationArguments args) throws Exception {

        //Encriptar las contraseñas
        BCryptPasswordEncoder passwordEncoder1 = new BCryptPasswordEncoder();
        String password1 = passwordEncoder1.encode("1");
        /*BCryptPasswordEncoder passwordEncoder2 = new BCryptPasswordEncoder();
        String password2 = passwordEncoder2.encode("password2");*/

        //Crear 2 instancias de usuarios para probar que funcione
        Usuario usuario1= new Usuario("Admin","admin25", "2", password1, UsuarioRole.ADMIN);
        //Usuario usuario2= new Usuario("User","user", "user6@dh.com", password2, UsuarioRole.USER);
        this.usuarioRepository.save(usuario1);
        //this.usuarioRepository.save(usuario2);
    }
}
