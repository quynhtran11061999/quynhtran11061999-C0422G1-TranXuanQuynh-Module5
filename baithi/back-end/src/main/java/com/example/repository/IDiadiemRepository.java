package com.example.repository;

import com.example.model.BenXe;
import com.example.model.DiaDiem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
public interface IDiadiemRepository extends JpaRepository<DiaDiem,Integer> {
    @Query(value = "select * from dia_diem", nativeQuery = true)
    List<DiaDiem> findAll();
}
