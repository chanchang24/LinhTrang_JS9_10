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
Validator.prototype.checkDate = function (inputValue, spanID, mess) {
    var regex = /^(0?[1-9]|1[012])[/](0?[1-9]|[12][0-9]|3[01])[/](19|20)?[0-9]{2}$/;
    if (!regex.test(inputValue)) {
        getEle(spanID).style.display = "block";
        getEle(spanID).innerHTML = mess;
        return false;
    }
    return true;
}

Validator.prototype.checkSalary = function (inputValue, spanID, mess) {
    if (!(inputValue >= 1000000 && inputValue <= 20000000)) {
        getEle(spanID).style.display = "block";
        getEle(spanID).innerHTML = mess;
        return false;
    }
    return true;
}
Validator.prototype.checkPosition = function (inputValue, spanID, mess) {
    if (inputValue === "S???p" || inputValue === "Tr?????ng ph??ng" || inputValue === "Nh??n vi??n") {
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


