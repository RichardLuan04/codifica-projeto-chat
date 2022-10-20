var usuario1 = []
var usuario2 = []

function Mostrar_mensagem_um() {
    var mensagem = document.getElementById("mensagemUsuario1").value
    usuario1.push(mensagem)
    var li = document.createElement("li")
    var lista = document.getElementById("listaDeMensagens")
    li.innerText = mensagem
    lista.append(li)
    mensagem.value = ""
}

function Mostrar_mensagem_dois() {
    var mensagem = document.getElementById("mensagemUsuario2").value
    usuario2.push(mensagem)
     var li = document.createElement("li")
    var lista = document.getElementById("listaDeMensagens")
    li.innerText = mensagem
    lista.append(li)
    mensagem.value = ""
}

