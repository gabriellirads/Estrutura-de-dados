// Instituto Federal do Maranhão
// Faça uma função em JavaScript que recebe um array e retorne como resultado a
// posição do maior valor encontrado. Caso haja mais de uma ocorrência do maior valor,
// mostre a posição da primeira ocorrência.

let array = [3, 3, 5, 4, 6, 7, 2, 1, 10, 7, 7, 0, 7, 11];
let maior = array[0];
function VerificarMaior() {
    for (let i = 0; i < array.length; i++) {
        if (maior < array[i]) {
            maior = array[i];
        }
    }
    console.log(maior);
}
VerificarMaior()