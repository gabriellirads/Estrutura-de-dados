// Instituto Federal do Maranhão
// 2. Faça uma função em JavaScript que recebe um array A e um valor X e retorne como
// resultado a quantidade de vezes que X aparece em A.

let a = [3, 3, 5, 4, 6, 7, 2, 1, 10, 7, 7, 0, 7];

quant_de_x = 0;

function Verificador(x) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] == x) {
            quant_de_x++;
        }
    }
    console.log(quant_de_x);
}
Verificador(7);

