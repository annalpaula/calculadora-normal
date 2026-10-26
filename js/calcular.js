/* 
operadores aritméticos: 
+ soma 
- subtraçaõ
* multiplicação
/ divisão
++ incremento (soma mais 1)
-- decremento (subtrai menos 1)

operadores de atribuição:
= igual 
+= mais ou igual 
-= menos ou igual 
/= dividindo ou igual 
*= multiplicando ou igual

operadores de sequencia: 
+(serve para concatenar valores
(string ou variaveis))
- (serve para subtrair valores
(string ou variaveis) )

operadores de comparação:
RETORNA TRUE (VERDADEIRO OU FALSE (FALSO)

== (comparar ) valores 
=== (comprar valores e tipo de dado)
!= (diferente) de valores apenas 
!== (comparar a diferença de valores e tipo de dado)

<menor      >maior 
<= menor ou igual >= maior ou igual 
*/


function somar(){
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let operacao = num1 + num2;
    document.getElementById("resultado").innerHTML= operacao;

     const corResultado = document.getElementById("resultado")
    if(operacao < 0){
        corResultado.style.backgroundColor = "red";
    }
    else{
         corResultado.style.backgroundColor = "rgb(59, 13, 62)";
    }
}
    
function subtrair(){
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let operacao = num1 - num2;
    document.getElementById("resultado").innerHTML= operacao;

     const corResultado = document.getElementById("resultado")

    if(operacao < 0){
        corResultado.style.backgroundColor = "red";
    }
    else{
         corResultado.style.backgroundColor = "rgb(59, 13, 62)";
    }
}

function dividir(){
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    if ( num2== 0){
        document.getElementById("resultado").innerHTML = "Erro de divisão por 0"
         document.getElementById("resultado").style.backgroundColor="rgb(255, 231, 10)";
    }


    else{
        let operacao = num1/num2;
        document.getElementById("operacao").innerHTML= operacao;
        
        const corResultado=document.getElementById("operacao");

        if(operacao<0){
            corResultado.style.backgroundColor="red";
        }

        else{
            corResultado.style.backgroundColor="lightgreen";
        }


    }
    



    
}

function multiplicar(){
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    let operacao = num1 * num2;
    document.getElementById("resultado").innerHTML= operacao;

     const corResultado = document.getElementById("resultado")

    if(operacao < 0){
        corResultado.style.backgroundColor = "red";
    }
    else{
         corResultado.style.backgroundColor = "rgb(59, 13, 62)";
    }
}

function limpar(){
    document.getElementById("num1").value="";
    document.getElementById("num2").value="";
    document.getElementById("resultadolll")
    document.getElementById("resultado").style.backgroundColor="rgb(59, 13, 62)";
}
