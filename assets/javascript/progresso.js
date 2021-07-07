var dinheiro = 0;
function hack(hack) {
    if (hack == 0) {
        var intervaloSacola = setInterval(progressoSacola, 50);
        var valor = 0.5;
        var sacolasProgresso = document.getElementById("progresso-sacolas");
        document.getElementById("hack-button-0").disabled = true;
        function progressoSacola() {
            sacolasProgresso.setAttribute("value", valor);
            valor = valor + 0.5;
        }
        function sacolas() {
            dinheiro = dinheiro + 2;
            document.getElementById("money").innerHTML = "dinheiro: $" + dinheiro;
            document.getElementById("hack-button-0").disabled = false;
            clearInterval(intervaloSacola);
            sacolasProgresso.setAttribute("value", 0);
        }
        setTimeout(sacolas, 10000);
    }
    if (hack == 1) {
        var intervaloCalculadora = setInterval(progresso, 75);
        var valor = 0.5;
        var calculadoraProgresso = document.getElementById("progresso-calculadora");
        document.getElementById("hack-button-1").disabled = true;
        function progresso() {
            calculadoraProgresso.setAttribute("value", valor);
            valor = valor + 0.5;
        }
        function calculadora() {
            dinheiro = dinheiro + 5;
            document.getElementById("money").innerHTML = "dinheiro: $" + dinheiro;
            document.getElementById("hack-button-1").disabled = false;
            clearInterval(intervaloCalculadora);
            calculadoraProgresso.setAttribute("value", 0);
        }
        setTimeout(calculadora, 15000);
    }
    if (hack == 2) {
        var intervaloTrote = setInterval(progresso, 50);
        var valor = 0.25;
        var troteProgresso = document.getElementById("progresso-trote");
        document.getElementById("hack-button-2").disabled = true;
        function progresso() {
            troteProgresso.setAttribute("value", valor);
            valor = valor + 0.25;
        }
        function trote() {
            dinheiro = dinheiro + 15;
            document.getElementById("money").innerHTML = "dinheiro: $" + dinheiro;
            document.getElementById("hack-button-2").disabled = false;
            clearInterval(intervaloTrote);
            troteProgresso.setAttribute("value", 0);
        }
        setTimeout(trote, 20000);
    }
    if (hack == 3) {
        var intervaloApps = setInterval(progresso, 62.5);
        var valor = 0.25;
        var appsProgresso = document.getElementById("progresso-apps");
        document.getElementById("hack-button-3").disabled = true;
        function progresso() {
            appsProgresso.setAttribute("value", valor);
            valor = valor + 0.25;
        }
        function apps() {
            dinheiro = dinheiro + 20;
            document.getElementById("money").innerHTML = "dinheiro: $" + dinheiro;
            document.getElementById("hack-button-3").disabled = false;
            clearInterval(intervaloApps);
            appsProgresso.setAttribute("value", 0);
        }
        setTimeout(apps, 25000);
    }
    if (hack == 4) {
        var intervaloBicicletas = setInterval(progresso, 87.5);
        var valor = 0.25;
        var bicicletasProgresso = document.getElementById("progresso-bicicletas");
        document.getElementById("hack-button-4").disabled = true;
        function progresso() {
            bicicletasProgresso.setAttribute("value", valor);
            valor = valor + 0.25;
        }
        function bicicletas() {
            dinheiro = dinheiro + 40;
            document.getElementById("money").innerHTML = "dinheiro: $" + dinheiro;
            document.getElementById("hack-button-4").disabled = false;
            clearInterval(intervaloBicicletas);
            bicicletasProgresso.setAttribute("value", 0);
        }
        setTimeout(bicicletas, 35000);
    }
    if (hack == 5) {
        var intervaloJogos = setInterval(progresso, 75);
        var valor = 0.125;
        var jogosProgresso = document.getElementById("progresso-jogos");
        document.getElementById("hack-button-5").disabled = true;
        function progresso() {
            jogosProgresso.setAttribute("value", valor);
            valor = valor + 0.125;
        }
        function jogos() {
            dinheiro = dinheiro + 50;
            document.getElementById("money").innerHTML = "dinheiro: $" + dinheiro;
            document.getElementById("hack-button-5").disabled = false;
            clearInterval(intervaloJogos);
            jogosProgresso.setAttribute("value", 0);
        }
        setTimeout(jogos, 60000);
    }
    if (hack == 6) {
        var intervaloRabbo = setInterval(progresso, 50);
        var valor = 0.0625;
        var rabboProgresso = document.getElementById("progresso-rabbo");
        document.getElementById("hack-button-6").disabled = true;
        function progresso() {
            rabboProgresso.setAttribute("value", valor);
            valor = valor + 0.0625;
        }
        function rabbo() {
            dinheiro = dinheiro + 100;
            document.getElementById("money").innerHTML = "dinheiro: $" + dinheiro;
            document.getElementById("hack-button-6").disabled = false;
            clearInterval(intervaloRabbo);
            rabboProgresso.setAttribute("value", 0);
        }
        setTimeout(rabbo, 80000);
    }
    if (hack == 7) {
        var intervaloCarros = setInterval(progresso, 62.5);
        var valor = 0.0625;
        var carrosProgresso = document.getElementById("progresso-carros");
        document.getElementById("hack-button-7").disabled = true;
        function progresso() {
            carrosProgresso.setAttribute("value", valor);
            valor = valor + 0.0625;
        }
        function carros() {
            dinheiro = dinheiro + 300;
            document.getElementById("money").innerHTML = "dinheiro: $" + dinheiro;
            document.getElementById("hack-button-7").disabled = false;
            clearInterval(intervaloCarros);
            carrosProgresso.setAttribute("value", 0);
            document.getElementById("naza-button").disabled = false;
        }
        setTimeout(carros, 100000);
    }
}