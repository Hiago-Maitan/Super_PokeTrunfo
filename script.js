var carta1 = {
    nome: "Bulbassaur",
    imagem: "https://mestrepokemon.com/wp-content/uploads/2019/11/Bulbasaur-Pok%C3%A9dex.jpg",
    atributos: {
        ataque: 7,
        defesa: 8,
        magia: 6
    }
}

var carta2 = {
    nome: "Charmander",
    imagem: "https://lh6.googleusercontent.com/Ab3EXWoo8VHDVvh9cU_awR_1BaGuQ-SSLRZapEZFVqV_T45z6v7HSTnQot7En6VbPcRt-Co4Mxl2oIJv0KvK_gNUwHqdFmRfyZ1EB5kIV2D5goOqd6kl2GQ9hzd-NLwG9oHHlc3x",
    atributos: {
        ataque: 9,
        defesa: 4,
        magia: 6
    }
}

var carta3 = {
    nome: "Squirtle",
    imagem: "https://criticalhits.com.br/wp-content/uploads/2018/07/Pok%C3%A9mon-Go-Squirtle-de-%C3%B3culos-escuros.jpeg",
    atributos: {
        ataque: 6,
        defesa: 9,
        magia: 6
    }
}

var cartas = [carta1, carta2, carta3]

var cartaMaquina
var cartaJogador

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
    cartaMaquina = cartas[numeroCartaMaquina]

    var numeroCartaJogador = parseInt(Math.random() * cartas.length)
    // verificando se as cartas sorteadas NÃO são iguais //
    while (numeroCartaMaquina == numeroCartaJogador) {
        numeroCartaJogador = parseInt(Math.random() * cartas.length)
    }
    cartaJogador = cartas[numeroCartaJogador]
    console.log(cartaJogador)

    document.getElementById("btnSortear").disabled = true
    document.getElementById("btnJogar").disabled = false

    exibirCartaJogador()
}

function obtemAtributoSelecionado() {

    var radioAtributos = document.getElementsByName("atributo")

    for (var i = 0; i < radioAtributos.length; i++) {
        if (radioAtributos[i].checked == true) {
            return radioAtributos[i].value
        }
    }
}

function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado()
    var resultado = document.getElementById("resultado")
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado]
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado]

    if (valorCartaJogador > valorCartaMaquina) {
        resultado.innerHTML = "<p class='resultado-final'>Venceu</p>"
    } else if (valorCartaMaquina > valorCartaJogador) {
        resultado.innerHTML = "<p class='resultado-final'>Perdeu</p>"
    } else {
        resultado.innerHTML = "<p class='resultado-final'>Empatou</p>"
    }

    document.getElementById("btnJogar").disabled = true
    document.getElementById("btnSortear").disabled = true

    exibirCartaMaquina()
}

function exibirCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador")
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`

    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">'
    var tagHTML = "<div id='opcoes' class='carta-status'>"

    var opcoesTexto = ""
    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += `<input type='radio'name='atributo' value='${atributo}'> ${atributo} 
        ${cartaJogador.atributos[atributo]} <br>`
    }

    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + '</div'
}

function exibirCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina")
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`

    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">'
    var tagHTML = "<div id='opcoes' class='carta-status'>"

    var opcoesTexto = ""
    for (var atributo in cartaMaquina.atributos) {
        opcoesTexto += `<p type='text' name='atributo'>${atributo} ${cartaMaquina.atributos[atributo]}</p>`
    }

    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + '</div'
}