var chat = []
var mensagensSalvas = localStorage.getItem("Chat")
 
if (mensagensSalvas !== null){
    chat = JSON.parse(mensagensSalvas)

    var lista = document.getElementById("listaDeMensagens")

    for (var mensagem of chat) {
        var li = document.createElement("li")
        li.innerText = mensagem.texto
                
        if (mensagem.usuario === "usuario1"){
            li.className = 'mensagemUsuario1'
        } else {
            li.className = 'mensagemUsuario2'
        }
        lista.append(li)
    }
}

function Mostrar_mensagem(name,user) {
    var campoTexto = document.getElementById(name)

    var li = document.createElement("li")
    li.className = name
    li.innerText = campoTexto.value

    document.getElementById("listaDeMensagens").append(li)
    
    var informacoes_mensagem = {
        texto: campoTexto.value,
        usuario: user
    }

    chat.push(informacoes_mensagem)

    campoTexto.value = ""

    var chatJSON = JSON.stringify(chat)
    localStorage.setItem('Chat', chatJSON)
}