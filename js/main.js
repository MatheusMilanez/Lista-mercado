const form = document.getElementById("adicionar-produto-quantidade")
const lista = document.getElementById("lista")

form.addEventListener("submit", (Evento) => {
    Evento.preventDefault() //Esse código interrope o evento padrão do formulário
    console.log("Funcionou")
                            
    criaElemento(Evento.target.elements["produto"].value ,Evento.target.elements["quantidade"].value)


})

function criaElemento(produto,quantidade){
    //<li class="item"><strong>7</strong>Camisas</li>
    const novoItem = document.createElement("li")
    novoItem.classList.add("item")
    
    const numeroItem = document.createElement("strong")
    numeroItem.innerHTML = quantidade

    novoItem.appendChild(numeroItem)
    novoItem.innerHTML += produto

    lista.appendChild(novoItem)

    console.log(novoItem)
}

