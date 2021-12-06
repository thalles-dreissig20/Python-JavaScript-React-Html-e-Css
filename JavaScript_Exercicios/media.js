
const array = [80,80,80];

console.log(mediaDoAluno(array));

function mediaDoAluno(notas) {
    const media = calcularMedia(notas);

    if (media < 29) return 'H';
    if (media < 39) return 'G';
    if (media < 49) return 'F';
    if (media < 59) return 'E';
    if (media < 69) return 'D';
    if (media < 79) return 'C';
    if (media < 89) return 'B';
    return 'A'
}

function calcularMedia(array){
    let soma = 0;
    for (let valor of array){
        soma += valor;
    }
    return soma/(array.length);
}