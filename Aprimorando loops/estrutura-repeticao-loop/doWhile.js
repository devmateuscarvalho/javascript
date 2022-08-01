var meta = 10;
var realizado = 9;
var comissao = 0.0;

do {
    if (realizado >= meta) {
        console.log("Valor da comissão: R$", ++comissao)
    } else {
        console.log("Valor da comissão: R$", comissao += 2);
        break;
    }
} while (comissao < realizado);