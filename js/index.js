/*SUMATORIOS
OPCION1 - SUMA 1
OPCION2 - SUMA 0
OPCION 3 - SUMA 2

Si puntuacion = 0 - versátil
Si puntuacion <= 5 - guardeiro
Si puntuacion > 5 - pasador 

- Crear dos variables guardiero y pasador, inicializadas a 0
- Leer todos los campos del form
- Para cada pregunta:
        - Ver qué respuesta se ha marcado
        - Sumar +1 a guardiero o pasador según la respuesta
- Cuando ya tienes las puntuaciones, ver cuál ha obtenido más puntos
- Presentar el resultado (un mensaje, una redirección a otra página...)

para asignar una función a un button, puedes onClick=mi_funcion()

decir_quien_soy()
  campos = leer_campos()
  por cada campo en campos:
    asignar_puntuacion()

  si guardiero > pasador:
    presentar_guardiero()
  si no:
    presentar pasador()



let cuestionario = document.getElementById("guessMyGame");

cuestionario.addEventListener("submit", (puntuacion) => {
  puntuacion.preventDefault();

    let amigos = document.getElementsByName (amigos)
    let puntuacion = document.getElementById (opcion1 | opcion2 | opcion3)
    // 


    const opcion1 = 1
    const opcion2 = 0
    const opcion3 = 2
    
 

        if (puntuacion > 5)
            alert("Eres versátil")
        else if (puntuacion <= 5)
            alert("Eres guardiero")
        else {
            alert("Eres= versátil")
        }
)} */

/*Explico por aquí mi idea: es hacer un cuestionario que puntúe las respuestas del usuario y, en función de lo obtenido te catalogue como guardiero, pasador o versátil en bjj.*/

const OPCIONGUARDIERO = 1
const OPCIONPASADOR = 2
const OPCIONVERSATIL = 0

let resultado = 0


let amigos = prompt("Cuando quedas con amigos lejos, prefieres... A) Ir andando tranquilamente. B) O me llevan en coche o vamos en taxi, pero andando jamás. C) Haré lo que hagan los demás para no destacar.")
if (amigos == "a") {
  resultado = + OPCIONPASADOR
}
else if (amigos == "b") {
  resultado = + OPCIONGUARDIERO
}

else if (amigos == "c") {
  resultado = OPCIONVERSATIL
}

else (alert("Para responder tienes que escribir A, B o C, no se seas hipoglúcido. "))

let comida = prompt("Es Navidad, no hay más entrenamientos hasta después de las fiestas y la mesa está llena de tu comida preferida. Tú... A) Como sin remordimientos, porque la vida es una. B) Algún capricho hay que darse, pero sin pasarse que hay que mantenerse. C) Yo tengo mi pollo cocido en la nevera, que hay que rendir en todos los entrenamientos.")
if (comida == "a") {
  resultado = + OPCIONPASADOR
}
else if (comida == "b") {
  resultado = + OPCIONVERSATIL
}
else if (comida == "c") {
  resultado = + OPCIONGUARDIERO
}

else (alert("Para responder tienes que escribir A, B o C, no se seas hipoglúcido. "))

let suma = 

console.log(suma)
