/*
Declare uma variável chamada `sum` e atribua a ela uma função chamada
`calculateSum`. A função deve receber dois parâmetros e retornar a soma
desses parâmetros.
*/

var sum = function calculateSum(x, y){
    return console.log((x + y));
}



/*
Invoque a função criada acima, passando dois números que serão somados, e mostre
o resultado no console, com a frase:
"A soma de [VALOR 1] e [VALOR2] é igual a [RESULTADO]."
*/

sum(10, 2);
12



/*
Mostre no console o nome da função criada acima, com a frase:
"O nome da função que faz a soma é [NOME DA FUNÇÃO]."
*/

console.log(`O nome da função é ${sum.name}`);
O nome da função é calculateSum



/*
Crie uma função literal chamada `showName`. Essa função deve retornar o
seu nome.
*/

function showName(){
    return "Pedro Augusto";
}



/*
Declare uma variável chamada `varShowName` que recebe a função criada acima.
*/

var varShowName = showName;



/*
Usando a variável criada acima, mostre no console o nome e o retorno da função
atribuída a ela, com a seguinte frase:
"A função [NOME DA FUNÇÃO] retorna [RETORNO DA FUNÇÃO]."
*/
// ?

console.log(`A função ${varShowName.name} retorna ${showName()}.`);
A função showName retorna Pedro Augusto.



/*
Crie uma função literal chamada `calculator`, que funcione assim:
- A função deve receber um parâmetro que dirá qual operação matemática ela
vai efetuar. Será uma string com os valores `+`, `-`, `*`, `/` ou `%`;
- Essa função deve retornar uma segunda função que fará o seguinte:
  - Essa segunda função deve receber dois parâmetros;
  - Esses dois parâmetros serão os operandos usados na operação matemática;
  - O retorno dessa segunda função é a operação matemática completa, com a frase:
  "Resultado da operação: [NUMERO1] [OPERADOR] [NUMERO2] = [RESULTADO]."
  - Se o operador não for válido, retornar a frase:
  "Operação inválida."
*/

function calculator(x){
    return function opMatematica(a, b){
        var resultado;
        switch(x) {
            case `+` :
                resultado =a + b;  
                break;
            case `-` :
                resultado = a - b;  
                break;
            case `*` : 
                resultado = a * b;              
                break;
            case `/` : 
                resultado = a / b; 
                break;
            case `%` : 
                resultado = a % b; 
                break;
            default: 
                console.log("Operação inválida.");
        }
        return console.log(`Resultado da operação: ${a} ${x} ${b} = ${resultado}.`);
    };
}

/*
Declare uma variável chamada `sum`, que receberá a função acima, passando como
parâmetro o operador de soma.
*/

var sum = calculator( `+` );



/*
Agora `sum` é uma função. Mostre no console a soma de dois números, usando ela.
*/

console.log( sum (10,15));
Resultado da operação: 10 + 15 = 25.



/*
Agora, declare algumas variáveis com os nomes `subtraction`, `multiplication`,
`division` e `mod`, e atribua a elas a função `calculator`, passando o operador
correto por parâmetro para cada uma delas.
*/

var subtraction = calculator(`-`); 
var multiplication = calculator(`*`);
var mod = calculator(`%`);
var division = calculator(`/`);


/*
Faça uma operação com cada uma das funções criadas acima, mostrando o resultado
no console.
*/
console.log(subtraction(10,10));
Resultado da operação: 10 - 10 = 0.

console.log(multiplication(10,10));
Resultado da operação: 10 * 10 = 100.

console.log(mod(10,10));
Resultado da operação: 10 % 10 = 0.

console.log(division(10,10));
Resultado da operação: 10 / 10 = 1.
