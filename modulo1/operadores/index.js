/* Exercícios de interpretação de código */
/* const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2   f
console.log("a. ", resultado)

resultado = bool1 && bool2 && bool3  f
console.log("b. ", resultado) 

resultado = !resultado && (bool1 || bool2)  f
console.log("c. ", resultado)

console.log("d. ", typeof resultado)   t


 a.  false
 b.  false
 c.  true
 d.  boolean */

// Não entendi completamente o boolean tive q colocar no terminal 



/* ```2. Seu colega se aproxima de você falando que o código dele não funciona como devia.  Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console? 
    
```jsx
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)
  R; Não tem a converção de string para numero 

 */
3- 
/* const primeiroNumero = prompt("Digite um numero!")
const segundoNumero = prompt("Digite outro numero!")

const soma = ( Number(primeiroNumero) + Number(segundoNumero))

console.log(soma) */

//orgulhoso de ter conseguido kkkkkk
/* ------------------------------------------------------------------------------------------------------------ */
/* 
 Exercícios de escrita de código
1-
/* const idadeUsuario = prompt("Qual sua idade humano??");
const idadeMelhorAmigo = prompt("Qual a idade do seu melhor amigo??");
const resposta  = prompt("Sua idade é maior do que a do seu melhor amigo?") 
console.log (Number(idadeUsuario) < Number(idadeMelhorAmigo)) /* 
console.log ("A diferença de idade é" , (Number(idadeUsuario) - Number(idadeMelhorAmigo))) */ 


/* 2- */

/* 1-
const numeroPar = prompt("Fale um numero Par AGORA!?");
console.log (Number(numeroPar) % 2 ); */

2--
//Sempre da 0 o resultado//

3---
//Aparece o resto da divisão quando colocado um numero impar.



/* 
3-
3. Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console 
    
    a) A idade do usuário em meses
    
    b) A idade do usuário em dias
    
    c) A idade do usuário em horas





    const idade = prompt("Qual sua idade humano??");
    const dias = idade * 12 
    const meses = idade * 365
    const horas = idade * 8760
    console.log(meses)
    console.log(dias)
    console.log(horas)
 
    //acho q ta errado porem é maximo que consegui */


   /*  4-Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo true ou false:

    ```html
O primeiro numero é maior que segundo? true
O primeiro numero é igual ao segundo? false
O primeiro numero é divisível pelo segundo? true
O segundo numero é divisível pelo primeiro? true

obs: O true ou false vai depender dos números inseridos e do resultado das operações.
``` */

const primeiroNumero = prompt("fale um numero");
const segundoNumero = prompt("fale um numero");


console.log("O primeiro numero é maior que segundo?" , Number(primeiroNumero) > Number(segundoNumero));
console.log("O primeiro numero é igual ao segundo?" , Number(primeiroNumero) === Number(segundoNumero));
console.log("O primeiro numero é divisível pelo segundo?" , Number(primeiroNumero) % Number(segundoNumero) === 0);
console.log("O segundo numero é divisível pelo primeiro??" , Number(segundoNumero) % Number(primeiroNumero) === 0);


//nao consigui fazer as 2 ultimas linhas sairem true or false/// tive q pedir ajuda///   














4