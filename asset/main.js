function Login () {
    var username = document.getElementById ("Username").value;
    var password = document.getElementById ("Password").value;

    if (username == "user" && password == "user") {
        window.open ("Beranda.html");
        document.getElementById ("Main") . innerHTML = "<h1><center>Login berhasil, Sekarang anda bisa menutup website ini.</center></h1>";
    } else {
        alert ("Login gagal");
        return true;
    }
}