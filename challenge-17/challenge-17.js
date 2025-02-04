/*
1. Envolva todo o conteúdo desse desafio em uma IIFE.
2. Adicione a diretiva 'use strict';
3. Crie um arquivo index.html e adicione esse script à ele.
*/

/*
Em todos os exercícios desse desafio, nós vamos utilizar expressões
regulares! Para isso, iremos usar o texto abaixo. Coloque-o em uma
variável chamada `text`:
"Manuel Marques de Sousa, Conde de Porto Alegre (Rio Grande, 13 de junho de 1804 – Rio de Janeiro, 18 de julho de 1875), apelidado de "O Centauro de Luvas", foi um militar, político, abolicionista e monarquista brasileiro."
*/
// ?

/*
Vamos começar com umas brincadeiras fáceis :D
Troque o nome "Manuel Marques de Sousa" pelo seu nome, e mostre o resultado
no console:
*/
console.log( 'Adicionando seu nome no texto:' );
// ?

var text = "Manuel Marques de Sousa, Conde de Porto Alegre (Rio Grande, 13 de junho de 1804 – Rio de Janeiro, 18 de julho de 1875), apelidado de 'O Centauro de Luvas', foi um militar, político, abolicionista e monarquista brasileiro.";
text = text.replace('Manuel Marques de Sousa', 'Pedro Augusto Adão Silva')
console.log('Adicionando seu nome no texto:', text);    

/*
Agora, substitua a palavra "brasileiro" por sua cidade natal e mostre no
console.
Ex: Se você for da São Paulo, substitua por "paulista".
*/
console.log( '\nTrocando naturalidade:' );
// ?

text = text.replace(/brasileiro/g, 'Uberlandense');
console.log('\nTrocando naturalidade:' ,text);

/*
Substitua todos os números por um traço `-`. Cada caractere de número deve
ser um traço. Mostre o resultado no console:
*/
console.log( '\nTrocando números por -:' );
// ?

text = text.replace(/\d/g, '-');
console.log('Trocando números por traços: ', text);

/*
Substitua todas as letras (somente letras) de "D" maiúsculo até "h"
minúsculo por "0" (número zero). Mostre o resultado no console:
*/
console.log( '\nTrocando de "D" a "h" por "0":' );
// ?

  text = text.replace(/[D a h]/g, '0');
  console.log('Trocando de "D" a "h" por "0": ', text);

/*
Substitua todos os "A" (maiúsculos ou minúsculos) por "4".
Mostre o resultado no console:
*/
console.log( '\nTrocando "A" e "a" por "4":' );
// ?

  console.log('Trocando de "A" e "a" por "": ', text.replace(/[Aa]/g, '4'));


/*
Substitua a frase "O Centauro de Luvas", deixando-a em caixa alta, usando
o método `toUpperCase()`. Mostre o resultado no console:
*/
console.log( '\n"O Centauro de Luvas" em caixa alta:' );
// ?

  console.log('"O Centauro de Luvas" em caixa alta: ',
    text = text.replace(/O Centauro de Luvas/g, function(frase){
      return frase.toUpperCase();
  }));

/*
Agora iremos substituir as datas no formato "13 de junho de 1804" para
"13/06/1804". A primeira coisa a fazer é criar uma função chamada
`getMonthNumber`, que irá receber um parâmetro (será o nome do mês) e deverá
retornar o número correspondente a esse mês.
Ex: Se o usuário entrar com "março", deve retornar "03" (em string mesmo).
Números com menos de dois dígitos devem ter um zero na frente.
Crie então a função e mostre no console os retornos para os meses de março,
setembro e dezembro.
Use um console.log para cada mês, usando a frase:
"O mês de [NOME DO MÊS] é representado pelo número [NÚMERO DO MÊS]."
*/
console.log( '\nMeses representados por números:' );
// ?

  function getMonthNumber(nameMonth){
      var numberMonth;
      switch(nameMonth){
          case 'Janeiro':
               numberMonth = '01'; 
          break;
          case 'Fevereiro':
               numberMonth = '02';
          break;
          case 'Marco':
               numberMonth = '03';
          break;
          case 'Abril':
               numberMonth = '04';
          break;
          case 'Maio':
               numberMonth = '05';    
          break;
          case 'Junho':
               numberMonth = '06';
          break;
          case 'Julho':
               numberMonth = '07';
          break;
          case 'Agosto':
               numberMonth = '08';
          break;
          case 'Setembro':
               numberMonth = '09';
          break;
          case 'Outubro':
              numberMonth = '10';    
          break;
          case 'Novembro':
              numberMonth = '11';    
          break;
          case 'Dezembro':
              numberMonth = '12';    
          break;           
      }

    return numberMonth;
  };

console.log('O mês de [Janeiro] é representado pelo número ', getMonthNumber('Janeiro'));
console.log('O mês de [Fevereiro] é representado pelo número ', getMonthNumber('Fevereiro'));
console.log('O mês de [Marco] é representado pelo número ', getMonthNumber('Marco'));
console.log('O mês de [Abril] é representado pelo número ', getMonthNumber('Abril'));
console.log('O mês de [Maio] é representado pelo número ', getMonthNumber('Maio'));
console.log('O mês de [Junho] é representado pelo número ', getMonthNumber('Junho'));
console.log('O mês de [Julho] é representado pelo número ', getMonthNumber('Julho'));
console.log('O mês de [Agosto] é representado pelo número ', getMonthNumber('Agosto'));
console.log('O mês de [Setembro] é representado pelo número ', getMonthNumber('Setembro'));
console.log('O mês de [Outubro] é representado pelo número ', getMonthNumber('Outubro'));
console.log('O mês de [Novembro] é representado pelo número ', getMonthNumber('Novembro'));
console.log('O mês de [Dezembro] é representado pelo número ', getMonthNumber('Dezembro'));

/*
Agora, declare uma variável chamada `regexDate` que irá receber a expressão
regular que irá fazer o match com as datas. Crie grupos de captura para o
dia, o mês e o ano. Para os meses, você pode fazer o match somente com os
meses que estão no texto, não precisa adicionar todos.
Com o que vimos até agora, você consegue fazer :D
Mostre a regex no console.
*/
console.log( '\nRegex que vai fazer o match com as datas do texto:' );
// ?

var regexDate = /([0-9][0-9]) de (junho|julho) de ([0-9][0-9][0-9][0-9])/g;

/*
Agora crie a função que irá fazer o replace dos dados. A função será chamada
de `replaceDate`. Ela deve retornar a data no formato:
"[DIA]/[MÊS]/[ANO]"
Após criar a função, faça o replace das datas no texto, mostrando no
console o resultado.
*/
console.log( '\nReplace de datas:' );
// ?

function replaceDate(regex, day, month, year, de){
    return `${day}/${getMonthNumber(month)}/${year}`;
}console.log( text.replace(regexDate, replaceDate));
