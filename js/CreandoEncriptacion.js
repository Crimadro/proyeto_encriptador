

var string = document.querySelector(".ingresarTxt");
function encriptarVocal() {
    if (/[A-ZÁÉÍÓÚÜáéíóú\d$@$!%*?&]/.test(string.value)) {
        alert("Error: no puedes introducir letras mayúsculas, acentos, numeros, $@$!%*?&");
        return;
    }
    else {
        let cadena = string.value;
        cadena = cadena.replace(/e/g, "enter");
        cadena = cadena.replace(/i/g, "imes");
        cadena = cadena.replace(/a/g, "ai");
        cadena = cadena.replace(/o/g, "ober");
        cadena = cadena.replace(/u/g, "ufat");
        document.getElementById("desencriptaV").value = cadena;
    }
}

function desencriptaV() {
    let cadena = string.value;
    const encriptaciones = {
        "enter": "e",
        "imes": "i",
        "ai": "a",
        "ober": "o",
        "ufat": "u"
    };
    for (let encriptacion in encriptaciones) {
        cadena = cadena.replace(new RegExp(encriptacion, "g"), encriptaciones[encriptacion]);
    }
    document.getElementById("desencriptaV").value = cadena;
}

string.addEventListener("input", function () {
    if (string.value.length == 0) {
        document.getElementById("desencriptaV").value = null;
        document.getElementById("busca").style.visibility = "visible";
        document.getElementById("p3").style.visibility = "visible";
        document.getElementById("alinearDiv").style.top = "619px";
        document.getElementById("desencriptaV").style.fontSize = "16px";
    }
    else {
        document.getElementById("busca").style.visibility = "hidden";
        document.getElementById("p3").style.visibility = "hidden";
        document.getElementById("alinearDiv").style.top = "100px";
        document.getElementById("desencriptaV").style.fontSize = "28px";
    }
});

function clipboard() {
    var copyText = document.getElementById('desencriptaV');
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
}




                        