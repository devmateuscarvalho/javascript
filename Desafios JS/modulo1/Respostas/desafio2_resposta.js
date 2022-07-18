/*
Dada a string formada pela frase abaixo:
"Teste12345Teste12345Teste"

Crie um método que a cada 10 caracteres ele insira uma quebra de linha \n na string

Portanto, deve retornar:
TesteXYZAB
Teste23450
TesteFim

*/

function addQuebraDeLinha() {
  let frase = 'TesteXYZABTeste23450TesteFim';
  const maxCharacter = 10;
  const breakLines = Math.floor(frase.length / maxCharacter);

  const residue = frase.length % maxCharacter;

  let initIndexToSplit = 0;
  let finalIndexToSplit = maxCharacter;
  let stringWithBreakline = [];

  for (let x = 1; x <= breakLines; x++) {
    stringWithBreakline.push(
      frase.substring(initIndexToSplit, finalIndexToSplit),
    );

    initIndexToSplit = finalIndexToSplit;
    finalIndexToSplit = (x + 1) * maxCharacter;
  }

  let formatedString = stringWithBreakline.join('\n');

  if (residue > 0)
    formatedString +=
      '\n' + frase.substring(frase.length - residue, frase.length);

  return formatedString;

  //codigo
}

const novaString = addQuebraDeLinha();
console.log(novaString);
