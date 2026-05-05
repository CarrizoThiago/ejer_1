package com.ham.portfolio_back.controller;

import com.ham.portfolio_back.dto.ContactoDto;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.ham.portfolio_back.service.ContactoService;

@RestController
@RequestMapping("/api/contacto")
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class ContactoController {

    private ContactoService ContactoService;

    @PostMapping
    public ResponseEntity<String> enviarContacto(@RequestBody ContactoDto ContactoDto) {
        ContactoService.enviarMail(ContactoDto);
        return ResponseEntity.ok("Mail enviado correctamente");
    }
}