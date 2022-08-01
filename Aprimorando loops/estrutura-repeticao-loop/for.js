//escrever de 0 a 10;

for(var contador = 0; contador < 11; contador++){
    console.log(contador)
}

//com array

var arrayNomes = ['Pedro', 'Maria', 'Paulo', 'Roberto'];

for(var i =0; i < arrayNomes.length; i++){
console.log(arrayNomes[i] + " é um cliente");
}
//---
var i = 0;
for(;i<3;i++){
    console.log(i)
}

var i = 0;
for(;;i++){
    if(i==2 || i==7)
        continue;
        console.log(i)
    
    if(i==10)break;
}
