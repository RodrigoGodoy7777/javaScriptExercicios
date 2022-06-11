let inputNome = prompt ('Digite seu nome:')
let inputIdade = prompt ('Digite sua idade:')

let idade = parseInt(inputIdade)
let menorOuMaior

if (idade >= 18){
    menorOuMaior = 'maior de idade'
} else {
    menorOuMaior = 'menor de idade'
}

let mensagem = `Ola! ${inputNome}, você é ${menorOuMaior}!`

document.write(mensagem)
