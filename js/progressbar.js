// Nota 01: Código que despliega el efecto de la barra neón
let progress = document.getElementById('progressbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function(){
let progressHeight = (window.pageYOffset / totalHeight) * 100;
  progress.style.height = progressHeight + "%";
}
// Termina Nota 01

// Nota 02: Código que desplaza en mobiles a posición de la barra de vídeo
function myFunctionScrollToNavBar() { //Desplazamiento del video hacia el navbar
  const element = document.getElementById("home");
  element.scrollIntoView();
}
// Termina Nota 02


// Nota 03: Código que desplaza en mobiles hasta el vídeo
function myFunctionScrollTop() { //Desplazamiento del video hacia el navbar
  const element = document.getElementById("myVideo");
  element.scrollTop();
}
// Termina Nota 03

// Nota 04: Código que muestra el botón que te manda hacia arriba al desplazarse la página hacia abajo.
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 1000) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})
// Termina nota 04