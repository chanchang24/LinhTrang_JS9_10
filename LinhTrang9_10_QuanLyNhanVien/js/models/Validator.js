function Validator() {
    this.kiemTraRong = function (inputValue, spanID, mess) {
        if (!inputValue) {
            getEle(spanID).style.display = "block";
            getEle(spanID).innerHTML = mess;
            return false;
        }
        getEle(spanID).style.display = "none";
        return true;
    }
}
Validator.prototype.checkUsername = function (inputValue, spanID, mess) {
        var regex = /^\w{4,6}$/;
        if (!regex.test(inputValue)) {
            getEle(spanID).style.display = "block";
            getEle(spanID).innerHTML = mess;
            return false;
        }
        getEle(spanID).style.display = "none";
        return true;

    }
    Validator.prototype.checkName = function (inputValue, spanID, mess) {
        var regex = /^[a-zA-Z].*$/;
        if (!regex.test(inputValue)) {
            getEle(spanID).style.display = "block";
            getEle(spanID).innerHTML = mess;
            return false;
        }
        return true;
    }
    Validator.prototype.checkEmail = function (inputValue, spanID, mess) {
        var regex = /^(\w(\.?\w)*)+@(\w(\.?\w)*)+\.[a-z]{2,10}$/;
        if (!regex.test(inputValue)) {
            getEle(spanID).style.display = "block";
            getEle(spanID).innerHTML = mess;
            return false;
        }
        return true;
    }
    Validator.prototype.checkPassword = function (inputValue, spanID, mess) {
        var regex = /^(?=.*\d)(?=.*[A-Z])(?=.*[~!@#$%^&*\.]).{6,10}$/;
        if (!regex.test(inputValue)) {
            getEle(spanID).style.display = "block";
            getEle(spanID).innerHTML = mess;
            return false;
        }
        return true;
    }
    // this.checkDate = function (inputValue, spanID, mess) {
    //     var date = new Date(08/14/2021)
    //     if(date !== inputValue){
    //         getEle(spanID).style.display = "block";
    //         getEle(spanID).innerHTML = mess;
    //         return false;
    //     }
    //     return true;
    // }
    Validator.prototype.checkSalary = function (inputValue, spanID, mess) {
        if (!(inputValue >= 1000000 && inputValue <= 20000000)) {
            getEle(spanID).style.display = "block";
            getEle(spanID).innerHTML = mess;
            return false;
        }
        return true;
    }
    Validator.prototype.checkPosition = function (inputValue, spanID, mess) {
        if (inputValue === "Sếp" || inputValue === "Trưởng phòng" || inputValue === "Nhân viên") {
            getEle(spanID).style.display = "none";
            return true;
        }
        getEle(spanID).style.display = "block";
        getEle(spanID).innerHTML = mess;
        return false;
    }
    Validator.prototype.checkTime = function (inputValue, spanID, mess) {
        if (inputValue >= 80 && inputValue <= 200) {
            getEle(spanID).style.display = "none";
            return true;
        }
        getEle(spanID).style.display = "block";
        getEle(spanID).innerHTML = mess;
        return false;
    }


