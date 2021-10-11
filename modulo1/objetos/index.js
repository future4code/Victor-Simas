/* 1.  Leia o código abaixo

    const filme = {
    	nome: "Auto da Compadecida", 
    	ano: 2000, 
    	elenco: [
    		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
    		"Virginia Cavendish"
    		], 
    	transmissoesHoje: [
    		{canal: "Telecine", horario: "21h"}, 
    		{canal: "Canal Brasil", horario: "19h"}, 
    		{canal: "Globo", horario: "14h"}
    		]
    }
    
    console.log(filme.elenco[0])
    console.log(filme.elenco[filme.elenco.length - 1])
    console.log(filme.transmissoesHoje[2])
    ```
    
    a) O que vai ser impresso no console?
const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])
``` */


//a) O que vai ser impresso no console?

/* Matheus Nachtergaele
Virginia Cavendis

Globo , 14h */


/* 2. Leia o código abaixo
    
    ```jsx
    const cachorro = {
    	nome: "Juca", 
    	idade: 3, 
    	raca: "SRD"
    }
    
    const gato = {...cachorro, nome: "Juba"}
    
    const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}
    
    console.log(cachorro)
    console.log(gato)
    console.log(tartaruga)
    ```
    
    a) O que vai ser impresso no console?
    nome: 'Juca', idade: 3, raca: 'SRD'
    nome: 'Juba', idade: 3, raca: 'SRD'
    nome: 'Jubo', idade: 3, raca: 'SRD'

    b) O que faz a sintaxe dos três pontos antes do nome de um objeto?

    Conseguimos fazer uma cópia do objeto, ou então
    acessar só algumas das propriedades dele utilizando as
    sintaxes de spread. O mesmo vale para arrays


    3. Leia o código abaixo
    
    ```jsx
    function minhaFuncao(objeto, propriedade) {
    	return objeto[propriedade]
    }
    
    const pessoa = {
      nome: "Caio", 
      idade: 23, 
      backender: false
    }
    
    console.log(minhaFuncao(pessoa, "backender"))
    console.log(minhaFuncao(pessoa, "altura"))
    ```
    a) O que vai ser impresso no console?
    false
     undefined

    b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
     //R; Deu indefinido pois o valor não foi criado para altura .


     1. Resolva os passos a seguir: 
    
    a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente **três apelidos**). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo**:** 
    

    const pessoa = {
   nome: "Amanda",
   apelidos: ["Amandinha", "Mandinha", "Mandi"]
 };

 function imprimir(objeto) {
   console.log(
      `Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}`
   );
  }
    imprimir(pessoa)




        
    
    b) Agora, usando **o operador spread**, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova 
    lista de três apelidos. Depois, chame a função feita no item anterior passando como argumento o novo objeto
    




    
    const pessoa = {
   nome: "Amanda",
   apelidos: ["Amandinha", "Mandinha", "Mandi"]
 };

 function imprimir(objeto) {
   console.log(
      `Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}`
   );
  }
    imprimir(pessoa)
    const novaPessoa = { ...pessoa, apelidos: ["Amandeti aquela que jamais come azeitonas", "Senhora dos mares", "Rainha do beco do Batman"] };

 imprimir(novaPessoa);



 2. Resolva os passos a seguir: 
    
    a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 
    

     const pessoa = {
//   nome: "Victor",
//   idade: 28,
//   profissao: "Estudante"
// };






    b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:
    

    const pessoa = {
    nome: "Victor",
    idade: 28,
    profissao: "Estudante"
 };
    function informacoes(pessoa) {
    return [
    pessoa.nome,
    pessoa.nome.length,
    pessoa.idade,
    pessoa.profissao,
    pessoa.profissao.length
    ];
 }

 console.log(informacoes(pessoa))





3 Resolva os passos a seguir

 
const carrinho = [];


const tomate = {
   nome: "tomate",
  disponibilidade: true
 };

 const uva = {
   nome: "uva",
   disponibilidade: true
};

 const kiwi = {
  nome: "kiwi",
  disponibilidade: true
 };




function adiciona(fruta) {
  carrinho.push(fruta);
 }

 adiciona(tomate);
  adiciona(uva);
 adiciona(kiwi);



console.log(carrinho)
