package com.ham.portfolio_back.service;

import com.ham.portfolio_back.dto.ContactoDto;
import lombok.AllArgsConstructor;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class ContactoService {

    private JavaMailSender javaMailSender;

    public void enviarMail(ContactoDto contactoDto) {
        SimpleMailMessage mailMessage = new SimpleMailMessage();

        mailMessage.setTo("thiagocarrizoham@gmail.com");
        mailMessage.setSubject("Contacto desde el portfolio");

        String cuerpo = "Nombre: " + contactoDto.getNombre() + " " + contactoDto.getApellido() + "\n" +
                "Email: " + contactoDto.getEmail() + "\n" +
                "Teléfono: " + contactoDto.getTelefono() + "\n" +
                "Mensaje: " + contactoDto.getMensaje();

        mailMessage.setText(cuerpo);

        javaMailSender.send(mailMessage);
    }
}