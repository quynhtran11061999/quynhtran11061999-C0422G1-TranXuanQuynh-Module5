package com.example.repository;

import com.example.model.BenXe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
public interface IBenxeRepository extends JpaRepository<BenXe, Integer> {

    @Query(value = "select * from ben_xe where trang_thai = 1", nativeQuery = true)
    List<BenXe> findAll();

    @Query(value = "update ben_xe set trang_thai = 0 where ma_ben_xe = ?",nativeQuery = true)
    void deleteByQuery(int id);
}
