



/* 1. Leia o código abaixo:
    

    const respostaDoUsuario = prompt("Digite o número que você quer testar")
    const numero = Number(respostaDoUsuario)
    
    if (numero % 2 === 0) {
      console.log("Passou no teste.")
    } else {
      console.log("Não passou no teste.")
    }
    
    
    a) Explique o que o código faz. Qual o teste que ele realiza? 
     
    
    R ele atua verificando se um numero é par ou nao
    
    
     b) Para que tipos de números ele imprime no console "Passou no teste"? 
    
    R numeros multiplos de 2 que são par.

    c) Para que tipos de números a mensagem é "Não passou no teste"?

    R Numeros são impar */


/*     2. O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:
    

    let fruta = prompt("Escolha uma fruta")
    let preco
    switch (fruta) {
      case "Laranja":
        preco = 3.5
        break;
      case "Maçã":
        preco = 2.25
        break;
      case "Uva":
        preco = 0.30
        break;
      case "Pêra":
        preco = 5.5
        break; // BREAK PARA O ITEM c.
      default:
        preco = 5
        break;
    }
    console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

    
    a) Para que serve o código acima?
     
    
    R//Saber o preço das mercadorias.


    b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
    
    
    R//O preço da fruta  maça  é  R$  2.25
   
   
    c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima 
    do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
   
   
    R///O preço da fruta  pera  é  R$  5




    3. Leia o código abaixo:
    


 
    
    a) O que a primeira linha está fazendo?
    
    R/////Criando uma constante igual um comando. 

    b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
     
    R///A primeira ia sair q o numero passou do teste já a outra ia falar que menssagem nao foi definida.

    c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.

    R///Sim, é assim que se faz: 
    
    const numero = Number(prompt("Digite o primeiro número."))
    if(numero > 0) {
    console.log("Esse número passou no teste")
    }else{
    console.log("Essa mensagem é secreta!!!")
    }
 
    R// o console ta fora de escolpo logo ele nao consegue acessar a msgn alem dos colchetes q nao estavam certos.




 - **Exercícios de escrita de código**
    1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).
        
        a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
        
        b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
        
        c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir.
         Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`
        


const numero = Number(prompt("Fale sua idade humano."))

  if(numero > 18) {
   console.log("Você pode dirigir !!!parabens!!! Você pode virar Uber agora!")
 }else{
        console.log("Volte para o TikTok!!você não pode dirigir!!!Que cringe!!!")
 }




    2. Agora faça um programa que verifica que turno do dia um aluno estuda.
     Peça para digitar **M** (matutino) ou **V** (Vespertino) ou **N** (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco `if/else`
      


const turno = prompt("Digite a primeira letra do seu turno")

 if (turno==="M"){
     console.log("Bom dia!");
 } else if(turno==="V"){
     console.log("Boa tarde");
 } else if(turno==="N"){
     console.log("Boa noite!");
 }
        
    3. Repita o exercício anterior, mas utilizando a estrutura de `switch case` agora.
        
        

const turno = prompt("Digite a primeira letra do seu turno.")
 switch (turno) {
     case "M":
         console.log("Bom Dia!")
     case"V":
         console.log("Boa tarde!")
         break;
     case "N":
         console.log("Boa noite!")
         break;
     default:
         console.log("Insira  uma letra valida!")   
 }






    4. Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele
     for do gênero fantasia **e** se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão
      assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a 
      mensagem: `"Bom filme!"`, caso contrário, imprima `"Escolha outro filme :("


R;

const genero = prompt("Qual genero você gostaria de ver?")
const preco = Number(prompt("Qual preço?")) 
  if(preco < 15, genero === "fantasia") {
    console.log("Bom filme!")
}else{
    console.log("Escolha outro filme :(")
    }
 
   
//////Gostaria de fazer o desafio porem a atividade em si já foi um desafio para mim. 
  To felizao de ter conseguido kkkkkkkkkkk
 Bom trampo!!!




