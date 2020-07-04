console.log(`\n Trabalhando com Loops`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 21;
const estaAcompanhada = true;
let temPassagemComprada = false; //ainda não tem passagem
const destino = "Salvador" //supondo que o destino do comprador seja Salvador

console.log("\n Destinos Possíveis: ");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true; //faz as comparações e joga na variável

// let contador = 0;
// while(contador<3){
//     console.log(listaDeDestinos[contador]);
//     contador += 1; //pega o valor e soma +1 no contador
// }
    // imprime listando as 3 cidades

let contador = 0;
let destionoExiste = false;
while(contador<3){ //a cidade que o cliente está procurando, existe no meu array?
    
    if(listaDeDestinos[contador] == destino){
        destionoExiste = true;
        break;
    }
    //}else{  já foi avisado anteriormente que o destino não existe, então, não precisa desse else
    //    destionoExiste = false;
    
    contador += 1; //pega o valor e soma +1 no contador
}
console.log("Destino Existe: ", destionoExiste);