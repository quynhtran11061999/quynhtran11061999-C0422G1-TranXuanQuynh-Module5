package com.example.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "ben_xe")
public class BenXe {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ma_ben_xe")
    private Integer id;

    @Column(name = "bien_so_xe")
    private String bienSoXe;

    @Column(name = "loai_xe")
    private String loaiXe;

    @Column(name = "ten_nha_xe")
    private String tenNhaXe;

    @ManyToOne
    @JoinColumn(name = "diemDi",referencedColumnName = "ma_dia_diem")
    private DiaDiem diemDi;

   @ManyToOne
    @JoinColumn(name = "diemDen",referencedColumnName = "ma_dia_diem")
    private DiaDiem diemDen;

    @Column(name = "so_dien_thoai")
    private String soDienThoai;

    private String email;

    @Column(name = "gio_di")
    private String gioDi;

    @Column(name = "gio_den")
    private String gioDen;

    @Column(name = "trang_thai")
    private Integer trangThai;
}
