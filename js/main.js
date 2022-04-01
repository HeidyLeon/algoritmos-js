function suma(){
    var a;
 var b;
 var resultado;
 a = parseInt(prompt("ingrese el primer valor "));
 b = parseInt(prompt("ingrese el segundo valor"));
 resultado= a + b;

 alert("El resultado de la suma es: "+ resultado);
}

function resta (){
    var a;
    var b;
    var resultado;
    a=parseInt(prompt("Por favor ingrese el primer valor "));
    b=parseInt(prompt("Por favor ingrese el segundo valor"));
    resultado=a-b;

    alert("El resultado de la resta es: "+resultado);
}

function multiplicación () {
    var a;
    var b;
    var resultado;
    a=parseInt(prompt("Por favor ingrese el primer valor "));
    b=parseInt(prompt("Por favor ingrese el segundo valor"));
    resultado=a*b;
    alert("El resultado de la multiplicación es: "+resultado);
}

function División () {
    var a;
    var b;
    var resultado;
    a=parseInt(prompt("Por favor ingrese el primer valor "));
    b=parseInt(prompt("Por favor ingrese el segundo valor"));
    resultado=a/b;
    alert("El resultado de la división es: "+resultado);
}

function Mayor2 (){
    var n1;
    var n2;
    var n3;
    var resultado;
    n1=parseInt(prompt("Por favor ingrese el primer valor"));
    n2=parseInt(prompt("Por favor ingrese el segundo valor"));
    if(n1 > n2 ){
    resultado=n1;
    } 
    else {
    resultado=n2
}

    alert("El número mayor es: " +resultado);
}



function Mayor3 () {
    var n1;
    var n2;
    var n3;
    var resultado;
    n1=parseInt(prompt("Por favor ingrese el primer valor"));
    n2=parseInt(prompt("Por favor ingrese el segundo valor"));
    n3=parseInt(prompt("Por favor ingrese el tercer valor"));
    
    if(n1 > n2 && n1 > n3) {
        resultado = n1;
    }
    else if (n2 > n1 && n2 > n3) {
        resultado = n2;
    }
    else {
        resultado = n3;
    }
    
    alert("El número mayor es:  " +resultado);
}

function Par () {
    var numero = 0;

    numero = prompt('Indique un número: ', '');
    
    if((numero % 2) == 0){
      alert(numero + ' es par');
    }else{
      alert(numero + ' es impar');
    }
}


function Cuadrado () {
    var n1;
    var resultado;
    n1=parseFloat(prompt("Por favor ingrese el primer valor"));
    resultado=n1*n1;
    alert("El numero cuadrado es: " +resultado);
}

function Triángulo () {
    var n1;
    var n2;
    var resultado;1
    n1=parseInt(prompt("Por favor ingrese el valor de la base"));
    n2=parseInt(prompt("Por favor ingrese un valor para la altura"));
    resultado=(n1*n2)/2;
    alert("El área del triángulo es: "+resultado);
}

function Centimetros () {
    var num1;
    var resultado;
    n1=parseInt(prompt("Por favor ingrese un valor en metros"));
    resultado=(n1*100);
    alert("El valor en cm es: "+resultado);
}

function Año () {
    var n1;
    var n2;
    var resultado;
    n1=parseInt(prompt("Por favor ingrese el año actual"));
    n2=parseInt(prompt("Por favor ingrese su edad"));
    resultado=n1-n2;
alert("Su año de nacimiento es: "+resultado);
}

function Ganancia () {
    var c;
    var a;
    var g;
    var t;
    
    c=parseInt(prompt("Por favor ingrese el valor de su capital invertido"));
    a=parseInt(prompt("Por favor ingrese una cantidad de años"));
    g=(c*20.4)*a;
    t=(c+1.7);
    alert("El valor de la ganacia es: "+g);
    alert("El total es: "+t);
}

function Promedio () {
 var N1;
 var N2;
 var N3;
 var N4;
 var N5;
 var NF;
 N1=parseInt(prompt("Por favor ingrese la primera nota"));
 N2=parseInt(prompt("Por favor ingrese la segunda nota"));
 N3=parseInt(prompt("Por favor ingrese la tercera nota"));
 N4=parseInt(prompt("Por favor ingrese la cuarta nota"));
 N5=parseInt(prompt("Por favor ingrese la quinta nota"));
 NF=(N1+N2+N3+N4+N5)/5
 if (NF>=3.0) {
     alert("Estudiante aprobado: "+NF)
 } else {
     NF<2.9
     alert("Estudiante reprobado: "+NF)
 }
}

function Descuento () {
    var k;
    var T;
    var Ds;
    k=parseFloat(prompt("Por favor ingrese el total de kilos de Manzanas"));
    T=k*4.500;
    if(k>=3.0 && k<=5.0) {
        Ds=(T-(T*0.1))
    }
    else if (k>=6.0 && k<=10) {
        Ds=(T-(T*0.15))

    }
    else if (k>=10){
        Ds=(T-(T*0.2))
    }
    
    alert("El total de kilos  es de:  " +k);
    alert("Su total con descuento es de:  "+Ds)

}
