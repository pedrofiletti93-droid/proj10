const prompt = require('prompt-sync')();

let vetor = [];
let semDuplicados = [];
let tamanhoNovo = 0;

// Ler 10 números
for (let i = 0; i < 10; i++) {
    vetor[i] = Number(prompt(`Digite o ${i + 1}º número: `));
}

// Remover duplicados manualmente
for (let i = 0; i < 10; i++) {

    let repetido = false;

    for (let j = 0; j < tamanhoNovo; j++) {

        if (vetor[i] === semDuplicados[j]) {
            repetido = true;
        }
    }

    if (repetido === false) {
        semDuplicados[tamanhoNovo] = vetor[i];
        tamanhoNovo++;
    }
}

// Mostrar vetor original
console.log("\nVetor original:");

for (let i = 0; i < 10; i++) {
    console.log(vetor[i]);
}

// Mostrar vetor sem duplicados
console.log("\nVetor sem duplicados:");

for (let i = 0; i < tamanhoNovo; i++) {
    console.log(semDuplicados[i]);
}