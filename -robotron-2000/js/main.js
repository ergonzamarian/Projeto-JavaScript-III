/*
função anônima pode ser escrita a partir do es6 da forma abaixo "() => {}"
Para versões menores do que es6 deve ser escrita "funciont () {}"
A função anônima será utilizada apenas naquele momento de criação da mesma

robotron.addEventListener('click', () => {
    console.log('cliquei no robô')
});
*/

const controle = document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll("[data-estatistica]");

// Posso escrever uma lista como se fosse um arquivo JSON
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
       manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
       atualizaEstatisticas(evento.target.dataset.peca);
    })
});


function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]");

    if(operacao === "-"){
        if(peca.value > 0){
            peca.value--;
        }else{
            console.log("robô não pode lutar com braços negativos");
        }
    }else{
        peca.value++;
    }
    
}
/*
 pecas[peca][elemento.dataset.estatistica] = foi escrito dessa forma para poder pegar o 
 valor dinâmicamente, caso queira acessar algum elemento em questão pode ser feito também um 
 console.log(pecas[peca].forca)
*/
function atualizaEstatisticas(peca) {

    estatisticas.forEach( (elemento) =>{

        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
    })
}


