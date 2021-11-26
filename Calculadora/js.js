'use strict';

const resultado = document.getElementById('resultado');
const numeros = document.querySelectorAll('[id*=tecla]');//peguei todos os id que apresentem no nome a palavra tecla
const operadores = document.querySelectorAll('[id*=operador]');//peguei todos os id que apresentem no nome a palavra operador

//variaveis globais
let novoNumero = true;
let operador;
let numeroAnterior;

const operacaoPendente = () => operador !== undefined;

const calculando = () => {
    if (operacaoPendente()) {
        const numeroAtual = parseFloat(resultado.textContent.replace(',', '.'));//trocando as virgulas por pontos
        novoNumero = true;
        const resultadob = eval(`${numeroAnterior}${operador}${numeroAtual}`);//Aqui faz os calculos
        atualizaResultado(resultadob);
    }
}


//Atualizando o texto
const atualizaResultado = (texto) => {
    if (novoNumero) {
        resultado.textContent = texto.toLocaleString('BR');//codigo da moeda brasileira
        novoNumero = false;
    } else {
        resultado.textContent += texto.toLocaleString('BR');//codigo da moeda brasileira
    }
}


//Parte do codigo para inserir os textos clicados no label
const inserirNumero = (evento) => atualizaResultado(evento.target.textContent);
numeros.forEach(numero => numero.addEventListener('click', inserirNumero));


//Parte do codigo onde seleciona o operador matematico
const selecionarOperador = (evento) => {
    if (!novoNumero) {
        calculando();
        novoNumero = true;
        operador = evento.target.textContent;
        numeroAnterior = parseFloat(resultado.textContent.replace(',', '.'));//trocando as virgulas por pontos
    }
}
operadores.forEach(operador => operador.addEventListener('click', selecionarOperador));


//Adicionei o botão IGUAL (=) no codigo
const ativarIgual = () => {
    calculando();
    operador = undefined;
}
document.getElementById('igual').addEventListener('click', ativarIgual);//pega o elemento iD do HTML


//Parte do código onde tem o botão de limpar o resultado (CE)
const limparResultado = () => resultado.textContent = '';
document.getElementById('limparResultado').addEventListener('click', limparResultado);//pega o elemento iD do HTML


//Parte do código onde tem o botão para apagar o calculo(C)
const limparCalculo = () => {
    limparResultado();
    operador = undefined;
    novoNumero = true;
    numeroAnterior = undefined;
}
document.getElementById('limparCalculo').addEventListener('click', limparCalculo);//pega o elemento iD do HTML


//Parte do código onde tem o botão para apagar o ultimo digito(BackSpace)
const removerUltimoNumero = () => resultado.textContent = resultado.textContent.slice(0, -1);
document.getElementById('backspace').addEventListener('click', removerUltimoNumero);


//Parte do código onde tem o botão mais ou menos (±)
const maisoumenos = () => {
    novoNumero = true;
    atualizaResultado(resultado.textContent * -1);
}
document.getElementById('maisoumenos').addEventListener('click', maisoumenos);//pega o elemento iD do HTML


//Parte do código onde tem a virgula (,)
const existeDecimal = () => resultado.textContent.indexOf(',') !== -1;
const existeValor = () => resultado.textContent.length > 0;
const inserirDecimal = () => {
    if (!existeDecimal()) {
        if (existeValor()) {
            atualizaResultado(',');
        } else {
            atualizaResultado('0,');
        }
    }
}
document.getElementById('virgula').addEventListener('click', inserirDecimal);//pega o elemento iD do HTML



//Parte do código onde tem o mapa do teclado
const mapaTeclado = {
    '0': 'tecla0',
    '1': 'tecla1',
    '2': 'tecla2',
    '3': 'tecla3',
    '4': 'tecla4',
    '5': 'tecla5',
    '6': 'tecla6',
    '7': 'tecla7',
    '8': 'tecla8',
    '9': 'tecla9',
    '/': 'operadordivisao',
    '*': 'operadormultiplicacao',
    '-': 'operadormenos',
    '+': 'operadormais',
    '=': 'igual',
    'Enter': 'igual',
    'Backspace': 'backspace',
    'c': 'limparResultado',
    'Escape': 'limparCalculo',
    ',': 'virgula'
}

const mapearTeclado = (evento) => {
    const tecla = evento.key;
    const teclaPermitida = () => Object.keys(mapaTeclado).indexOf(tecla) !== -1;
    if (teclaPermitida()) document.getElementById(mapaTeclado[tecla]).click();
}
document.addEventListener('keydown', mapearTeclado);