console.log(`Trabalhando com Listas`);
//String em crase para caso queira trabalhar com interpolação de variáveis

//Destinos para vender na agência de viagens:
//const salvador = `Salvador`;
//const saoPaulo = `São Paulo`;
//const rioDeJaneiro = `Rio de Janeiro`;

// Ctrl + K + C = coloca comentários em várias linhas selecionadas
// Ctrl + K + U = tira os comentários de várias linhas selecionadas

//quando possui muitas variáveis, teria que imprimir todos.. mas não é uma boa prática..
//console.log("Destinos Possíveis: ");
//console.log(salvador, saoPaulo, rioDeJaneiro);

//Listas = Array
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

listaDeDestinos.push(`Curitiba`) //adicionando um item na lista, depois que a lista foi declarada

console.log(listaDeDestinos);

listaDeDestinos.splice(1,1) //quero apagar São Paulo. Então, vai apagar a primeira posição, e apagar apenas 1.
console.log(listaDeDestinos);
console.log(listaDeDestinos[1]); //vai imprimir o índice 1 = apenas o Rio de Janeiro, pois São Paulo foi apagado
console.log(listaDeDestinos[1], listaDeDestinos[0]); //vai imprimir o índice 1 e o índice 0 = Rio de Janeiro e Salvador