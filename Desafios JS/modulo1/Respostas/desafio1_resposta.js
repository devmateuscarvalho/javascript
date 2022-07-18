/*
Dada uma string, crie um método que retorna essa string ao contrário.

Ou seja, se a string for: JULIBIO
ela deve retornar -> OIBILUJ

*/

function inverte(string) {
  let palavra = string.split('').reverse().join('');
  return palavra;
}

const resulta = inverte('JULIBIO');
console.log(resulta);
