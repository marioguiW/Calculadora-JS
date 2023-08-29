const botoes = document.querySelectorAll('button');
const tela = document.getElementById('tela');
const clean = document.getElementById('clean');
const apaga = document.getElementById('apaga');
const multiplication = document.getElementById('multiplication');
const equal = document.getElementById('equal');

console.log(botoes)
console.log(tela)

botoes.forEach( (botao) => {
    botao.addEventListener("click", () =>{
        if(botao.innerHTML !== '&lt;' && botao.innerHTML !== 'C' && botao.innerHTML !== "=" && botao.innerHTML !== "X")
        {
            console.log(botao.innerHTML)
            tela.innerText += botao.innerHTML
            console.log("click")
        }
    })
})

const limparTela = clean.addEventListener("click", () =>{
    tela.innerHTML = '';
})

const apagaDigito = apaga.addEventListener("click", () => {
    let conteudoTela = tela.innerHTML;
    conteudoTela = conteudoTela.substring(0, conteudoTela.length -1)
    console.log(conteudoTela)
    tela.innerHTML = conteudoTela;
})

const insereAsterisco = multiplication.addEventListener("click", ()=>{
    tela.innerHTML += "*"
})

const calculaResultado = equal.addEventListener("click", ()=>{
    var resultado = tela.innerHTML;

    tela.innerHTML = eval(resultado);
})


