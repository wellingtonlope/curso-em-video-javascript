let valores = [8, 1, 7, 4, 2, 9]
valores.sort()
console.log(valores)
/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
*/

// for (let i = 0; i < valores.length; i++) {
//     console.log(`A posição ${i} tem o valor ${valores[i]}`)
// }

// for (i in valores) {
//     console.log(`A posição ${i} tem o valor ${valores[i]}`)
// }

// for (valor of valores) {
//     console.log(`tem o valor ${valor}`)
// }

valores.forEach((valor, index) => {
    console.log(`A posição ${index} tem o valor ${valor}`)
})
