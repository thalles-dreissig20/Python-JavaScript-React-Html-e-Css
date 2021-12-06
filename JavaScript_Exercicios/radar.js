verificarVelocidade(100);

function verificarVelocidade(velocidade){
    const velocidadeMaxima = 70;
    const kmPorPonto = 5;
    if (velocidade <= velocidadeMaxima)
        console.log('ok')
    else{
        const pontos = Math.floor(((velocidade - velocidadeMaxima) / kmPorPonto));
        if (pontos >= 12)
            console.log("Carteira suspensa");
        else{
            console.log("pontos",pontos);
        }
    }
}