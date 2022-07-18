/*
Dada a Array de objetos:

const array = [{id: 1, name:"Arissimba", age: 45},{id: 2, name: "Julibio", age: 55},{id:3, name: "Aristeu", age: 7},{id:4, name: "Leoncio", age: 2},{id:5, name: "José", age: 14}]

1) Crie uma função que retorna no console o nome + id de todos objetos 
2) Crie uma função que retorna apenas o nome do usuário com o id informado (utilize o método find), caso o id nao exista retornar msg de erro
3) Crie uma função que retorna apenas os usuários com idade menor que 15 anos (utilize método filter)
4) Crie uma função que retorna a array organizada pela idade em ordem crescente. (utilize método sort)

*/

const array = [
  { id: 1, name: 'Arissimba', age: 45 },
  { id: 2, name: 'Julibio', age: 55 },
  { id: 3, name: 'Aristeu', age: 7 },
  { id: 4, name: 'Leoncio', age: 2 },
  { id: 5, name: 'José', age: 14 },
];

function imprimeTodosNomes() {
  console.log('\nImprimindo ids e nomes...\n');

  array.forEach((item) => {
    console.log(`${item.id} - ${item.name}`);
  });
}

imprimeTodosNomes();

function procuraPorID(id) {
  console.log(`\nProcurando usuário de id: ${id}\n`);

  const user = array.find((user) => {
    return user.id === id;
  });

  if (!user) return console.log('Não existe usuário com esse ID');

  console.log(user);
}

procuraPorID(20);

function apenasMenorQue15() {
  console.log(`\nProcurando usuários com menos de 15 anos\n`);

  const users = array.filter((user) => {
    return user.age < 15;
  });

  console.log(users);
}

apenasMenorQue15();

function organizaArray() {
  console.log(`\nOrganizando array por idade crescente\n`);

  const newArray = array.sort((a, b) => a.age - b.age);
  console.log(newArray);
  //codigo
}

organizaArray();
