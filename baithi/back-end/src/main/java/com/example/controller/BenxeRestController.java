package com.example.controller;

import com.example.model.BenXe;
import com.example.model.DiaDiem;
import com.example.service.IBenxeService;
import com.example.service.IDiadiemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(value = "/xeRest")
public class BenxeRestController {
    @Autowired
    private IBenxeService iBenxeService;

    @Autowired
    private IDiadiemService iDiadiemService;

    @GetMapping(value = "")
    public ResponseEntity<List<BenXe>> goList(){
        List<BenXe> benXeList = this.iBenxeService.findAll();
        if (benXeList.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(benXeList,HttpStatus.OK);
    }

    @GetMapping(value = "/diaDiem")
    public ResponseEntity<List<DiaDiem>> goListDiaDiem(){
        List<DiaDiem> diaDiemList = this.iDiadiemService.findAll();
        if (diaDiemList.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(diaDiemList,HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void>deleteById(@PathVariable Integer id){
        this.iBenxeService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<BenXe>findById(@PathVariable Integer id){
        return new ResponseEntity<>(this.iBenxeService.findById(id),HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<Void>updateById(@RequestBody BenXe benXe){
        this.iBenxeService.save(benXe);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<Void>create(@RequestBody BenXe benXe){
         this.iBenxeService.save(benXe);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
