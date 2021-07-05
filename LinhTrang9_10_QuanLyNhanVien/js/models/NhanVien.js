function NhanVien(_taiKhoan, _hoTen, _email, _ngayLam,_luongCB, _chucVu,_gioLam){
    this.username = _taiKhoan;
    this.name = _hoTen;
    this.email = _email;   
    this.date = _ngayLam;
    this.position = _chucVu;
    this.salary = _luongCB;
    this.time = _gioLam;
    this.total = total(_chucVu,_luongCB);
    this.grade = grade(_gioLam);
}
function grade(time){
    var grade = " ";
    if(time >= 192){
        grade = "Nhân viên xuất sắc";
    }else if(time >= 176 && time < 192){
        grade = "Nhân viên giỏi";
    }else if(time >= 160 && time <176){
        grade = "Nhân viên khá";
    }else{
        grade = "Nhân viên trung bình";
    }
    return grade;
}
function total(position,salary){
    var total = 0;
    if(position == "Sếp"){
        total =salary*3;
    }else if(position == "Trưởng phòng"){
        total = salary*2;
    }else{
        total= salary*1;
    }
    return total;
}