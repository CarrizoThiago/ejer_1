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
/*papu cuando puedas separa los 2 mails en 2 funciones asi es mas legible papuuu */
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

        SimpleMailMessage mailMessage2 = new SimpleMailMessage();
        mailMessage2.setTo(contactoDto.getEmail());
        mailMessage2.setSubject("Confirmación de recibimiento");
        mailMessage2.setText("Gracias por tu mensaje, ya lo hemos recibido.");
        javaMailSender.send(mailMessage2);
    }
}