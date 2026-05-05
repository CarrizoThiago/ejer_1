package com.ham.portfolio_back.dto;

import lombok.Data;

@Data
public class ContactoDto {
    private String nombre;
    private String apellido;
    private String email;
    private String telefono;
    private String mensaje;
}