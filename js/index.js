/* Cargar productos desde el JSON */
async function cargarRashguards() {
  const response = await fetch('../index.json')
  const data = await response.json()
  return data.categorias
}

/* Función para mostrar el SweetAlert con la categoría y la rashguard que corresponda */
function aviso (categoria, rashguard) {
  Swal.fire({
    html: `
      <p class="mensaje">Así eres tú, ${categoria}</p>
      <p>Para que todo el mundo lo sepa, deberías llevar una rashguard molona que lo diga. </p>
      <p>${rashguard.nombre}. Cómprala por ${rashguard.precio}</p>
      <img class="rashguard" src="${rashguard.imagen}" alt="${rashguard.nombre}">
    `,
    confirmButtonText: '¡La quiero!',
    showCancelButton: true,
    cancelButtonText: 'Quiero volver al quiz'
  })

}
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
  let resultado = leerRespuestas()
  let categoria, rashguard

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

  console.log("La suma de tus resultados es " + resultado);

  return categoria;
}
  
async function manejaPuntos() {
  const categoria = calcularResultados()
  const apodo = document.getElementById("apodo").value
  const club = document.getElementById("club").value
  
  guardarUsuarios(apodo,club,categoria)
  agregarUsuarios()

  
  /*Creamos el mensaje cada vez que se haga la encuesta*/
  const CATEGORIAS = await cargarRashguards()
  const categoriaActual = CATEGORIAS.find(cat => cat.nombre === categoria)

  if (categoriaActual && categoriaActual.rashguard) {
    rashguard = categoriaActual.rashguard
    aviso(categoria, rashguard)

}
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

agregarUsuarios()
