function DanhSachNhanVien(){
    this.arr = [];
    this.themDanhSachNV = function(NhanVien){
        this.arr.push(NhanVien);
    }
}
DanhSachNhanVien.prototype.SearchGrade = function(grade) {
      this.arr.findIndex(function(item) {
        return grade === item.grade;
    }); 
}

DanhSachNhanVien.prototype.Remove = function(grade) {
        var viTri = this.SearchGrade(grade);
        if (viTri !== -1) {
            this.arr.splice(viTri, 1);
        }
}