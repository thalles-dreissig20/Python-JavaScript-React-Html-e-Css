// Operadores falsos //

// Underfined
// Null
// 0
// false
// ''
// NaN - Not a number


// Operadores Ternarios
let pontos = 100;
let tipo = pontos > 100 ? 'premium' : 'comum';
console.log(tipo);

// Operadores Logicos

// (&&) Ele retorna se os dois operadores forem verdadeiro (true)
console.log(true && true);

let maiorDeIdade = true;
let possuirCarteiraDeTrabalho = true;
let podeTrabalhar = maiorDeIdade && possuirCarteiraDeTrabalho;
console.log(podeTrabalhar);

// (||) Ele retorna verdadeiro se um dos operadores forem verdadeiro (true) 

let maiorDeIdade = true;
let possuirCarteiraDeTrabalho = true;
let podeTrabalhar = maiorDeIdade || possuirCarteiraDeTrabalho;
console.log(podeTrabalhar);

// (!) Operador NOT

let candidatoRecusado = !podeTrabalhar;
console.log('Candidato recusado', candidatoRecusado);








