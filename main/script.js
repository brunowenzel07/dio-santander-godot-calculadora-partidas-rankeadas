const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite o número de vitórias: ", (vitorias) => {
    rl.question("Digite o número de derrotas: ", (derrotas) => {
        calculadoraRanking(parseInt(vitorias), parseInt(derrotas));
        rl.close();
    });
});

function calculadoraRanking(vitorias, derrotas) {
    let saldoVitorias;
    let nivel;

    nivel = classificacao(vitorias);
    saldoVitorias = vitorias - derrotas;

    console.log("O Herói tem de saldo de " + saldoVitorias + " está no nível de " + nivel);
}

function classificacao(vitorias) {
    if (vitorias < 10) {
        return "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        return "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        return "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        return "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        return "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        return "Lendário";
    } else {
        return "Imortal";
    }
}
