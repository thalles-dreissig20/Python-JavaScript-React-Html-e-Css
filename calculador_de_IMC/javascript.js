const calcula = document.getElementById('calcula');


//função calcular
function calcular() {
    const nome = document.getElementById('nome').value; //Pegando no elementos ID do HTML focado no value
    const altura = document.getElementById('altura').value;//Pegando no elementos ID do HTML focado no value
    const peso = document.getElementById('peso').value;//Pegando no elementos ID do HTML focado no value
    const resultado = document.getElementById('resultado');//Pegando no elementos ID do HTML

    if (nome !== '' && altura !== '' && peso !== '') {
        const Valoimc = (peso / (altura * altura)).toFixed(2);//toFixed para contar só 2 casas no resultado

        let classificacao = ''; //Variavel da classificação começando indefinida


        //Definições da classificação
        if (Valoimc < 18.5) {
            classificacao = 'estagio abaixo do peso';
        } else if (Valoimc < 25) {
            classificacao = 'Parabens, vc está na media!!';
        } else if (Valoimc < 30) {
            classificacao = 'estagio de obesidade nivel 1';
        } else {
            classificacao = 'muito acima do seu peso, CUIDADO!!!';
        }

        resultado.textContent = `${nome} seu valor imc é ${Valoimc} vc está de ${classificacao}`;//Texto do resultado

    } else {
        alert('Preencha todos os campos')
    }

}
calcula.addEventListener('click', calcular);//Chamando a função pra calcular o IMC no click
