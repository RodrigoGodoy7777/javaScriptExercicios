
function entrar(){
    let inputNome = prompt ('Digite seu nome:')
    let inputIdade = prompt ('Digite sua idade:')

    let idade = parseInt(inputIdade)
    let menorOuMaior

    if (idade >= 18){
        menorOuMaior = 'maior de idade'
    } else {
        menorOuMaior = 'menor de idade'
    }

    let mensagemEspecial = ''

    if (inputNome === 'Thomas' || inputNome === 'thomas'){
        mensagemEspecial = 'Você é o cara!'
    }

    let mensagem = `Ola! ${inputNome}, você é ${menorOuMaior}!`


    document.querySelector('#mensagemPrincipal').innerHTML = mensagem
    document.querySelector('#mensagemEspecial').innerHTML = mensagemEspecial
}




