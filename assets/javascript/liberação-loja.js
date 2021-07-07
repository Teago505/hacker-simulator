function verificaçãoLoja(tipo) {
    if (tipo == 0) {
        if(dinheiro >= 10) {
            alert("Você comprou a calculadora");
            document.getElementById("hack-button-1").disabled = false;
            document.getElementById("loja-calculadora").disabled = true;
            document.getElementById("loja-nokiah").disabled = false;
            dinheiro = dinheiro - 10;
            document.getElementById("money").innerHTML = "dinheiro: $" + dinheiro;
        } else {
            vaiHackear();
        }
    }
    if (tipo == 1) {
        if(dinheiro >= 50) {
            alert("Você comprou o nokiah tijolão");
            document.getElementById("hack-button-2").disabled = false;
            document.getElementById("loja-nokiah").disabled = true;
            document.getElementById("loja-celular").disabled = false;
            dinheiro = dinheiro - 50;
            document.getElementById("money").innerHTML = "dinheiro: $" + dinheiro;
        } else {
            vaiHackear();
        }
    }
    if (tipo == 2) {
        if(dinheiro >= 100) {
            alert("Você comprou o celular com android");
            document.getElementById("hack-button-3").disabled = false;
            document.getElementById("loja-celular").disabled = true;
            document.getElementById("loja-notebook").disabled = false;
            dinheiro = dinheiro - 100;
            document.getElementById("money").innerHTML = "dinheiro: $" + dinheiro;
        } else {
            vaiHackear();
        }
    }
    if (tipo == 3) {
        if(dinheiro >= 300) {
            alert("Você comprou um notebook da negativo");
            document.getElementById("hack-button-4").disabled = false;
            document.getElementById("loja-notebook").disabled = true;
            document.getElementById("loja-computador-1").disabled = false;
            dinheiro = dinheiro - 300;
            document.getElementById("money").innerHTML = "dinheiro: $" + dinheiro;
        } else {
            vaiHackear();
        }
    }
    if (tipo == 4) {
        if(dinheiro >= 600) {
            alert("Você comprou um computador sem placa de video");
            document.getElementById("hack-button-5").disabled = false;
            document.getElementById("loja-computador-1").disabled = true;
            document.getElementById("loja-computador-2").disabled = false;
            dinheiro = dinheiro - 600;
            document.getElementById("money").innerHTML = "dinheiro: $" + dinheiro;
        } else {
            vaiHackear();
        }
    }
    if (tipo == 5) {
        if(dinheiro >= 1000) {
            alert("Você comprou um computador");
            document.getElementById("hack-button-6").disabled = false;
            document.getElementById("loja-computador-2").disabled = true;
            document.getElementById("loja-computador-3").disabled = false;
            dinheiro = dinheiro - 1000;
            document.getElementById("money").innerHTML = "dinheiro: $" + dinheiro;
        } else {
            vaiHackear();
        }
    }
    if (tipo == 6) {
        if(dinheiro >= 1500) {
            alert("Você comprou um computador da winteu");
            document.getElementById("hack-button-7").disabled = false;
            document.getElementById("loja-computador-3").disabled = true;
            dinheiro = dinheiro - 1500;
            document.getElementById("money").innerHTML = "dinheiro: $" + dinheiro;
        } else {
            vaiHackear();
        }
    }
}
function vaiHackear() {
    alert("vai hackear mais coisas para conseguir mais dinheiro!");
}