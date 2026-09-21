CREATE DATABASE IF NOT EXISTS hostelhub
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

USE hostelhub;

-- =========================================
-- 1. NGUOI DUNG
-- =========================================
CREATE TABLE NguoiDung (
    Id BIGINT AUTO_INCREMENT PRIMARY KEY,
    HoTen VARCHAR(100) NOT NULL,
    Email VARCHAR(150) NOT NULL UNIQUE,
    SoDienThoai VARCHAR(20),
    MatKhau VARCHAR(255) NOT NULL,
    VaiTro ENUM('SINH_VIEN', 'CHU_TRO', 'ADMIN') NOT NULL,
    SoDuVi DECIMAL(15,2) NOT NULL DEFAULT 0,
    TrangThai ENUM('HOAT_DONG', 'BI_KHOA') NOT NULL DEFAULT 'HOAT_DONG',
    NgayTao DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    NgayCapNhat DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP
);

-- =========================================
-- 2. PHONG TRO
-- =========================================
CREATE TABLE PhongTro (
    Id BIGINT AUTO_INCREMENT PRIMARY KEY,
    TieuDe VARCHAR(255) NOT NULL,
    DiaChi VARCHAR(255) NOT NULL,
    Tinh VARCHAR(100) NOT NULL,
    Huyen VARCHAR(100),
    Phuong VARCHAR(100),
    GiaThue DECIMAL(15,2) NOT NULL,
    GiaDien DECIMAL(15,2),
    GiaNuoc DECIMAL(15,2),
    DienTich DECIMAL(10,2),
    MoTa TEXT,
    NoiQuy TEXT,
    TrangThaiPhong ENUM('CON_PHONG', 'HET_PHONG', 'DA_COC')
        NOT NULL DEFAULT 'CON_PHONG',
    TrangThaiDuyet ENUM('CHO_DUYET', 'CONG_KHAI', 'TU_CHOI')
        NOT NULL DEFAULT 'CHO_DUYET',
    IdChuTro BIGINT NOT NULL,
    DanhGiaTrungBinh FLOAT NOT NULL DEFAULT 0,
    SoLuongDanhGia INT NOT NULL DEFAULT 0,
    NgayTao DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    NgayCapNhat DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP,

    CONSTRAINT fk_phongtro_chutro
        FOREIGN KEY (IdChuTro) REFERENCES NguoiDung(Id)
);

CREATE INDEX idx_phongtro_giathue
    ON PhongTro(GiaThue);

CREATE INDEX idx_phongtro_diachi
    ON PhongTro(Tinh, Huyen, Phuong);

CREATE INDEX idx_phongtro_trangthai
    ON PhongTro(TrangThaiDuyet, TrangThaiPhong);

-- =========================================
-- 3. TIEN ICH
-- =========================================
CREATE TABLE TienIch (
    Id BIGINT AUTO_INCREMENT PRIMARY KEY,
    TenTienIch VARCHAR(100) NOT NULL UNIQUE
);

-- =========================================
-- 4. PHONG TRO - TIEN ICH
-- =========================================
CREATE TABLE PhongTro_TienIch (
    IdPhong BIGINT NOT NULL,
    IdTienIch BIGINT NOT NULL,

    PRIMARY KEY (IdPhong, IdTienIch),

    CONSTRAINT fk_ptti_phong
        FOREIGN KEY (IdPhong) REFERENCES PhongTro(Id)
        ON DELETE CASCADE,

    CONSTRAINT fk_ptti_tienich
        FOREIGN KEY (IdTienIch) REFERENCES TienIch(Id)
        ON DELETE CASCADE
);

-- =========================================
-- 5. HINH ANH PHONG
-- =========================================
CREATE TABLE HinhAnhPhong (
    Id BIGINT AUTO_INCREMENT PRIMARY KEY,
    IdPhong BIGINT NOT NULL,
    DuongDanAnh VARCHAR(500) NOT NULL,
    SapXep INT NOT NULL DEFAULT 0,
    NgayTao DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_hinhanh_phong
        FOREIGN KEY (IdPhong) REFERENCES PhongTro(Id)
        ON DELETE CASCADE
);

-- =========================================
-- 6. LICH HEN
-- =========================================
CREATE TABLE LichHen (
    Id BIGINT AUTO_INCREMENT PRIMARY KEY,
    IdSinhVien BIGINT NOT NULL,
    IdPhong BIGINT NOT NULL,
    ThoiGianHen DATETIME NOT NULL,
    GhiChu TEXT,
    TrangThaiLichHen ENUM(
        'CHO_DUYET',
        'DA_XAC_NHAN',
        'DA_TU_CHOI',
        'DA_HUY'
    ) NOT NULL DEFAULT 'CHO_DUYET',
    NgayTao DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    NgayCapNhat DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP,

    CONSTRAINT fk_lichhen_sinhvien
        FOREIGN KEY (IdSinhVien) REFERENCES NguoiDung(Id),

    CONSTRAINT fk_lichhen_phong
        FOREIGN KEY (IdPhong) REFERENCES PhongTro(Id)
);

-- =========================================
-- 7. DAT COC
-- =========================================
CREATE TABLE DatCoc (
    Id BIGINT AUTO_INCREMENT PRIMARY KEY,
    IdSinhVien BIGINT NOT NULL,
    IdPhong BIGINT NOT NULL,
    SoTienCoc DECIMAL(15,2) NOT NULL,
    NgayDat DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    TrangThaiCoc ENUM(
        'CHO_DUYET',
        'DA_XAC_NHAN',
        'TU_CHOI',
        'DA_HUY'
    ) NOT NULL DEFAULT 'CHO_DUYET',
    LyDoTuChoi TEXT,
    NgayHoanTien DATETIME NULL,

    CONSTRAINT fk_datcoc_sinhvien
        FOREIGN KEY (IdSinhVien) REFERENCES NguoiDung(Id),

    CONSTRAINT fk_datcoc_phong
        FOREIGN KEY (IdPhong) REFERENCES PhongTro(Id)
);

-- =========================================
-- 8. GIAO DICH
-- =========================================
CREATE TABLE GiaoDich (
    Id BIGINT AUTO_INCREMENT PRIMARY KEY,
    IdNguoiDung BIGINT NOT NULL,
    LoaiGiaoDich ENUM(
        'NAP_TIEN',
        'RUT_TIEN',
        'DAT_COC',
        'HOAN_TIEN'
    ) NOT NULL,
    SoTien DECIMAL(15,2) NOT NULL,
    SoDuTruoc DECIMAL(15,2) NOT NULL,
    SoDuSau DECIMAL(15,2) NOT NULL,
    MoTa VARCHAR(500),
    IdThamChieu BIGINT NULL,
    NgayGiaoDich DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_giaodich_nguoidung
        FOREIGN KEY (IdNguoiDung) REFERENCES NguoiDung(Id)
);

-- =========================================
-- 9. DANH GIA
-- =========================================
CREATE TABLE DanhGia (
    Id BIGINT AUTO_INCREMENT PRIMARY KEY,
    IdSinhVien BIGINT NOT NULL,
    IdPhong BIGINT NOT NULL,
    SoSao INT NOT NULL,
    NoiDung VARCHAR(500),
    NgayTao DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    NgayCapNhat DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP,

    CONSTRAINT chk_danhgia_sosao
        CHECK (SoSao BETWEEN 1 AND 5),

    CONSTRAINT uq_danhgia_sinhvien_phong
        UNIQUE (IdSinhVien, IdPhong),

    CONSTRAINT fk_danhgia_sinhvien
        FOREIGN KEY (IdSinhVien) REFERENCES NguoiDung(Id),

    CONSTRAINT fk_danhgia_phong
        FOREIGN KEY (IdPhong) REFERENCES PhongTro(Id)
);

-- =========================================
-- 10. THONG BAO
-- =========================================
CREATE TABLE ThongBao (
    Id BIGINT AUTO_INCREMENT PRIMARY KEY,
    IdNguoiNhan BIGINT NOT NULL,
    TieuDe VARCHAR(255) NOT NULL,
    NoiDung TEXT NOT NULL,
    LoaiThongBao ENUM(
        'LICH_HEN',
        'DAT_COC',
        'DUYET',
        'HE_THONG'
    ) NOT NULL,
    DaDoc BOOLEAN NOT NULL DEFAULT FALSE,
    NgayTao DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_thongbao_nguoinhan
        FOREIGN KEY (IdNguoiNhan) REFERENCES NguoiDung(Id)
);

-- =========================================
-- DU LIEU TIEN ICH MAU
-- =========================================
INSERT INTO TienIch (TenTienIch) VALUES
('Dieu hoa'),
('Nong lanh'),
('Wifi'),
('May giat'),
('Ve sinh rieng'),
('Cho de xe');

-- =========================================
-- KIEM TRA 10 BANG
-- =========================================
SHOW TABLES;