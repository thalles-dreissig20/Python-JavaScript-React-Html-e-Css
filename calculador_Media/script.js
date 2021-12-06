function calcular(){
    const num1 = document.getElementsByClassName('num1').value;
    const num2 = document.getElementsByClassName('num2').value;
    const num3 = document.getElementsByClassName('num3').value;
    const num4 = document.getElementsByClassName('num4').value;
    const total = ((num1 + num2 + num3 + num4) / 4);
    const res = document.getElementsByClassName('resultado');
    console.log(total);
    //res.textContent = total;   
}

calcula.addEventListener('click', calcular);//Chamando a função pra calcular o IMC no click