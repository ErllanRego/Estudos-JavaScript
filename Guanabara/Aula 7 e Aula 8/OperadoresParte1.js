/* 
----ALGUNS OPERADORES DO JAVASCRIPT---- 

ARITMÉTICOS--> 
Todos esses abaixo são operadores binários, ou seja, precisam de 2 números.

+ -->Soma

-  --> Subtração

* --> Multiplicação

/ --> Divisão

% -->  Resto da divisão inteira( Divisão que não se usa vírgula).
        Na divisão inteira, a conta acaba antes que seja necessário utilizar vírgula, esse operador pega o resto desta conta

** --> Potência ( 5**2= 25, ou seja, é equivalente a 5 ao quadrado).
        Este operador surgiu nas últimas versões do ecmascript

*/

/*----PRECEDÊNCIA DE OPERADORES----
        Assim como na matemática, divisão e multiplicação tem prioridade, porém a prioridade máxima é de quem está no parenteses.

    Ordem de precedência-->
    1º ()
    2º **
    3º *  /  %  -->No caso de estarem no mesmo nível, se faz quem aparecer primeiro
    4º +  -
*/

var a = 5+3

var b = a%5 //3

var c = 5*b**2 //45

var d = 10 - a/2 //6

var e = 6*2/d //2

var f = b%e+4/e //3

//--------------------------------------------------


//----Simplificando

var n =3

        //Forma simplificada para n=n+4
            n+=4 

        //Serve para todos
            n-=5
            n*=4
            n/=2
            n**=2
            n%=5
       
//---------------------------------------------------------------


//INCREMENTO --->


    //Usando o n++ ou n-- ele retira ou soma uma unidade da variável
var n = 10

n++ // n= 11

n-- //9

