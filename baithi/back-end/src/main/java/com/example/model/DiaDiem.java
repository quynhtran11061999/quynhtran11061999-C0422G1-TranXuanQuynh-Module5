package com.example.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "dia_diem")
public class DiaDiem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ma_dia_diem")
    private Integer id;

    @Column(name = "dia_chi")
    private String name;

    @OneToMany(mappedBy = "diemDi",cascade = CascadeType.ALL)
    @JsonBackReference(value = "diemDi")
    private List<BenXe> diemDi;

    @OneToMany(mappedBy = "diemDen",cascade = CascadeType.ALL)
    @JsonBackReference(value = "diemDen")
    private List<BenXe> diemDen;
}
