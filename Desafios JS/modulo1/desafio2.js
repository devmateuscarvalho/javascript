/*
Dada a string formada pela frase abaixo:
"Teste12345Teste12345Teste"

Crie um método que a cada 10 caracteres ele insira uma quebra de linha \n na string

Portanto, deve retornar:
TesteXYZAB
Teste23450
TesteFim

Dica: será necessário usar for e substring()
*/

function addQuebraDeLinha() {
  let frase = 'TesteXYZABTeste23450TesteFim';
  const maxCharacter = 10;
  const breakLines = Math.floor(frase.length / maxCharacter);

  const residue = frase.length % maxCharacter;

  let initIndexToSplit = 0;
  let finalIndexToSplit = maxCharacter;
  let stringWithBreakline = [];

  //seu codigo
}

const novaString = addQuebraDeLinha();
console.log(novaString);
