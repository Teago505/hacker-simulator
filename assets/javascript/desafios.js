function hackearVazio() {
    document.getElementById("server").innerHTML = "server shut down";
    document.getElementById("linha-1").innerHTML = "";
    document.getElementById("linha-2").innerHTML = "";
    document.getElementById("linha-3").innerHTML = "";
    document.getElementById("linha-4").innerHTML = "";
    document.getElementById("linha-5").innerHTML = "";
}

/* NAZA */

function hackearNaza() {
    document.getElementById("server").innerHTML = "server: connected to naza";
    document.getElementById("linha-1").innerHTML = '<div class="naza-titulo-center"><p class="naza-titulo">naza<p></div>';
    document.getElementById("linha-2").innerHTML = '<div class="naza-login-area"><table><tr><td><p class="texto-nome-naza">nome:</p></td><td><input type="text" class="nome-naza" id="nome-naza"></td></tr><tr><td><div class="espaçamento-naza"><p class="texto-senha-naza">senha:</p></td><td><input type="password" class="senha-naza" id="senha-naza"></td></table>';
    document.getElementById("linha-3").innerHTML = '';
    document.getElementById("linha-4").innerHTML = '<div class="naza-login-area-buttons"><button class="button-1-naza" onclick="registrarNaza();">Registrar</button><button class="button-2-naza" onclick="hackearNazaSucesso();">Entrar</button></div>';
    document.getElementById("linha-5").innerHTML = "";
}
function registrarNaza() {
    document.getElementById("linha-5").innerHTML = '<div class="registro-area-naza-borda"></div><div class="registro-area-naza"><table><tr><td><p class="registro-nome-texto-naza">nome:</p></td><td><input type="text" id="registro-nome-naza" class="registro-nome-naza"></td></tr><tr><td><div class="espaçamento-naza"></div><p class="registro-senha-texto-naza">senha:</p></td><td><input type="password" id="registro-senha-naza" class="registro-senha-naza"></td></tr><tr><td><div class="espaçamento-naza"></div><p class="confirme-senha-texto-naza">confirme a senha:</p></td><td><input class="confirme-senha-naza" id="confirme-senha-naza" type="password"></td></tr><tr><div class="confirme-naza"><td><div class="espaçamento-naza"><p class="trabalha-naza">você trabalha na naza:</p></td><td class="radio-naza-center"><input type="radio" id="trabalha-naza-sim" name="trabalha-naza"><label class="trabalha-naza-sim" for="trabalha-naza-sim">sim</label><input type="radio" id="trabalha-naza-nao" name="trabalha-naza" checked><label class="trabalha-naza-nao" for="trabalha-naza-nao">não</label></div></td></tr><tr><td><p class="hackear-naza">você está planejando hackear a naza:</p></td><td class="radio-naza-center"><input type="radio" name="hackear-naza" id="hackear-naza-sim" checked><label for="hackear-naza-sim" class="hackear-naza-sim">sim</label><input type="radio" name="hackear-naza" id="hackear-naza-nao"><label for="hackear-naza-nao" class="hackear-naza-nao">não</label></td></tr><tr><td><div class="espaçamento-naza-button"></div><button onclick="registroNaza();">REGISTRAR</button></td></tr></table></div></div>';
}
var nomeCorreto;
var senhaCorreta;
function registroNaza() {
    if (verificacaoSenhaEnomeColocados()) {
        alert("Um dos valores não foi inserido");
    } else {
        if (document.getElementById("registro-senha-naza").value == document.getElementById("confirme-senha-naza").value) {
            if (verificacaoTrabalhaHackear()) {
                alert("O que você está fazendo nesse site dá um fora!");
            } else {
                nomeCorreto = document.getElementById("registro-nome-naza").value;
                senhaCorreta = document.getElementById("registro-senha-naza").value;
                document.getElementById("linha-5").innerHTML = "";
                alert("Registrado com sucesso");
            }
        } else {
            alert("As senhas não coincidem");
        }
    }
}
function verificacaoSenhaEnomeColocados() {
    if (document.getElementById("registro-nome-naza").value == "") {
        return true;
    } else if (document.getElementById("registro-senha-naza").value == "") {
        return true;
    } else {
        return false;
    }
}
function verificacaoTrabalhaHackear() {
    if (document.getElementById("trabalha-naza-nao").checked) {
        return true;
    } else if (document.getElementById("hackear-naza-sim").checked) {
        return true;
    } else {
        return false;
    }
}
function hackearNazaSucesso() {
    var nome = document.getElementById("nome-naza").value;
    var senha = document.getElementById("senha-naza").value;
    if (nome == "Astronauta" && senha == "123123") {
        alert("Você foi pego tentando invadir a NAZA,");
        alert("essa conta ja existia e foi usada por outro hacker");
        alert("mas você achou que poderia usá-la!!!");
        alert("A NAZA rastreou sua localização e te prendeu!");
        alert("!!!FIM DE JOGO!!!");
        location.reload();
    } else if (nome == nomeCorreto && senha == senhaCorreta) {
        alert("Muito bem você conseguio hackear a NAZA e mandar misseis para a Antartida");
        hackearVazio();
        document.getElementById("pentagono-button").disabled = false;
        document.getElementById("naza-button").disabled = true;
    } else {
        alert("Nome e senha incorretos");
    }
}

/* PENTÁGONO */

function hackearPentagono() {
    alert("Após entrar na NAZA você encontra a senha do computador do pentágono então você acessa ele, você precisa extrair o máximo de dinheiro possível");
    document.getElementById("server").innerHTML = "server: connected to the pentagon";
    document.getElementById("linha-1").innerHTML = '<div class="area-pentagono-1"><div class="apps-pentagono"><button onclick="navegadorPentagono();" class="navegador-button-pentagono"></button><button onclick="painel();" class="painel-button-pentagono"></button><button onclick="enfeite();" class="button-enfeite-pentagono">Sou um enfeite</button></div></div>';
    document.getElementById("linha-2").innerHTML = '<div class="area-invisivel-pentagono"></div>';
    document.getElementById("linha-4").innerHTML = '<div class="espaçamento-appps-lixeira-pentagono"></div>'
    document.getElementById("linha-5").innerHTML = '<div class="icone-lixeira-pentagono"><button onclick="lixeiraPentagono()" class="button-lixeira-pentagono">Sou um enfeite</button></div>';
}
function navegadorPentagono() {
    document.getElementById("linha-2").innerHTML = '<div class="area-pentagono-2"><div class="area-navegador-pesquisa"><input type="text" value="http//:www.NãoAdiantaEscreverNadaAquiSouSóDeEnfeite.com.br"><button onclick="enfeiteNavegador();">Ir</button></div><div class="banco-uza-pentagono"><p class="titulo-banco-uza">banco central uza</p><div class="rh998877"><p class="saldo-banco-uza">saldo: $4565986465465433684635439684765465846598597658964674841658784596</p></div><div class="informacões-de-transferencia-banco-uza"><table><tr><td><label for="nome-banco-uza">Trasferir para:</td><td><input type="text" id="nome-banco-uza"></td><td></td></tr><tr><td><div style="margin-top: 10px;"></div><label for="quantidade-banco-uza">Quanto:</label></td><td><input value="$" type="text" id="quantidade-banco-uza"></td><td><button onclick="tudoDinheiro()">Tudo</button></td></tr></table><button onclick="transferir();">Transferir</button></div></div></div>';
}
function tudoDinheiro() {
    document.getElementById("quantidade-banco-uza").value = "$4565986465465433684635439684765465846598597658964674841658784596";
}
function transferir() {
    if (document.getElementById("nome-banco-uza").value != "") {
        if (document.getElementById("quantidade-banco-uza").value == "$4565986465465433684635439684765465846598597658964674841658784596") {
            alert("Muito bem você conseguiu com sucesso transferir toda essa bufunfa agora vá para seu ultimo desafio.");
            hackearVazio();
            document.getElementById("velhas-button").disabled = false;
            document.getElementById("pentagono-button").disabled = true;
        } else {
            alert("Precisamos de todo o dinheiro RÁPIDOOOO");
        }
    } else {
        alert("O nome não foi informado");
    }
}
function enfeite() {
    alert('"Sendo um enfeite"')
}
function enfeiteNavegador() {
    alert("É só um enfeite RÁPIDO DIGITA OS BAGUIO!!!")
}
function painel() {
    document.getElementById("linha-2").innerHTML = '<div class="area-pentagono-2"><div class="painel-pentagono"><p>Não sei por que você clicou aqui,<br>continue procurando aqui não tem nenhum diheiro.</p><div class="confg-pc-pentagono"><ul><li>core i0.7</li><li>32 mb ram</li>20 terabit hd<li></li><li>gtx pirateada baixada da internet</li></ul></div></div></div>';
}
function lixeiraPentagono() {
    document.getElementById("linha-2").innerHTML = '<div class="area-pentagono-2"><div class="img-lixeira-pentagono"></div></div>';
}

/* VELHAS */

var tela;
var pincel;
var imagemSelecionada;
var imgVelhas0 = new Image();
var imgVelhas1 = new Image();
var imgVelhas2 = new Image();
var imgVelhas3 = new Image();
imgVelhas0.src = "./assets/img/veia.png";
imgVelhas1.src = "./assets/img/veia1.png";
imgVelhas2.src = "./assets/img/veia2.png";
imgVelhas3.src = "./assets/img/veia3.png";
var posicaoX;
var posicaoY;
var acertos = 0;
var tamanhoX = 300;
var tamanhoY = 150;
var intervaloVelhas;
var tempoVelhasAcaba;
var tempoBarraVelhas1 = 100;
var tempoBarraVelhas2;
function hackearVelhas() {
    alert("Bem aqui nós estamos seu último desafio é vencer o carrinha do 'Assista cachorros', RAPIDOWWW");
    alert("Muito bem eu sou Pircing, e vamos travar um duelo! Vence quem hackear mais velhinhas.");
    document.getElementById("server").innerHTML = 'challenge three';
    document.getElementById("linha-1").innerHTML = '<div class="velhinhas-1"><p class="velhinhasTempo">Tempo:</p><progress id="tempoVelhinhas" value="100" max="100"></progress></div>';
    document.getElementById("linha-2").innerHTML = '<canvas onclick="telaClick(this);" id="canvas" width="917" height="570"></canvas>';
    tela = document.getElementById('canvas');
    pincel = tela.getContext('2d');
    intervaloVelhas = setInterval(aleatorioVelhas, 600);
    tempoVelhasAcaba = setTimeout(function () {
        clearInterval(intervaloVelhas);
        alert("Você perdeu");
        hackearVazio();
        clearInterval(tempoBarraVelhas2);
        tempoBarraVelhas1 = 100;
        acertos = 0;
    }, 15000);
    tempoBarraVelhas();
}
function tempoBarraVelhas() {
    tempoBarraVelhas2 = setInterval(function () {
        document.getElementById("tempoVelhinhas").setAttribute("value", tempoBarraVelhas1)
        tempoBarraVelhas1 = tempoBarraVelhas1 - 0.5;
    }, 75);
}
function aleatorioVelhas() {
    if (acertos == 12) {
        clearInterval(intervaloVelhas);
        hackearVazio();
        alert("CARRACA VOCÊ É MUITO BOM NO HACKEAMENTO, Pircing está orgulhoso de você. Obrigado por jogar");
        clearInterval(tempoBarraVelhas2);
        clearTimeout(tempoVelhasAcaba);
        tempoBarraVelhas1 = 100;
        acertos = 0;
        zerado();
    }
    var imagemNumero = Math.floor(Math.random() * 4);
    if (imagemNumero == 0) {
        imagemSelecionada = imgVelhas0;
    } else if (imagemNumero == 1) {
        imagemSelecionada = imgVelhas1;
    } else if (imagemNumero == 2) {
        imagemSelecionada = imgVelhas2;
    } else if (imagemNumero == 3) {
        imagemSelecionada = imgVelhas3;
    }
    console.log(acertos);
    pincel.clearRect(0, 0, 917, 600);
    posicaoX = Math.floor(Math.random() * 618);
    posicaoY = Math.floor(Math.random() * 451);
    pincel.drawImage(imagemSelecionada, posicaoX, posicaoY, tamanhoX, tamanhoY);
}
function click(evento) {
    var x = evento.pageX - tela.offsetLeft;
    var y = evento.pageY - tela.offsetTop;
    var xMaximo = posicaoX + tamanhoX;
    var yMaximo = posicaoY + posicaoY;
    if (x > posicaoX && y > posicaoY && x < xMaximo && y < yMaximo) {
        ++acertos;
    }
}
function telaClick(eu) {
    eu.onclick = click;
}

// JOGO ZERADO

function zerado() {
    document.getElementById("zerado").innerHTML = "ZEREI ESSE JOGO LINDO UHULLLLLL";
    alert("Criador original não sei, o link do video não funcionava");
    alert("Criador desse:");
    alert("Twitter: @teaguinho_feiu");
    alert("Github: https://github.com/Teaguinho-feiu");
    alert("Obrigado por jogar");
    document.getElementById("naza-button").disabled = false;
    document.getElementById("pentagono-button").disabled = false;
}