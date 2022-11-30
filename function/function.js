function EnableBerandaDisplay () {
    document.getElementById ("Beranda").style.display = "block";
}

function EnableBerandaOpacity () {
    document.getElementById ("Beranda").style.opacity = "100%";
}

function NISLogin () {
    var NIS = document.getElementById ("NIS").value;

    if (NIS == "") {
        document.getElementById ("NISName").innerHTML = "Terimakasih telah login.";
        document.getElementById ("Pesan").style.transform = "translateY(-300px)";
        document.getElementById ("NIS").style.display = "none";
        document.getElementById ("Btn").style.display = "none";
        document.getElementById ("Ignore").style.display = "none";

        function DisablePesan () {
            document.getElementById ("Pesan").style.display = "none";
        }

        setInterval (DisablePesan, 2000);

        setInterval (EnableBerandaOpacity, 2500);
        setInterval (EnableBerandaDisplay, 2475);
    }
}

function Ignore () {
    function DisableMain () {
        document.getElementById ("Pesan").style.display = "none";
    }
    document.getElementById ("Pesan").style.transform = "translateY(-300px)";
    setInterval (DisableMain, 2000);

    setInterval (EnableBerandaOpacity, 2500);
    setInterval (EnableBerandaDisplay, 2475);
}