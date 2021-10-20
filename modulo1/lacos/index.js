-/*  **Exercícios de interpretação de código**
    
    Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador **para analisar e pensar sobre o resultado.** 
    
    1. O que o código abaixo está fazendo? Qual o resultado impresso no console?
        
        
        let valor = 0
        for(let i = 0; i < 5; i++) {
          valor += i
        }
        console.log(valor)
    


         R/// repitindo o valor  de 0 a 5 e somando o valor total mais o valor, fazendo assim  o valor final saindo 10 pois o ultimo numero é 4 + 1 + 5 = 10.

        
    2. Leia o código abaixo:
        
        
        const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
        for (let numero of lista) {
          if (numero > 18) {
        		console.log(numero. length)
        	}
        }
      
        
        a) O que vai ser impresso no console?
        
           19
           21
           23
           25
           27
           30
        b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?
        
    3. Qual seria o resultado impresso no console, se o usuário digitasse o número `4` ?
        
        
        const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
        let quantidadeAtual = 0
        while(quantidadeAtual < quantidadeTotal){
          let linha = ""
          for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
            linha += "*"
          }
          console.log(linha)
          quantidadeAtual++
        }
        
         */
   

        ///R  3



/* 
        - **Exercícios de escrita de código**
    1. 
        
       
        const quantidadeDePets = Number(prompt("Quantos pets você tem?"))
if (quantidadeDePets <= 0){
    console.log("Que pena! Você pode adotar um pet!")
} 
const pets = []
for (i = 0; i < quantidadeDePets; i++){
    pets.push(prompt("Digite o nome de um dos pets!"))
}

console.log (pets)
        
        
    2. 
  ///A     
let arrayOriginal = [10, 30, 100, 20, 60, 80]
for (i = 0; i < arrayOriginal.length; i++){
  console.log(arrayOriginal[i])
}

///b

for (i = 0; i < arrayOriginal.length; i++){
  console.log(arrayOriginal[i] / 10)
}


   //c
    } 
    let arrayPar = []
    let arrayOriginal = [10, 30, 100, 20, 60, 80]
    for(let numeros of arrayOriginal){
     if( numeros %2 === 0){
         arrayPar.push(numeros)
     }
     console.log(arrayPar) */
    }
    
//D
    
    
    /* let novoArray = [];
    function criaArray(array){
        for (i = 0; i < array.length; i++){
            novoArray.push(`O elemento do índice ${i} é ${array[i]}`)
        }
        console.log(novoArray)
    }
    criaArray(arrayOriginal) */
    
    
    
    ///E
  
    const arrayOriginal = [10, 30, 100, 20, 60, 80]
  
  
  
    for (i = 0; i < array.length; i++)
    function imprimirMaiorMenor (array){
        let maior = array[0];
        let menor = array [99];
        for (i = 0; i < array.length; i++){
            if (array[1] > maior)
                maior = array[i];
            if (array[1] < menor)
                menor = array[i];
            }
            console.log(`O maior número é ${maior}`)            
             console.log(`menor é ${menor}`)
       }
    
    imprimirMaiorMenor(arrayOriginal)
  
  
  
  
///Bonus/C
    const arrayOriginal = [10, 30, 100, 20, 60, 80]

       
        const min = Math.min(...arrayOriginal);
        const max = Math.max(...arrayOriginal);
        console.log(min); 
        console.log(max);
        
        