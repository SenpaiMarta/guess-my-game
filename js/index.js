/*Necesitamos, por partes: leer las respuestas del usuario, otorgarle la puntuación adecuada a cada respuesta, obtener apodo y club y acumular todos esos datos en la memoria; después, necesitamos mostrar una card que indique apodo, club y estado asignado (guardiero, pasador o versátil) a lo que se puede añadir, la suma de puntos obtenidos.*/

/*Definimos la función para leer respuestas*/
function leerRespuestas(preguntaId) {
  const pregunta = document.getElementById(preguntaId)
  const respuesta = pregunta.querySelector(':checked').value/*Esto no lo entiendo, la verdad. Osea, entiendo cada parte pero no coje lo que tiene que coger y falla todo el tiempo. Que yo había intentado con los id y me estoy liando muchísimo porque nada funciona*/
  return respuesta
}

/*Asignamos puntuaciones a cada pregunta y sumamos al resultado*/
p1 = leerRespuestas('p1')
if (p1 === 'p1a') {
  resultado += OPCIONPASADOR
  console.log("Tu respuesta a la pregunta 1 suma " + OPCIONPASADOR)
} else if (p1 === 'p1b') {
  resultado += OPCIONGUARDIERO
  console.log("Tu respuesta a la pregunta 1 suma " + OPCIONGUARDIERO);
} else if (p1 === 'p1c') {
  resultado += OPCIONVERSATIL
  console.log("Tu respuesta a la pregunta 1 suma " + OPCIONVERSATIL)
}

/*Mostramos resultados*/
document.getElementById('calcularResultados').addEventListener('click', function () {
  let mensaje
if (resultado > 5) {
  mensaje = "Eres pasador"
}
else if (resultado <= 5 && resultado != 0) {
  mensaje = "Eres guardiero"
}
else {
  mensaje = "Eres versátil"
}
})
  
resultadoContainer.innerHTML = `<p>${mensaje}</p>`
console.log("La suma de tus resultados es " + resultado)

// /*y este caos pos tampoco sirve*/
// const resultado = parseInt(respuesta1) + parseInt(respuesta2) + parseInt(respuesta3) + parseInt(respuesta4) + parseInt(respuesta5)

// /*Notificamos el resultado*/
// mostrarResultado(resultado)

// /*DOM para leer respuestas*/
// function obtenerRespuesta (nombrePregunta) {
//   const opciones = document.getElementByName(nombrePregunta)
//   for (const opcion of opciones) {
//     if (opcion.checked) {
//       return opcion.value
//     }
//   }
//   return '0' /*en caso de que no haya seleccionado nada*/
// }

// /*Mostramos el resultado en pantalla*/
// function mostrarResultado (resultado) {
//   const resultadoContainer = document.getEelementById('resultado')
//   let mensaje

//   if (resultado > 5) {
//     mensaje = "Eres pasador"
//   }
//   else if (resultado <= 5 && resultado != 0) {
//     mensaje = "Eres guardiero"
//   }
//   else {
//     mensaje = "Eres versátil"
//   }
// }

/*resultadoContainer.innerHTML = `<p>${mensaje}</p>`*/
