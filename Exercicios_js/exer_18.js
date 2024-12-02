//18 - Francisco tem 1,50m e cresce 2 centímetros por ano, enquanto Sara tem 1,10m e cresce 3 centímetros por ano. 
//Faça um algoritmo que calcule e imprima na 
//tela em quantos anos serão necessários para que Sara seja maior que Francisco

let sara = 1.10;
let fran = 1.50;
let cresceSara = 0.03;
let cresceFran = 0.02;
let ano = 0;
let anoMax = 100;

for(ano; ano < anoMax; ano++){
    sara += cresceSara;
    fran += cresceFran;
    if(sara > fran){
        break;
    }
};

console.log("Sara levará",ano, "anos para ter a mesma altura que Francisco");
