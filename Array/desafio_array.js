// Instituto Federal do Maranhão
//1. Faça uma função em JavaScript que recebe um array de números inteiros e informe quantos destes são negativos.
array = [2, 5, -8, 9, 19, -90, -98]
array.push(100)
console.log(array)
let element_negativo = 0

function ElementosNegativos() {
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            element_negativo++
        }
    }
    console.log('A quantidade elementos negativos no array é: ' + element_negativo)
}
ElementosNegativos()