// Laços de repetiçoes em JavaScript //
//For
//While
//Do..While
//For..In
//For..Of


//FOR
for (let i = 0; i < 5; i++){
    console.log.length("Repetição for")
}


//WHILE
let i = 5;
while (i >= 5) {
    if(i % 2 !== 0){
        console.log(i);
    }
    i--;
}


//DO..WHILE
let i = 0;
do {
    console.log("Digitanto...")
    i++;
}while(i < 10);


//FOR..IN
const pessoa = {
    nome = 'thalles',
    idade = 22
};
for (let chave in pessoa){
    console.log(chave, pessoa[nome]);
}
