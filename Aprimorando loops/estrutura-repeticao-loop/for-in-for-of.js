var objCliente = { nome: "Flávio", idade: 23, dataNasc: new Date("1993-07-18") };

for (var chave in objCliente) {
    console.log("chave: ", chave);
    console.log("valor: ", objCliente[chave])
}

var arrayQualquer = ['a', 'b', 'c',1,2,3];

for (const key in arrayQualquer) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}
