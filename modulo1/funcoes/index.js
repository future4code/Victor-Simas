/* / 1



function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))

a) O que vai ser impresso no console?

///10   
///50



b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console? */

/// Pensei q iria apenas dar a resposta do primeiro, porem tentei e vi que ele responde as 2 funçoes com o mesmo codigo.






2-Leia o código abaixo */

 let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)


a. Explique o que essa função faz e qual é sua utilidade

///Saber se eu gosto de cenoura? //Não entendi pq tem o Lowercase no meio da função se não tem console.log para mostrar a msgn///


//b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
  //   i.   `Eu gosto de cenoura`                
  // ii.  `CENOURA é bom pra vista`
  //   iii. `Cenouras crescem na terra` */


//true
//true
//true

/// 1-Escreva as funções explicadas abaixo

///a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como: 


///"Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
///


/* Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. Lembrando que a função não possui entradas, apenas imprime essa mensagem.
 */ 


//function frasePessoal() {
//console.log ("Eu sou Victor Brunno, tenho 28 anos, moro em São Paulo e sou estudante")  
//}
//frasePessual()



/* b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (`string`), a idade (`number`), a cidade (`string`) e uma profissão (`string`). Ela deve retornar uma `string` que unifique todas as informações da pessoa em uma só mensagem com o template:

Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].

  */

//let montagemFrase = (nome, idade, cidade, profissão) => {
//const fraseFinal = `Eu sou ${nome}, tenho ${idade}, moro em ${cidade} e sou ${profissão}`  
//return fraseFinal  
//}
//const frasePessoal = montagemFrase("Victor", 28, "São Paulo", "estudante")
//console.log(frasePessoal)
 

/* 2 Escreva as funções explicadas abaixo: */

/* a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função,
 faça a soma das duas entradas e retorne o resultado. Invoque a função 
 e imprima no console o resultado. */


 function numeros(num1,num2) {
 const soma = num1 + num2
 return soma   
}
 const calculo = numeros(16, 10)

 console.log(numeros(16, 10))


 /* b) Faça uma função que recebe 2 números e
  retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo. */


 //function numeros(num1,num2) {
  //  const comparacao = num1 >= num2
  //  return comparacao  
  // }
  //  const resposta = numeros(16, 10)
   
  //  console.log(numeros(16, 10))

   /* c Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não */
  

  // function numero(num1) {
  //  const comparacao = (num1 % 2 === 0)
   // return comparacao 
}
   // const resposta = numero(16)
   
   // console.log (numero(16))


    /* d/ */
    //function numero(num1) {
       // const comparacao = (num1 % 2 === 0)
      //  return comparacao 
   //}
       // const resposta = numero(17)
       
     //   console.log (numero(17))


       //R aparece false



3- 
const num1 = Number(prompt("Fale um numero"))
const num2 = Number(prompt("Fale um numero"))


function soma(num1, num2) {
     const soma = num1 + num2
     return soma 
}
function sub(num1, num2) {
    const diferenca = num1 - num2
    return diferenca 
}
function mult(num1, num2) {
    const multiplicacao = num1 * num2
    return multiplicacao 
}
function divi(num1, num2) {
    const divisao = num1 / num2
    return divisao 
}
 
console.log("Números inseridos:" , num1, num2)
console.log("Soma:", soma(num1, num2))
console.log("Diferença:", sub(num1, num2))
console.log("Multiplicação:" ,mult(num1, num2))
console.log("Divisão", divi(num1, num2))
 


//// foi dificil mds///

        