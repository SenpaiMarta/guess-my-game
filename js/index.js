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
/*Para añadir funcionalidades, vamos a recopilar los datos del usuario para crear una encuesta que muestre los resultados.*/
let resultadosUsuarios = []

class Usuario {
  constructor (apodo, escuela, edad, ciudad, pais) {
    this.apodo = apodo;
    this. escuela = escuela;
    this.edad = edad;
    this.ciudad=ciudad;
    this.pais=pais
  }
}


/*Definimos la función para leer respuestas*/
function leerRespuesta (pregunta) { 
  do {
    respuesta = prompt(pregunta).toLowerCase()
    if (respuesta !== "a" && respuesta !=="b" && respuesta !=="c") {
      alert("Para responder tienes que escribir A, B o C, no se seas hipoglúcido.")
    }
  }
  while (respuesta !== "a" && respuesta !=="b" && respuesta !=="c")


  return respuesta
}

const OPCIONGUARDIERO = 1
const OPCIONPASADOR = 2
const OPCIONVERSATIL = 0

let continuar;
do {
  resultado = 0;

pregunta1 = "Cuando quedas con amigos lejos, prefieres... A) Ir andando tranquilamente. B) O me llevan en coche o vamos en taxi, pero andando jamás. C) Haré lo que hagan los demás para no destacar."
respuesta1 = leerRespuesta(pregunta1) 
  if (respuesta1 == "a") {
    resultado += OPCIONPASADOR
    console.log("tu respuesta a la pregunta 1 suma " + OPCIONPASADOR)
  }
  else if (respuesta1 == "b") {
    resultado += OPCIONGUARDIERO
    console.log("tu respuesta a la pregunta 1 suma " + OPCIONGUARDIERO)
  }
  else if (respuesta1 == "c") {
    resultado += OPCIONVERSATIL
    console.log("tu respuesta a la pregunta 1 suma " + OPCIONVERSATIL)
  }

pregunta2 = "Es Navidad, no hay más entrenamientos hasta después de las fiestas y la mesa está llena de tu comida preferida. Tú... A) Como sin remordimientos, porque la vida es una. B) Algún capricho hay que darse, pero sin pasarse que hay que mantenerse. C) Yo tengo mi pollo cocido en la nevera, que hay que rendir en todos los entrenamientos."
respuesta2 = leerRespuesta(pregunta2) 

  if (respuesta2 == "a") {
    resultado += OPCIONPASADOR
    console.log("tu respuesta a la pregunta 2 suma " + OPCIONPASADOR)
  }
  else if (respuesta2 == "b") {
    resultado += OPCIONVERSATIL
    console.log("tu respuesta a la pregunta 2 suma " + OPCIONVERSATIL)
  }
  else if (respuesta2 == "c") {
    resultado += OPCIONGUARDIERO
    console.log("tu respuesta a la pregunta 2 suma " + OPCIONGUARDIERO)
  }

/*SUMA DE RESULTADOS*/
  if (resultado > 2) {
  alert("Eres pasador")
  console.log("la suma es " + resultado + ", así que eres pasador en bjj")
  }
  else if (resultado <= 2 && resultado != 0) {
  alert("Eres guardiero")
  console.log("la suma es " + resultado+ ", así que eres guardiero en bjj")
  }

  else if (resultado === 0) {
  alert("Eres versátil")
  console.log("la suma es " + resultado + ", así que eres versátil en bjj")
  }

/*ACUMULAMOS DATOS DE LOS USUARIOS*/
let categoria = (resultado > 2) ? "Pasador" : (resultado <= 2 && resultado != 0) ? "Guardiero" : "Versátil"

let usuario = new Usuario(
  prompt("¿Nos dices tu apodo o nombre?"),
  prompt("¿En qué equipo o escuela entrenas?"),
  prompt("¿Qué edad tienes?"),
  prompt("Tu ciudad es..."),
  prompt("...del país..."),
  categoria
);

resultadosUsuarios.push(usuario)


/*BUCLE PARA VOLVER A EMPEZAR*/
  continuar = prompt("¿Quieres probar de nuevo? (Sí/No)")
} while (continuar.toLowerCase() === "si")

/*Mostrar el promedio de resultados a los usuarios*/
calcularPromedioResultados(resultadosUsuarios)

function calcularPromedioResultados(resultados) {
  if (resultados.length === 0) {
    console.log("Lo sentimos, no hay suficientes datos para poder hacer un porcentaje. Sigue luchando y nos vemos otro día.")
    return;
  }

/*Obtenemos el número total de personas que han completado el quiz*/
let totalUsuarios = resultadosUsuarios.length
console.log("Total de usuarios:", totalUsuarios)

/*Filtramos por categoría*/
let usuariosGuardieros = resultados.filter(usuario => usuario.categoria === 'Guardiero')
let usuariosPasadores = resultados.filter(usuario => usuario.categoria === 'Pasador')
let usuariosVersatiles = resultados.filter(usuario => usuario.categoria === 'Versátil')
console.log("Usuarios Guardieros:", usuariosGuardieros)
console.log("Usuarios Pasadores:", usuariosPasadores)
console.log("Usuarios Versátiles:", usuariosVersatiles)

/*Medimos lalongitud en cada categoría*/
let cantidadGuardieros = usuariosGuardieros.length
let cantidadPasadores = usuariosPasadores.length
let cantidadVersatiles = usuariosVersatiles.length
console.log("Cantidad Guardieros:", cantidadGuardieros)
console.log("Cantidad Pasadores:", cantidadPasadores)
console.log("Cantidad Versátiles:", cantidadVersatiles)


/*Calculamos el porcentaje en cada uno de los resultados*/
let porcentajeGuardieros = (cantidadGuardieros / totalUsuarios) * 100
let porcentajePasadores = (cantidadPasadores / totalUsuarios) * 100
let porcentajeVersatiles = (cantidadVersatiles / totalUsuarios) * 100

console.log("Porcentaje de Guardieros: " + porcentajeGuardieros.toFixed(2) + "%")
console.log("Porcentaje de Pasadores: " + porcentajePasadores.toFixed(2) + "%")
console.log("Porcentaje de Versátiles: " + porcentajeVersatiles.toFixed(2) + "%")
}
