package com.bienestarproyect.Bienestar.repository;

import com.bienestarproyect.Bienestar.entity.Cita;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CitaRepository extends JpaRepository<Cita, Long> {
    
    // Método simplificado - quitar el ordenamiento temporalmente
    List<Cita> findByClienteId(Long clienteId);
}