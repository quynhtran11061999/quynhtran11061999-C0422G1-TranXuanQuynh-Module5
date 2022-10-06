package com.example.service;

import com.example.model.BenXe;

import java.util.List;

public interface IBenxeService {
    List<BenXe> findAll();

    BenXe findById(Integer id);

    void delete(int id);

    void save(BenXe benXe);
}
