const prompt = require('prompt-sync')();

let vetor = [];
let soma = 0;

// Ler 10 números
for (let i = 0; i < 10; i++) {
    vetor[i] = Number(prompt(`Digite o ${i + 1}º número: `));

    // Verificar se é par
    if (vetor[i] % 2 === 0) {
        soma = soma + vetor[i];
    }
}

// Exibir vetor
console.log("\nVetor:");
for (let i = 0; i < 10; i++) {
    console.log(vetor[i]);
}

// Exibir soma dos pares
console.log("\nSoma dos números pares:", soma);