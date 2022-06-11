let inputTabuada = prompt('Digite a tabuada')

let tabuada = parseInt(inputTabuada)

for (contador = 0; contador <= 10; contador ++){
    let resultado = contador * tabuada
    let mensagem = `${contador} x ${tabuada} = ${resultado} <br>`

    document.write(mensagem)
}