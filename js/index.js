/*Explico por aquí mi idea: es hacer un cuestionario que puntúe las respuestas del usuario y, en función de lo obtenido te catalogue como guardiero, pasador o versátil en bjj.*/
/*Para añadir funcionalidades de cara a la segunda entrega, vamos a recopilar los datos del usuario para crear datos estadísticos que muestren los resultados de los usuarios que han cumplimentado el quiz.*/
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
      alert("Para responder tienes que escribir A, B o C, no me seas hipoglúcido.")
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
/*Preguntas del quiz*/

pregunta1 = "Cuando quedas con amigos lejos, prefieres... A) Ir andando tranquilamente. B) O me llevan en coche o vamos en taxi, pero andando jamás. C) Haré lo que hagan los demás para no destacar."
respuesta1 = leerRespuesta(pregunta1) 
  if (respuesta1 == "a") {
    resultado += OPCIONPASADOR
    console.log("Tu respuesta a la pregunta 1 suma " + OPCIONPASADOR)
  }
  else if (respuesta1 == "b") {
    resultado += OPCIONGUARDIERO
    console.log("Tu respuesta a la pregunta 1 suma " + OPCIONGUARDIERO)
  }
  else if (respuesta1 == "c") {
    resultado += OPCIONVERSATIL
    console.log("Tu respuesta a la pregunta 1 suma " + OPCIONVERSATIL)
  }

pregunta2 = "Es Navidad, no hay más entrenamientos hasta después de las fiestas y la mesa está llena de tu comida preferida. Tú... A) Como sin remordimientos, porque la vida es una. B) Algún capricho hay que darse, pero sin pasarse que hay que mantenerse. C) Yo tengo mi pollo cocido en la nevera, que hay que rendir en todos los entrenamientos."
respuesta2 = leerRespuesta(pregunta2) 

  if (respuesta2 == "a") {
    resultado += OPCIONPASADOR
    console.log("Tu respuesta a la pregunta 2 suma " + OPCIONPASADOR)
  }
  else if (respuesta2 == "b") {
    resultado += OPCIONVERSATIL
    console.log("Tu respuesta a la pregunta 2 suma " + OPCIONVERSATIL)
  }
  else if (respuesta2 == "c") {
    resultado += OPCIONGUARDIERO
    console.log("Tu respuesta a la pregunta 2 suma " + OPCIONGUARDIERO)
  }
  pregunta3 = "Tocan luchas en el tatami y ves que tu compa favorito te pone ojitos desde el otro extremo del tatami. Tú... A) Pasas de él y lo dejas para el final, para que vaya más suave. B) Corres a sus brazos porque te gusta demasiado rodar con esa persona. C) Te sientas en el sitio y que corra si quiere rodar contigo."
  respuesta3 = leerRespuesta(pregunta3) 
  
    if (respuesta3 == "a") {
      resultado += OPCIONGUARDIERO
      console.log("Tu respuesta a la pregunta 3 suma " + OPCIONGUARDIERO)
    }
    else if (respuesta3 == "b") {
      resultado += OPCIONPASADOR
      console.log("Tu respuesta a la pregunta 3 suma " + OPCIONPASADOR)
    }
    else if (respuesta3 == "c") {
      resultado += OPCIONVERSATIL
      console.log("Tu respuesta a la pregunta 3 suma " + OPCIONVERSATIL)
    }

    pregunta4 = "Esta tarde toca físico en el entrenamiento y sabes que se viene un infierno de ejercicios. Tu rendimiento es... A) A lo que me llegue el cuerpo, hago lo que puedo B) Yo no hago halterofilia ni crossfit, me esfuerzo lo justo. C) Voy a tope, dando el 200% aunque al día siguiente no pueda moverme."
    respuesta4 = leerRespuesta(pregunta4) 
    
      if (respuesta4 == "a") {
        resultado += OPCIONVERSATIL
        console.log("Tu respuesta a la pregunta 4 suma " + OPCIONVERSATIL)
      }
      else if (respuesta4 == "b") {
        resultado += OPCIONGUARDIERO
        console.log("Tu respuesta a la pregunta 4 suma " + OPCIONGUARDIERO)
      }
      else if (respuesta4 == "c") {
        resultado += OPCIONPASADOR
        console.log("Tu respuesta a la pregunta 4 suma " + OPCIONPASADOR)
      }

    pregunta5 = "Estás manteniendo una interesante conversación con tus compis de entrenamiento al terminar la clase, y alguien empieza a explicar las ventajas del entrenamiento funcional y el animal flow. Tu reacción... A) Contraataco diciendo que es mucho mejor enfocarse en el yoga para mejorar la flexibilidad. B) Escucho e intento aprender lo máximo posible, que todo suma. C) Esta noche se viene maratón de Youtube de animal flow para mejorar mis movimientos."
    respuesta5 = leerRespuesta(pregunta5) 
      
      if (respuesta5 == "a") {
        resultado += OPCIONGUARDIERO
        console.log("Tu respuesta a la pregunta 5 suma " + OPCIONGUARDIERO)
      }
      else if (respuesta5 == "b") {
        resultado += OPCIONVERSATIL
        console.log("Tu respuesta a la pregunta 5 suma " + OPCIONVERSATIL)
      }
      else if (respuesta5 == "c") {
        resultado += OPCIONPASADOR
        console.log("Tu respuesta a la pregunta 5 suma " + OPCIONPASADOR)
      }

/*SUMA DE RESULTADOS*/
  if (resultado > 5) {
  alert("Eres pasador")
  console.log("La suma de tus resultados es " + resultado + ", así que eres pasador en BJJ")
  }
  else if (resultado <= 5 && resultado != 0) {
  alert("Eres guardiero")
  console.log("La suma de tus resultados es " + resultado+ ", así que eres guardiero en BJJ")
  }

  else if (resultado === 0) {
  alert("Eres versátil")
  console.log("La suma de tus resultados es " + resultado + ", así que eres versátil en BJJ")
  }

/*ACUMULAMOS DATOS DE LOS USUARIOS*/
let categoria;

if (resultado > 5) {
  categoria = "Pasador"
} else if (resultado <= 5 && resultado !== 0) {
  categoria = "Guardiero"
} else {
  categoria = "Versátil"
}

console.log("Categoría evaluada:", categoria)

let usuario = new Usuario(
  prompt("¿Nos dices tu apodo o nombre?"),
  prompt("¿En qué equipo o escuela entrenas?"),
  prompt("¿Qué edad tienes?"),
  prompt("Tu ciudad es..."),
  prompt("...del país..."),
  );

usuario.categoria = categoria

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
