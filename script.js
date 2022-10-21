var usuario1 = []
var usuario2 = []

function Mostrar_mensagem(name,user) {
    var mensagem = document.getElementById(name).value
    user.push(mensagem)

    var li = document.createElement("li")
    li.className = name
    li.innerText = mensagem

    var lista = document.getElementById("listaDeMensagens")
    lista.append(li)
    
    document.getElementById(name).value = ""
}