/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
// ?

var championship = `PremiereLeague`;
undefined
console.log(`Eu escolhi a ${championship}`);



//////////////////////////////////////////////////////////////////////////////
/*Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
// ?


var teams = [`Arsenal`, `City`, `Tottenham`, `Brighton`, `Chelsea`];
console.log( 'Times que estão participando do campeonato:', teams );

//////////////////////////////////////////////////////////////////////////////
/*Crie uma função chamada `showTeamPosition` com as seguintes características:
    - A função deve receber um número por parâmetro;
    - A função deve retornar a frase:
    "O time que está em [POSIÇÃO]º lugar é o [NOME DO TIME].";
    - Onde [POSIÇÃO] é o valor passado por parâmetro e [NOME DO TIME] é o time
    que está nessa posição no array criado acima com os nomes dos times.
    --------------
    Dica: lembre-se que arrays começam no índice zero, então a posição passada
    deve ser sempre um número a mais que o índice do array ;)
    --------------
    - A função só deve retornar a frase acima somente se o time estiver entre
    os 5 primeiros.
    - Se não houver time para a posição passada, deve retornar a mensagem:
    "Não temos a informação do time que está nessa posição."
*/
// ?

function showTeamPosition(x){
    switch(x){
        case 1:
            console.log(`O time que está em ${x--}º lugar é o ${teams[x]}`);
            break;
        case 2:
            console.log(`O time que está em ${x--}º lugar é o ${teams[x]}`);
            break;
        case 3:
            console.log(`O time que está em ${x--}º lugar é o ${teams[x]}`);
            break;
        case 4:
            console.log(`O time que está em ${x--}º lugar é o ${teams[x]}`);
            break;
        case 5:
            console.log(`O time que está em ${x--}º lugar é o ${teams[x]}`);
            break;
        default:
            console.log(`Não temos a informação do time que está nessa posição`);
    }
}



//////////////////////////////////////////////////////////////////////////////
/*Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
// ?

showTeamPosition(1);
O time que está em 1º lugar é o Arsenal

showTeamPosition(3);
O time que está em 3º lugar é o Tottenham

showTeamPosition(5);
O time que está em 5º lugar é o Chelsea

showTeamPosition(7);
Não temos a informação do time que está nessa posição



//////////////////////////////////////////////////////////////////////////////
/*Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
// ?

while(number <= 30){
    console.log(`O numero é ${number}`);
    number++;
}



//////////////////////////////////////////////////////////////////////////////
/*Crie uma função chamada `convertToHex`, com as seguintes características:
    - A função recebe uma cor por parâmetro, do tipo string. Exemplo: "red";
    - Escolha 5 cores que serão convertidas do nome da cor para o seu
    equivalente hexadecimal (pode ser qualquer tom);
    - Usando a estrutura switch, verifique se a cor passada por parâmetro é
    algum hexa escolhido. Se for, retorne a frase:
    "O hexadecimal para a cor [COR] é [HEXADECIMAL].";
    - Se a cor passada por parâmetro não estiver entre as selecionadas, mostre
    a frase:
    "Não temos o equivalente hexadecimal para [COR]."
*/
// ?

function convertToHex(cor){
    switch(cor){
        case 'vermelho':
            console.log(`O hexadecimal para a cor ${cor} é #FF0000`);
            break;
        case 'azul':
            console.log(`O hexadecimal para a cor ${cor} é #0000FF`);
            break;
        case 'amarelo':
            console.log(`O hexadecimal para a cor ${cor} é #FFFF00`);
            break;
        case 'verde':
            console.log(`O hexadecimal para a cor ${cor} é #00FF00`);
            break;
        case 'preto':
            console.log(`O hexadecimal para a cor ${cor} é #000000`);
            break;
        case 'aqua':
            console.log(`O hexadecimal para a cor ${cor} é #00FFFF`);
            break;
        case 'roxo':
            console.log(`O hexadecimal para a cor ${cor} é #A020F0`);
            break;
        default:
            console.log(`Não temos o equivalente hexadecimal para ${cor}`);
    }

}



//////////////////////////////////////////////////////////////////////////////
/*Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
// ?

convertToHex('vermelho')
O hexadecimal para a cor vermelho é #FF0000

convertToHex('azul');
O hexadecimal para a cor azul é #0000FF

convertToHex('amarelo'); 
O hexadecimal para a cor amarelo é #FFFF00

convertToHex('verde');
O hexadecimal para a cor verde é #00FF00

convertToHex('preto')
O hexadecimal para a cor preto é #000000

convertToHex('aqua')
O hexadecimal para a cor aqua é #00FFFF

convertToHex('roxo');
O hexadecimal para a cor roxo é #A020F0

cor = 'roxo'
convertToHex(cor);
O hexadecimal para a cor ${cor} é #A020F0`

