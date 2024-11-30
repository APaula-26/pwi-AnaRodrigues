// 16 - Faça um algoritmo que leia três valores que representam os três lados de um triângulo e verifique se são válidos, determine se o triângulo é equilátero, isósceles ou escaleno.

let lado1 = 10;
let lado2 = 15;
let lado3 = 16;


if(lado1 === 10) {
   if(lado2 === 10) {
    if(lado3 === 10){
        console.log("Resultado sendo processado:")
    }
   }
};


if(lado1 == lado2 && lado2 == lado3) {
         console.log("Equilátero")
}
else 
     if(lado1 == lado2 || lado2 == lado3){
    console.log("Isósceles")
}
else{
    console.log("Escaleno")
}; 