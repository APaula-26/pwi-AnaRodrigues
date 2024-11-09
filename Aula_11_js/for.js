const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

let text ="";
for (let i =0; i < cars.length; i++) {
    text += cars[i];
    console.log(`Agora foi colocado o ${cars[i]} na variavel text`);
}
console.log(text);
console.log(
    `--------------------------------------------------`
);

cars.forEach((car, i) => {
    console.log(
     `O carro ${car} está na posição ${i} do array`
    )
});
