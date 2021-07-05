var dsnv = new DanhSachNhanVien();
var valid = new Validator();
function getEle(id) {
    return document.getElementById(id);
}
getEle('btnThem').addEventListener('click', function () {
    getEle('btnCapNhat').style.display = 'none';
})



//Hien thi danh sach
var hienThiDanhSachNV = function(arr){
    var content =" ";

    arr.map(function(item){
        console.log(item);
        content += `
                <tr>
                    <td>${item.username}</td>
                    <td>${item.name}</td>
                    <td>${item.email}</td>
                    <td>${item.date}</td>
                    <td>${item.position}</td>
                    <td>${item.total}</td>
                    <td>${item.grade}</td>
                    <td>
                        <button type="button" onclick="XoaNhanVien('${item.username}')" class="btn btn-danger">Xóa</button>
                        <button type="button" class="btn btn-primary">Cập nhật</button>
                    </td>
                </tr>
        `;
    });
    getEle('tableDanhSach').innerHTML= content;
    
}
var setLocalStorage = function (){
    localStorage.setItem('DSNV',JSON.stringify(dsnv.arr));
}
var getLocalStorage = function() {
    if (localStorage.getItem('DSNV')) {
        dsnv.arr = JSON.parse(localStorage.getItem("DSNV"));
        hienThiDanhSachNV(dsnv.arr);
    }
}
getLocalStorage();
//Xoa nhan vien
function XoaNhanVien(username){
    dsnv.Remove(username);
    hienThiDanhSachNV(dsnv.arr);
    setLocalStorage();
}
//Tim nhan vien theo loai
getEle('btnTimNV').addEventListener('click', function (){
    var sGrade = getEle('searchName').value;
    dsnv.SearchGrade(sGrade,dsnv.arr);
    // hienThiDanhSachNV(.mangTimKiem);

})
//Them nhan vien
getEle('btnThemNV').addEventListener('click', function () {
    
    getEle('tbPass').style.display ='none'
    var username = getEle('tknv').value;
    var name = getEle('name').value;
    var email = getEle('email').value;
    var pass = getEle('password').value;
    var date = getEle('datepicker').value;
    var salary = getEle('luongCB').value;
    var position = getEle('chucvu').value;
    var time = getEle('gioLam').value;

    console.log(position);

    var isValid = true;
    isValid &= valid.kiemTraRong(username,'tbTKNV','Tài khoản không được để trống')
                && valid.checkUsername(username,'tbTKNV','Vui lòng nhập tối đa 4-6 ký tự');
    isValid &= valid.kiemTraRong(name,'tbTen','Tên không được để trống')
                && valid.checkName(name,'tbTen','Vui lòng nhập chữ');
    isValid &= valid.kiemTraRong(email,'tbEmail','Email không được để trống')
                && valid.checkEmail(email,'tbEmail','Vui lòng nhập đúng định dạng');
    isValid &= valid.kiemTraRong(pass,'tbMatKhau','Password không được để trống')
                && valid.checkPassword(pass,'tbMatKhau','Vui lòng nhập 6-10 ký tự chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt');
    isValid &= valid.kiemTraRong(date,'tbNgay','Ngày làm không được để trống')
                && valid.checkDate(date,'tbNgay','Vui lòng nhập theo dạng MM/dd/yyyy');  
    isValid &= valid.kiemTraRong(salary,'tbLuongCB','Lương không được để trống')
                && valid.checkSalary(salary,'tbLuongCB','Vui lòng nhập lương 1000000-20000000');
    isValid &= valid.checkPosition(position,'tbChucVu','Vui lòng  chọn chức vụ hợp lệ (Sếp, Trưởng Phòng, Nhân Viên) ');
    isValid &= valid.kiemTraRong(time,'tbGiolam','Giờ làm không được để trống')
                && valid.checkTime(time,'tbGiolam','Vui lòng nhập giờ làm 80-200');
    if(!isValid) return;
    var nv1 = new NhanVien(username, name, email, date, salary, position,time);
    dsnv.themDanhSachNV(nv1);
    hienThiDanhSachNV(dsnv.arr);
    setLocalStorage();
    // getEle('newForm').reset();
})
