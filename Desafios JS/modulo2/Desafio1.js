/*
Joãozinho fez uma requisição do tipo GET em uma API REST e como resultado obteve:

const req = {
              BR:{nome: "Brasil", continente: "América do Sul"}, 
              USA:{nome: "Estados Unidos", continente: "América do Norte"},
              FR:{nome: "França", continente: "Europa"}
            }

Ele obteve um OBJETO na requisição e dentro dele tinha atributos representando cada pais..
entretanto Joãozinho julgou ruim trabalhar dessa forma.. e gostaria de transformar em uma ARRAY contendo os países

Ele gostaria de obter algo como:

const array = [
              {nome: "Brasil", sigla: "BR", continente: "América do Sul"},
              {nome: "Estados Unidos", sigla: "USA", continente: "América do Norte"},
              {nome: "França", sigla: "FR", continente: "Europa"},
              ]

Faça um método genérico capaz de receber objetos como do exemplo e transforma-lo em uma array de objetos.
*/

const req = {
  BR: { nome: 'Brasil', continente: 'América do Sul' },
  USA: { nome: 'Estados Unidos', continente: 'América do Norte' },
  FR: { nome: 'França', continente: 'Europa' },
};

let reqArray = [];

function transformaParaArray(objeto) {
  //código aqui
}

transformaParaArray(req);
console.log(reqArray);
