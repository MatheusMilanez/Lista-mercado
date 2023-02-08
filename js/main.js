const form = document.getElementById("adicionar-produto-quantidade")

form.addEventListener("submit", (Evento) => {
    Evento.preventDefault() //Esse código interrope o evento padrão do formulário
    console.log("Funcionou")
    console.log(Evento.target.elements['produto'].value)
    console.log(Evento.target.elements['quantidade'].value)
})

