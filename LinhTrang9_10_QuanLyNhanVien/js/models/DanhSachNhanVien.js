function DanhSachNhanVien() {
    this.arr = [];
    this.themDanhSachNV = function (NhanVien) {
        this.arr.push(NhanVien);
    }
}
DanhSachNhanVien.prototype.SearchIndex = function (username) {
    return this.arr.findIndex(function (item) {
        return username === item.username;
    });
}

DanhSachNhanVien.prototype.Remove = function (username) {
    var viTri = this.SearchIndex(username);
    if (viTri !== -1) {
        this.arr.splice(viTri, 1);
    }
}


