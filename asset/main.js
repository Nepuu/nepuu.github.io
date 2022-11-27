function Login () {
    var username = document.getElementById ("Username").value;
    var password = document.getElementById ("Password").value;

    if (username == "user" && password == "user") {
        window.open ("Beranda.html");
        document.getElementById ("Main") . innerHTML = "";
        document.getElementById ("gfg").style.display = "block";
        document.getElementById ("waydh").style.display = "block";
    } else {
        alert ("Login gagal");
        return true;
    }
}