/*function escreve (nome, sobrenome) {
    const a = sobrenome;
    if (a === null) {
        console.log("a é nulo");
        console.log("Valor de a", a, "\n");
        console.log("Valor de sobrenome", sobrenome, "\n");
    }
    console.log(`${nome} ${sobrenome}`);
}


escreve("Caroliny");

function soma(a,b) {
    return Number(a) + Number(b);
}
const resultado = soma(1,2);

console.log(soma(3,5));

const exibe = function (x) {
    return `Exibindo parâmetro ${x}`;
};
console.log(exibe("chocolate"));
// Onde o JavaScript está sendo executado? Qual o contexto?
//Contexto: Navegador. this depende do contexto.
//No navegador o this é a window

//Mas se você estiver usando a versão escrita do JavaScript o this não será a window.

function quemEThisEstrito() {
    console.log(this === window);
}

function quemEThisEstrito() {
    //Quando queremos usar o JavaScript na versão mais polida, o use strict deve ser informado no início.
    "use strict";
    console.log("strict");
    console.log(this ===window);
}
quemEThis();
quemEThisEstrito();

function Exibe2() {
    this.a = 50;
}

const novoObjeto = new Exibe2();
console.log(novoObjeto.a);*/


//objeto global
let empresa = this; // window
//Quando criamos um objeto, criamos um escopo.
const aluno = {
    nome: "Caroliny",
    matricula: 123,
    executar: function () {
        return `Exibindo de dentro de um método ${this.nome}`;
    },
};

console.log(aluno.executar());

//estrito - this é undefined
console.log("Quem é o this no contexto global", empresa);

//this dentro de uma função - também é um objeto global
function globalObj() {
    // "use strict"; //this vira undefined;
    return this;
}
window.document.write("<h2>Escrevendo no Body<h2>");
document.write(globalObj());

//globalObj().alert("Vai Corinthians!");

//Arrow Function - Função de seta, ela é mais curta, n~´ao tem o próprio contexto.
const novaFuncao = (a, b) => {
    console.log("Chamado de dentro de uma arrow function");
    //Inhterpolação de variáveis é chamar uma variável dentro de uma string; Template String.
    console.log(`\Exibindo o valor de ${a}`);
    //Concatenação de variáveis.
    console.log("Exibindo o total de caracteres" + b.length);
    //Indentação é um código escrito de forma legível, que respeita hierarquia { dá espaço, para facilitar a leitura do código. um código indentado é uma das maneiras de manter um código limpo.}
};

const funcao3 = (a) =>
console.log(`Exibindo o total de caracteres de ${a.length}`);

funcao3("Caroliny Santos");

//novo JavaScript ES2017
//spread operator ...

const carros = (primeiro, segundo, ...restante) => {
    console.log(`Os carros informados foram: ${primeiro}, ${segundo}. Todos os demais são ${restante.join(", ")}`);
};
carros(
    "DelRey",
    "Brasília",
    "Belina",
    "Fusca",
    "Variant",
    "Parati",
    "Monza",
    "Scort",
    "Fiat 147",
    "D-20",
    "Kombi",
    "BMW",
    "Opala",
    "Land-Rover",
    "Gurgel",
    "Maverick",
    "Marea"
);
const frutas = ["Guaraná", "Cupuaçu", "Açaí"];

const todasFrutas = [...frutas, "banana", "abacaxi"];

console.log("Todas as Frutas", todasFrutas);


//destructuring assignment
//Atribuição por desestruturação

let a = 50;
let b = 100;

const [primeiro, segundo, terceiro, ...resto] = [a, b, 200, 1000, 5000];
console.log("Exibindo o primeiro:", primeiro);
console.log("Exibindo o resto:", resto);

const meuArray = [10, 20, 30, 40];
console.log(meuArray, meuArray.join(" - "));

//const [p, s, t, q] = meuArray;
//console.log("exibindo o quarto elemento", q);
//console.log("exibindo o quarto elemento", q);
const [q, ...p] = meuArray.reverse();
console.log(p.reverse(p));





















/*function Pessoa() {
    this.velocidade = 0;

    function andar() {
        console.log("velocidade atual", this.velocidade);
    }
}

const pessoa = {
    velocidade: 0,
    nome:"Caroliny Santos"
    andar: function () {
        console.log("velocidade atual", this.velocidade);
    },
    exibeNome: function () {
        this.andar();
        console.log(`Nome ${this.nome} velociddae: ${this.velocidade}`);
    },
}*/