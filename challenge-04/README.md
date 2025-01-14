# Desafio da semana #4

```js
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/

var isTruthy = function(x){
    x ?  x = true :  x = false;
    return x;
}


///////////////////////////////////////////////////////////////////////////////
// Invoque a função criada acima, passando todos os tipos de valores `falsy`.

1. isTruthy(0);
false

2. isTruthy(-0);
false

3.isTruthy(NaN);
false

4.isTruthy(undefined);
false

5.isTruthy(null);
false

6.isTruthy('');
false


///////////////////////////////////////////////////////////////////////////////
/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
?

1.isTruthy(10)
true

2.isTruthy('oi');
true

3.isTruthy(array = [10, 20, 30]);
true

4.isTruthy(objeto = {Nome: `objeto`});
true

5.isTruthy(function() {});
true

6.isTruthy(10 * 20);
true

7. isTruthy(10 + 20);
true

8.isTruthy(`pedro` + 'Augusto');
true

9...

///////////////////////////////////////////////////////////////////////////////
/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/

var carro = {
    marca: 'Land Rover',
    modelo: 'Evoque',
    placa: 'RGE1234',
    ano: 2022,
    cor: 'Preto',
    quantasPortas: 4,
    assentos: 5,
    quantidadePessoas: 0
}


///////////////////////////////////////////////////////////////////////////////
/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/

carro.mudaCor = function(cor){
    carro.cor = cor;
}


///////////////////////////////////////////////////////////////////////////////
/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/

carro.obterCor = function(){
    return carro.cor;
}


///////////////////////////////////////////////////////////////////////////////
/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/

carro.obterModelo = function(){
    return carro.modelo;
}


///////////////////////////////////////////////////////////////////////////////
/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/

carro.obterMarca = function(){
    return carro.marca;
}


///////////////////////////////////////////////////////////////////////////////
/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/

carro.obterMarcaModelo = function(){
    return 'Esse carro é uma ' + carro.marca + ' ' + carro.modelo;
}


///////////////////////////////////////////////////////////////////////////////
/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/

carro.addPersons = function(x){

    if(x >= 6){
        return "O carro só tem 5 assentos";
    }else if(x >= (6 - carro.quantidadePessoas) && (5 - carro.quantidadePessoas) != 1){
            return "Restam apenas " + (5 - carro.quantidadePessoas) + " assentos";
        }else if((5 - carro.quantidadePessoas) == 1){
            return "Restam apenas " + (5 - carro.quantidadePessoas) + " assento";
        }else{
            carro.quantidadePessoas += x;
            return "Já temos " + carro.quantidadePessoas + " dentro do carro";
    }
}


///////////////////////////////////////////////////////////////////////////////
/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
?

// Mude a cor do carro para vermelho.
?

carro.mudaCor('vermelho');


// E agora, qual a cor do carro?
?

carro.cor
'vermelho'


// Mude a cor do carro para verde musgo.
?

carro.mudaCor('verde musgo');


// E agora, qual a cor do carro?
?

carro.cor
'verde musgo'


// Qual a marca e modelo do carro?
?

carro.obterMarcaModelo()
'Esse carro é uma Land Rover Evoque'

// Adicione 2 pessoas no carro.
?

carro.addPersons(2)
'Já temos 2 pessoas no carro!'


// Adicione mais 4 pessoas no carro.
?

carro.addPersons(4)
'Restam apenas 3 assentos'


// Faça o carro encher.
?

carro.addPersons(3)
'Já temos 5 dentro do carro'


// Tire 4 pessoas do carro.
?

carro.addPersons(-4)
'Já temos 1 dentro do carro'


// Adicione 10 pessoas no carro.
?

carro.addPersons(10)
'O carro só tem 5 assentos'


// Quantas pessoas temos no carro?
?

carro.quantidadePessoas;
1


```
