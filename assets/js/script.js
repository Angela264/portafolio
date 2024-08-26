const alertSubmit = document.querySelector("form");
const clearNombre = document.getElementById("nombre");
const clearCorreo = document.getElementById("correo");
const clearComentario = document.getElementById("comentario");

alertSubmit.addEventListener("submit", function () {
  Swal.fire({
    icon: "success",
    color: "#4d7ea8",
    title: "¡Formulario enviado con éxito!",
    showConfirmButton: false,
    timer: 1500,
  });
  clearNombre.value = "";
  clearCorreo.value = "";
  clearComentario.value = "";
});

const misHabilidades = [
  "Iniciativa",
  "Innovación y creatividad",
  "Autoaprendizaje",
  "Orientación a resultados",
  "Trabajo en equipo",
  "Adaptación y flexibilidad ante cambios",
];

const listaDesordenada = document.querySelector(".habilidades-blandas ul");
misHabilidades.forEach((li) => {
  listaDesordenada.innerHTML += `<li> ${li} </li>`;
});

$(document).ready(function () {
  $(document).mousemove(function (e) {
    // Crear una nueva partícula mágica
    var magic = $('<div class="magic"></div>');
    $("body").append(magic);

    // Posicionar la partícula en la posición actual del mouse
    magic.css({
      top: e.pageY + "px",
      left: e.pageX + "px",
    });

    // Remover la partícula después de que se desvanezca
    setTimeout(function () {
      magic.remove();
    }, 1000); // Tiempo que tarda en desaparecer
  });

  let segs = 0;
  setInterval(function () {
    segs++;
    if (segs % 2 === 0) $(".inicales").text(">AS");
    else $(".inicales").text(">AS_");
  }, 1000);

  $("#hover-form").mouseover(function () {
    $("#hover-form").addClass("color-fondo-formulario");
  });

  $("#hover-form").mouseout(function () {
    $("#hover-form").removeClass("color-fondo-formulario");
  });
});
