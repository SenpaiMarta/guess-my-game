/*Definimos la función para leer respuestas*/
function captaRespuesta(preguntaId) {
  const pregunta = document.getElementById(preguntaId)
  const respuesta = parseInt(pregunta.querySelector(':checked').value)
  return respuesta
}

/*Array para preguntas y función de lectura de las respuestas*/
function leerRespuestas(){
  let idPregunta, respuesta
  const preguntas = ["p1", "p2", "p3", "p4", "p5"]
  let resultado = 0

  for (let numeroPregunta=0; numeroPregunta<preguntas.length; numeroPregunta++) {
    idPregunta = preguntas[numeroPregunta]
    respuesta = captaRespuesta(idPregunta)
    resultado += respuesta
  }

  return resultado
}


/*Función para calcular resultados*/
function calcularResultados() {
  let mensaje, resultado, categoria

  resultado = leerRespuestas()
  if (resultado > 5) {
  mensaje = "Eres pasador"
  categoria = "pasador"
  }
  else if (resultado != 0) {
   mensaje = "Eres guardiero"
   categoria = "guardiero"

   }
  else {
    mensaje = "Eres versátil"
    categoria = "versatil"
  }

  /*Creamos el mensaje cada vez que se haga la encuesta*/
  const resultadoContainer = document.getElementById('resultadoPersonal')
  Swal.fire(`<p class="mensaje">${mensaje}</p>`);
  console.log("La suma de tus resultados es " + resultado)

  return categoria

}
  
function manejaPuntos() {
  const categoria = calcularResultados()
  const apodo = document.getElementById("apodo").value
  const club = document.getElementById("club").value
  
  guardarUsuarios(apodo,club,categoria)
  agregarUsuarios()
}


function guardarUsuarios(apodo,club,categoria) {
  let listaUsuarios = []
  const USUARIO = {
    apodo: apodo,
    club: club,
    categoria: categoria
  }

    /*Recuperamos la lista de la memoria*/
  if ("usuarios" in localStorage) {
    listaUsuarios = JSON.parse(localStorage.getItem("usuarios"))
  }

  listaUsuarios.push(USUARIO)

  localStorage.setItem("usuarios", JSON.stringify(listaUsuarios))
}

  /*Función del botón*/
document.getElementById('resultadoBtn').addEventListener('click', manejaPuntos)


function agregarUsuarios() {

  let listadoUsuarios = JSON.parse(localStorage.getItem("usuarios"));
  let divPadre = document.getElementById("listadoUsuarios")

  divPadre.innerHTML = "";

  if (listadoUsuarios && listadoUsuarios.length > 0) {
    listadoUsuarios.forEach((usuario) => {
      let divUsuario = document.createElement("div")
      divUsuario.className = "tarjeta"
      divUsuario.innerHTML = `
        <h3>${usuario.apodo}</h3>
        <h3>${usuario.club}</h3>
        <p class="estilo">${usuario.categoria}</p>
      `

    divPadre.appendChild(divUsuario)
    })
  } 
  else {
    divPadre.innerHTML = "<h3>No hay usuarios registrados.</h3>"
  }
}

agregarUsuarios();  