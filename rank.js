const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função principal do desafio
function calcularNivel(vitorias, derrotas) {
    let saldo = vitorias - derrotas;
    let nivel = "";

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return { saldo, nivel };
}

// Perguntas ao usuário
rl.question("Digite a quantidade de vitórias: ", function(vit) {
    rl.question("Digite a quantidade de derrotas: ", function(der) {

        let vitorias = Number(vit);
        let derrotas = Number(der);

        let resultado = calcularNivel(vitorias, derrotas);

        console.log(`\nO Herói tem um saldo de ${resultado.saldo} e está no nível ${resultado.nivel}`);

        rl.close();
    });
});
