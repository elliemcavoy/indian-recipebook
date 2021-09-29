function showPassword(){
    var x =
    document.getElementById("sign-in-password");
    if(x.type=="password") {
        x.type="text";
    } else {
        x.type="password";
    }
    }
