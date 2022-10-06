package com.example.service.impl;

import com.example.model.BenXe;
import com.example.repository.IBenxeRepository;
import com.example.service.IBenxeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BenxeService implements IBenxeService {
    @Autowired
    private IBenxeRepository iBenxeRepository;

    @Override
    public List<BenXe> findAll() {
        return this.iBenxeRepository.findAll();
    }

    @Override
    public BenXe findById(Integer id) {
        return this.iBenxeRepository.findById(id).orElse(null);
    }

    @Override
    public void delete(int id) {
        this.iBenxeRepository.delete(findById(id));
//        this.iBenxeRepository.deleteByQuery(id);
    }

    @Override
    public void save(BenXe benXe) {
        this.iBenxeRepository.save(benXe);
    }
}
