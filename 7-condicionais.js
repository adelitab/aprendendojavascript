console.log(`Trabalhando com Condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

// const idadeComprador = 15;

// console.log("Destinos Possíveis: ");
// console.log(listaDeDestinos);

// if(maiorDeIdade >= 18){
//     console.log("Comprador Maior de Idade");
//     listaDeDestinos.splice(1,1); //removendo item.
// }
// //vai imprimir todos os destinos, pois não vamos vender para menores de 18 anos


const idadeComprador = 21;
const estaAcompanhada = true;
const temPassagemComprada = true;

console.log("Destinos Possíveis: ");
console.log(listaDeDestinos);

if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Boa Viagem!");
    listaDeDestinos.splice(2, 1); //removendo item Rio de Janeiro.
} else {
    console.log("Não é maior de idade. Não posso vender");
}

// Alt + Shift + F = arruma a identação
console.log("Embarque: \n\n") // \n pula 1 linha

if(idadeComprador >= 18 && temPassagemComprada == true){
    console.log("Boa Viagem!");
} else {
    console.log("Você não pode embarcar");
}

console.log(listaDeDestinos);

/*
    Operadores Lógicos ou Operadores Booleanos:
    console.log(idadeComprador > 18);
    console.log(idadeComprador < 18);
    console.log(idadeComprador <= 18);
    console.log(idadeComprador >= 18);
    console.log(idadeComprador == 18);
    = atribuição
    == comparação lógica
    o retorno deles será TRUE ou FALSE
*/
