window.onload = inicio;

function inicio() {
  document.getElementById("boton1");
  //   document.getElementsById("boton1"); por ID
  //   document.getElementsByTagName("button")[0]; por Tag
  //   document.getElementsByClassName("button")[0]; por tipo
  //   document.querySelector("boton1") por selector;
  // document.querySelector("button")[0]; por Tag
  // document.querySelector(".btn1"); por clase
  // document.querySelector(".btn1")[0]; por clase
  document.querySelectorAll(".btn")[0].onclick = accion1;
  document.querySelectorAll(".btn")[1].onclick = accion2;
  document.querySelectorAll(".btn")[2].onclick = accion3;
  document.querySelectorAll(".btn")[3].onclick = accion4;
}

function accion1() {
  document.querySelector(".box").innerHTML = "Hola Mundo!";
}

function accion2() {
  document.querySelector(".box").innerHTML =
    "<img src='assets/img/btn2Image.svg'>";
}

function accion3() {
  //   document.querySelector(".box").innerHTML += "<button>botón</button>";
  document
    .querySelector(".box")
    .insertAdjacentHTML("beforeEnd", "<button>botón</button>");
}

function accion4() {
  document.querySelector(".box").innerHTML = "";
}
