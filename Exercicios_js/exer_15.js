//15 - Faça um algoritmo que leia o ano em que uma pessoa nasceu, imprima na tela quantos anos, meses e dias essa pessoa ja viveu. Leve em 
//consideração o ano com 365 dias e o mês com 30 dias.
//(Ex: 5 anos, 2 meses e 15 dias de vida)

let ano = 1997; 
let resultadoAno = 2024 - ano;
let resultadoMeses = 12 * resultadoAno;
let quantidadeDeDias = 365 * resultadoAno;

console.log("Digite seu ano de nascimento:");
console.log(resultadoAno, "anos",parseInt(resultadoMeses),"mês", "e",quantidadeDeDias, "dias");

