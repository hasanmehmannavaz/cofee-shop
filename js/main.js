alert("به کافه مهمان نواز خوش آمدید");

function validateForm(){
    let x = document.forms["myForm"]["fname"].value;
     y = document.forms["myForm"]["number"].value;
    if (x == "") {
        alert("لطفا نام خود را وارد کنید")
    }
}