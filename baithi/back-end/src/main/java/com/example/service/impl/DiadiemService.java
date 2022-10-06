package com.example.service.impl;

import com.example.model.DiaDiem;
import com.example.repository.IDiadiemRepository;
import com.example.service.IDiadiemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DiadiemService implements IDiadiemService {
    @Autowired
    private IDiadiemRepository iDiadiemRepository;

    @Override
    public List<DiaDiem> findAll() {
        return this.iDiadiemRepository.findAll();
    }
}
