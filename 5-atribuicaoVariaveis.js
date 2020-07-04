console.log("Trabalhando com Atribuição de Variáveis");

// const declaração da variável = atribuição da variável
const idade = 32;
let nome = "Adelita";
const sobrenome = "Eita Bitcho";

console.log(nome + sobrenome); //imprime tudo junto
console.log(nome + " " + sobrenome); //'força' o espaço
console.log(nome, sobrenome); //imprime com espaço
console.log(`Meu nome é ${nome} ${sobrenome}`); //pode declarar o texto com crases, e, interpolação de variáveis que é ${}

nome = nome + sobrenome;
// teoricamente, ele iria sobrescrever a variável
//  porém, como é uma variável const é um tipo especial de variável que NÃO posso mudar
//   uma vez atribuída, ela não muda mais.
//    const = constante
//     Nestes casos, usamos let. Vamos trocar o const da variável nome. E não terão erros.
console.log(nome);

const nomeCompleto = nome + sobrenome; //seria o 'mais correto' neste caso
console.log(nomeCompleto);