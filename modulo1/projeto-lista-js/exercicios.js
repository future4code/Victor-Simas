// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
   retanguloAlt = prompt("Fale a altura")
   retanguloLar = prompt("Fale a largura")
  
  console.log ( retanguloAlt * retanguloLar)
}



// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  anoAtual = prompt("Fale o ano atual")
  anoNascimento = prompt("Fale o seu ano de nascimento")

  console.log ( anoAtual - anoNascimento)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
 const totalImc = peso / (altura * altura)
return totalImc

}
console.log("Seu IMC é:" + Number(totalImc))






// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
const nome = prompt("Qual seu nome")
const idade = prompt("Qual sua idade")
const email = prompt("Qual seu email")
console.log (`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt("Qual sua cor favorita")
  const cor2 = prompt("Qual sua cor favorita")
  const cor3 = prompt("Qual sua cor favorita")
  array = [cor1, cor2, cor3]
  console.log (array) 
 
}



// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
const palavraMaiuscula = string.toUpperCase()
return palavraMaiuscula

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  console.log(custo)
  console.log(valorIngresso)
  calculo = (custo / valorIngresso)
  return  calculo

}

console.log (calculo)

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  console.log(string1)
  console.log(string2)
  const comparacao = string1 >= string2
 return comparacao
}
console.log (comparacao)

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  const ultimo = array[array.length - 1]
  return ultimo
}


// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
const indiceUltimo = array.length - 1
const primeiro = array[0]
const ultimoElemento = array[indiceUltimo]

array[0] = ultimoElemento
array[indiceUltimo] = primeiro
return array;
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
 const boo = string1.toUpperCase() === string2.toUpperCase();
 return boo
 }
  console.log  (boo)


// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}