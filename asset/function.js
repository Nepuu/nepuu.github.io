alert ("Jangan di-refresh, nanti disuruh Login lagi.");

function UserLogIn () {
    var Username = document.getElementById ("Username").value;
    document.getElementById ("Pw").type = "password";

    function MainPageLoad () {
        document.getElementById ("Main-Content-Login").style.display = "none";
        document.getElementById ("Main-Content-Loading").style.display = "none";
        document.getElementById ("Main-Content-SourceCode").style.display = "block";
    }

    if (Username == "Vohi5ma") {
        document.getElementById ("Main-Content-Login").style.display = "none";
        document.getElementById ("Main-Content-Loading").style.display = "block";
        setInterval (MainPageLoad, 1000);
    } else {
        alert ('Username ' + '"' + Username + '" tidak valid.');
        document.getElementById ("Username").value = "";
    }
}

function ShowPassword () {
    document.getElementById ("Pw").type = "text";
    document.getElementById ("Pw-Show").style.display = "none";
    document.getElementById ("Pw-Hide").style.display = "block";
}

function HidePassword () {
    document.getElementById ("Pw").type = "password";
    document.getElementById ("Pw-Hide").style.display = "none";
    document.getElementById ("Pw-Show").style.display = "block";
}