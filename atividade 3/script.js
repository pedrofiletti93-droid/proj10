let vetor = [];

// Preencher vetor com números aleatórios
for (let i = 0; i < 7; i++) {
    vetor[i] = Math.floor(Math.random() * 100);
}

// Mostrar valores
console.log("Números gerados:");

for (let i = 0; i < 7; i++) {
    console.log(vetor[i]);
}