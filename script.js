
// Para cargar numero 1 y numero 2 en pantalla
function cargar_elemento(boton) {

   var cont = 0;
   var cont = cont + document.getElementById("pantalla").innerHTML.length;
  
   if (cont <= 14) {  //Validando para que solo se pueda ingresar 15 digitos en la calculadora

      // Solo asigno a num_boton el id boton_1 por ejemplo
      var num_boton = document.getElementById(boton.id); // document  es una clase   getElementById es un metodo
      // let num_boton se guarda por ahora el id = boton_N (dependiendo cual se aplasta)

      // llamo al id pantalla para que guarde mas adelante un valor 
      var pantalla = document.getElementById("pantalla");

      //El id boton_1 que se ingreso en linea 10 pido lo que tiene como texto con innerHTML
      // y lo guardo en num_en_texto
      var num_en_texto = document.createTextNode(num_boton.innerHTML); //innerHTML dice tu tienes este id boton_1 quiero ver el texto que tiene esta etiqueta que es 1

      //Cargo mi primer valor en pantalla cuando aplasto un boton
      pantalla.appendChild(num_en_texto);
   }
}

/*Funcion para obteneer el primer valor y el operador */
function obtener_operador(operador) {

   // Guarda en  "primer_valor" el object HTML mostrado en pantalla que aun no se muestra como string
   let primer_valor = document.getElementById("pantalla");
   document.getElementById("valor_1").innerHTML = primer_valor.innerHTML;
   // en linea 31 "primer_valor" es un object HTML que con .innerHTML obtenemos el string que contiene por su id

   /* Guarda en "signo" el operador por medio del id del index.html*/
   // getElementById = optiene la etiqueta
   let signo = document.getElementById(operador.id);  //en "signo" se guarda el id "boton_suma" por ejemplo
   document.getElementById("operador").innerHTML = signo.innerHTML; //envia el id "boton_suma" a "signo.innerHTML" donde se tiene su string + y este se pasa a "operador"

   //Una ves optengo el "valor_1" y "operador" limpio la pantalla 
   // para mas abajo poder ingresar sin problemas "valor_2" como un nuevo valor en pantalla
   document.getElementById("pantalla").innerHTML = "";
}


function obtener_resultado(igual) {

   /*Paso 1: obtener el valor_1
     Paso 2: obtener el operador
     Paso 3: obtener el valor_2
     Paso 4: obtener el igual
     Paso 5: hacer un if else que compare el "operador" 
     Paso 6  obtener el resultado de la operacion
     Paso 7: presentar el resultado en la pantalla
     Paso 8: borrar los espacios de valor_1, operacion, valor_2, resultado y pantalla
   */

   //Paso 1
   let num_1_obtenido = document.getElementById("valor_1");

   //Paso 2
   let operador = document.getElementById('operador').innerHTML;

   //Paso 3
   let num_2_obtenido = document.getElementById("pantalla");
   document.getElementById("valor_2").innerHTML = num_2_obtenido.innerHTML;

   //Paso 4
   let resultado = document.getElementById(igual.id);
   document.getElementById("resultado").innerHTML = resultado.innerHTML

   //Paso 5
   if (operador == '+') {
      //Paso 6
      let suma = parseFloat(num_1_obtenido.innerHTML) + parseFloat(num_2_obtenido.innerHTML);
      //Paso 7
      document.getElementById("pantalla").innerHTML = suma;

   } else if (operador == '-') {
      //Paso 6
      let resta = parseFloat(num_1_obtenido.innerHTML) - parseFloat(num_2_obtenido.innerHTML);
      //Paso 7
      document.getElementById("pantalla").innerHTML = resta;

   } else if (operador == '*') {
      //Paso 6
      let multi = parseFloat(num_1_obtenido.innerHTML) * parseFloat(num_2_obtenido.innerHTML);
      //Paso 7
      document.getElementById("pantalla").innerHTML = multi;

   } else if (operador == '/') {

      // Validando para que no se pueda dividir un numero entre 0
      if (parseFloat(num_2_obtenido.innerHTML) == 0) {
         document.getElementById("pantalla").innerHTML = "No es divisible";
      } else {
         //Paso 6
         let divi = parseFloat(num_1_obtenido.innerHTML) / parseFloat(num_2_obtenido.innerHTML);
         //Paso 7
         document.getElementById("pantalla").innerHTML = divi;
      }

   } else {
      document.getElementById("pantalla").innerHTML = "Syntax ERROR";
   }
}

//Paso 8
//Funcion del boton CE que limpia la pantalla
function limpiar_elementos() {
   document.getElementById('valor_1').innerHTML = '';
   document.getElementById('operador').innerHTML = '';
   document.getElementById('valor_2').innerHTML = '';
   document.getElementById('resultado').innerHTML = '';
   document.getElementById('pantalla').innerHTML = '';
}