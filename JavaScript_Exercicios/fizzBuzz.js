/*
Se i for múltiplo de 3 e 5, imprima o FizzBuzz.
Se i for múltiplo de 3 (mas não de 5), imprima o Fizz.
Se i for múltiplo de 5 (mas não de 3), imprima o Buzz.
Se i não for múltiplo de 3 ou 5, imprima o valor de i.
*/
const resultado = fizzBuzz(5);
console.log(resultado);

function fizzBuzz(entrada){
    if ( typeof entrada !== 'number')
        return 'Não é um número';
    if (entrada % 3 === 0 && entrada % 5 === 0)
        return 'fizzBuzz';
    if (entrada % 3 === 0)
        return 'Fizz';
    if (entrada % 5 == 0)
        return 'Buzz';

        
    return entrada;
}