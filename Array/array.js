let numeros = [1, 2, 3, 4, 5]; // Array de números
let frutas = ["Maçã", "Banana", "Laranja"]; // Array de strings
let naoSei = []

//for(let i=0; i <= numeros.length - 1; i++){
  //  console.log(numeros[i])
//}

//console.log(frutas[0]); // "Maçã"
//console.log(numeros[2]); // 3

//frutas[1] = "Pera"; 
//console.log(frutas); // ["Maçã", "Pera", "Laranja"]

//frutas.push("Melancia"); // Adiciona no final
//frutas.unshift("Abacaxi"); // Adiciona no início


//frutas.pop(); // Remove do final
//frutas.shift(); // Remove do início

//frutas.forEach(frutas => console.log(frutas)); // Percorre todos os elementos

//for (let fruta of frutas) {
  //console.log(fruta);
//}

//for(let j=0; j < frutas.length; j++){
  //    console.log(frutas[i])
//}

//mesma coisa do foreach
//for (let i = 0; i < frutas.length; i++) {
  //  console.log(frutas[i]);
//}

//Cria um novo array contendo apenas os elementos que atendem a uma condição. (Não modifica o array original)
//let numerosPares = numeros.filter(n => n % 2 === 0); // [2, 4]
//console.log(numerosPares)

//Cria um novo array modificando cada elemento do original.
//let dobrados = numeros.map(n => n * 2); // [2, 4, 6, 8, 10]

//let existe = numeros.includes(3); // true
//Retorna o primeiro elemento do array que satisfaz a condição.
//let encontrado = numeros.find(n => n > 3); // 4
//let indice = numeros.indexOf(4); // 3

//let ordenados = numeros.sort((a, b) => a - b); // Ordem crescente
//console.log(ordenados)
//let reverso = numeros.reverse(); // Inverte a ordem

//let todos = frutas.concat(numeros); // Junta arrays
let stringFrutas = frutas.join(", "); // "Maçã, Pera, Laranja"
console.log(stringFrutas)