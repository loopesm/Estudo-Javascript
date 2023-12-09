// Exercício Sobre Variavel e Constantes

/* EXERCÍCIO = 
Moises Lopes, nasceu em 1997, e tem 26 anos, pesa 75 kg e tem 1,75m de altura
e seu IMC é de 24,4898

indiceMassaCorporal = peso / ( altura * altura )

*/

const nome = "Moises";
const sobrenome = "Lopes";
const idade = 26;
const peso = 75;
const altura = 1.75;
let indiceMassaCorporal;
indiceMassaCorporal = peso / (altura * altura);
let anoNascimento;
anoNascimento = 2023 - idade;

document.write(
  `<p class="lead m-0">${nome} ${sobrenome}, nasceu em ${anoNascimento} e tem ${idade} anos, pesa ${peso}kg e tem ${altura}m de altura </p>`
);
document.write(
  `<p class="lead"><br> E seu IMC é: <b>${indiceMassaCorporal}</b></p>`
);

// TEMPLATE STRINGS
// Declara uma String usando "${variavel}"
