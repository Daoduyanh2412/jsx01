var account_right="duyanhz2412@gmail.com";
var password_right="Danhqazwsx2412";

let account_input=document.getElementById("account_right");
let password_input=document.getElementById("password_right");

function check(){


if(account_input.value== account_right && password_input.value==password_right) {
    alert("Đăng nhập thành công");
    }
else{
    alert("Vui lòng nhập đúng thông tin");
    }
}   
let click_button =document.getElementById("button").addEventListener("click",check)

var newaccount="duyanhz2412@gmail.com";
var newpassword="123456";
var password_check="123456";

let newaccount_input=document.getElementById("newaccount");
let newpassword_input=document.getElementsById("newpassword");
let password_check_input=document.getElementById("password_check");
function show(){
    if(newaccount_input.value==newaccount && newpassword_input.value==newpassword){
    alert("Đăng nhập thành công");
    }
    else{
        alert("Vui lòng nhập đầy đủ thông tin");
    }
}
let any=document.getElementById("Button").addEventListener("click",check);

