let numbers = [1,2,2]
let soma = 0;

let arraydoForEach = numbers.forEach(item => {
  return soma += item * item;
  
  
})

console.log(soma);

let arraydoMap = numbers.map(item => {
   return item*item;
})
console.log(arraydoMap + " do Map");

console.log(arraydoForEach + " do for Each");