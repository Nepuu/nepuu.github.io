function UserLogIn () {
    var Username = document.getElementById ("Username").value;

    if (Username == "Vohi5ma") {
        alert ("Log-In Berhasil, Selamat datang !");
        document.getElementById ("Main-Content-Login").style.display = "none";
        document.getElementById ("Main-Content-SourceCode").style.display = "block";
    } else {
        alert ('Username ' + '"' + Username + '" tidak valid.');
        document.getElementById ("Username").value = "";
    }
}