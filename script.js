let num = [5, 8, 4, 6, 7]

num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

// treinando

let pos = num.indexOf(8)
console.log(`O valor 8 está na posição ${pos}`) 
// vai retornar posição 5 por causa do num.sort() que coloca em ordem crescente


