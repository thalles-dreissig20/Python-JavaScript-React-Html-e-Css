/*
if (condicao){
    //Codigo a ser executado
}
else if(outraCondicao){
    //Codigo a ser executado
}
else{
    //codigo a ser executado
}
*/

let hora = 10;

if (hora >= 06 && hora <= 12){
    window.alert("Bom dia");
}
else if(hora > 12 && hora <= 18){
    window.alert("Boa tarde");
}
else{
    console.log("Boa noite");
}


// switch case

let funcionario; //comum, autodidata, gerente

switch(funcionario){
    case 'comum':
    console.log('funcionario comum');
    break;
    
    case 'autodidata':
    console.log('funcionario autodidata');
    break;

    case 'gerente':
    console.log('funcionario gerente');
    break;

    default:
    console.log("funcionario não definido");
}

