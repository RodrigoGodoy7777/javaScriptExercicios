function acessar(){
    let listaDeAtores =[{
        nome: 'Kenue Reeves',
        personagem: 'Neo',
        filme: 'Matrix',
    },
    {
        nome: 'David Prowse',
        personagem: 'Darth Vader',
        filme: 'Star Wars',
    },
    {
        nome: 'Bruce Wayne',
        personagem: 'Batman',
        filme: 'Batman - 0 inicio',
    },
    {
        nome: 'Johnny Deph',
        personagem: 'Jack Sparrow',
        filme: 'Piratas do Caribe',
    }
    ]

    let htmlAtores = ''

    for(contador = 0; contador < listaDeAtores.length; contador ++){
        
        // declarar ator e pegar 1 array da lista
        let ator = listaDeAtores[contador]
        // declarar nome e pegar 1 propriedade da lista que é o nome
        let nome = ator.nome
        let personagem = ator.personagem
        let filme = ator.filme

        htmlAtores += `
            <div class="box">
                <h1>${nome}</h1>
                <p>Interpreta o personagem ${personagem} no filme ${filme}.</p>
            </div>
        ` 
    }

    document.querySelector('#atores').innerHTML = htmlAtores
}

function apagar(){
    document.querySelector('#atores').innerHTML = ''
}