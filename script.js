var usuario1 = []
var usuario2 = []

function Mostrar_mensagem(name) {
    var mensagem = document.getElementById(name).value
    usuario1.push(mensagem)

    var li = document.createElement("li")
    li.className = name
    li.innerText = mensagem

    var lista = document.getElementById("listaDeMensagens")
    lista.append(li)
    
    document.getElementById(name).value = ""
}