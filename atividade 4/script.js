const prompt = require('prompt-sync')();

let vetor = [];
let contador = 0;

// Ler 10 números
for (let i = 0; i < 10; i++) {
    vetor[i] = Number(prompt(`Digite o ${i + 1}º número: `));
}

// Número para buscar
let numero = Number(prompt("\nDigite o número que deseja procurar: "));

// Contar ocorrências
for (let i = 0; i < 10; i++) {
    if (vetor[i] === numero) {
        contador++;
    }
}

// Mostrar resultados
console.log("\nVetor:");

for (let i = 0; i < 10; i++) {
    console.log(vetor[i]);
}

console.log(`\nO número ${numero} aparece ${contador} vez(es).`);