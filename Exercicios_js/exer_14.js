//14 - Faça um algoritmo que receba um valor A e B, e troque o valor de A por B e o valor de B por A e imprima na tela os valores.

// Let - Declara a váriavel 
// Var - Determina a minha váriavel mas é umaformamaisglobal e menos usual no momentoatual 
// Const - Declarauma variável constante,ou seja, atribui um únicovalora ela.É utilizada também quandose deseja chamar uma função


let numA = 4; // Let está declarando uma váriavel, o número4 está sendo atríbuido a váriavel numA. 
let numB = 8; // Let está declarando uma váriavel, o número4 está sendo atríbuido a váriavel numB. 

console.log("A =", numA); // O log()método grava (registra) uma mensagem no console. Neste caso está registrando e apresentando que A= a váriavel numA
console.log("B =", numB); // O log()método grava (registra) uma mensagem no console. Neste caso está registrando e apresentando que A= a váriavel numB

let aux = numA; // Let está declarando uma váriavel, o numA está sendo atríbuido a váriavel aux.
numA = numB; // o numA está sendo atríbuido a váriavel numB.
numB = aux; // o numB está sendo atríbuido a váriavel aux.

console.log("Após a troca:"); // O log() (registrou) uma mensagem no console. Neste caso está registrando e apresentando a frase Após a troca:
console.log("A =", numA); // O log() (registrou) uma mensagem no console. Neste caso está registrando e apresentando a que A= a 
// váriavel numA  (No caso a troca do valor de atribuição) 
console.log("B =", numB); // O log() (registrou) uma mensagem no console. Neste caso está registrando e apresentando a que B= a 
// váriavel numB  (No caso a troca do valor de atribuição) 

