const form = document.getElementById("adicionar-produto-quantidade")
const lista = document.getElementById("lista")
// no código abaixo está verificando se já tem um item no array e caso tenha , transformando o item que está no formato string em modo javaScript
const itens = JSON.parse(localStorage.getItem("itens")) || []

itens.forEach( (elemento) =>{
    criaElemento(elemento)
} )

form.addEventListener("submit", (Evento) => {
    Evento.preventDefault() //Esse código interrope o evento padrão do formulário
    console.log("Funcionou")
                            
    const produto = Evento.target.elements["produto"]
    const quantidade = Evento.target.elements["quantidade"]

    const existe = itens.find( elemento => elemento.produto === produto.value)

    // itemAtual é um objeto
    const itemAtual = {
        "produto" : produto.value ,
        "quantidade": quantidade.value   
    }

    if (existe){
        itemAtual.id = existe.id
        atualizaElemento(itemAtual)
        itens[itens.findIndex(elemento => elemento.id === existe.id)] = itemAtual
    }else{
        itemAtual.id = itens[itens.length -1] ? (itens[itens.length-1]).id + 1 : 0;

        criaElemento(itemAtual)

        // o código push insere elementos em um array
        itens.push(itemAtual)
        
    }

    produto.value = ""
    quantidade.value =""

    // para transformar um objeto em uma string usa se o código JSON.stringify
    // o localStorage só deixa quardar string e por isso foi usando o método JSON.stringfy
    localStorage.setItem("itens",JSON.stringify(itens))

})

function criaElemento(item){
    //<li class="item"><strong>7</strong>Camisas</li>
    const novoItem = document.createElement("li")
    novoItem.classList.add("item")
    
    const numeroItem = document.createElement("strong")
    numeroItem.innerHTML = item.quantidade
    numeroItem.dataset.id = item.id
    novoItem.appendChild(numeroItem)
    
    novoItem.innerHTML += item.produto

    novoItem.appendChild(botaoDeleta(item.id))

    lista.appendChild(novoItem)

    console.log(novoItem)


    
}

function atualizaElemento(item){
    document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantidade
}

function botaoDeleta(id){
    const elementobotao = document.createElement("button")
    elementobotao.innerHTML = "X"

    elementobotao.addEventListener("click", function () {
        deletaElemento(this.parentNode ,id)
    })

    return elementobotao
}

function deletaElemento(tag , id){
    tag.remove()

    itens.splice(itens.findIndex(elemento => elemento.id === id),1)

    localStorage.setItem("itens", JSON.stringify(itens))
}