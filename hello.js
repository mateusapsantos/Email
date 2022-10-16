// variaveis
let n1 = 7
let n2 = 9
const soma = n1 + n2 

function somaTotal(n1, n2) {
   const soma = n1 + n2

   if (n1 < 3) {
    return "numero invalido"
   } else if (n2 >= 10) {
    return "numero invalido"
   }
   return soma
}
//console.log (somaTotal(2, 2))

const valueTotal = (n1, n2 ) => n1 + n2
console.log (valueTotal(30, 30))





let produtos = [{
    nome: "hamburguer",
    preco: 30,
    temRecheio: true 
},
{
    nome: "carro",
    preçco: 30.000,
    temRoda: false
}

]
console.log (produtos)
