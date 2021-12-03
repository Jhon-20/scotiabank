let modal_container = document.querySelector(".modal_container");
let btn_cerrar = document.getElementById("btn_cerrar");
let btn_send_modal = document.querySelector(".btn_send_modal");
let btn_constancia = document.querySelector(".btn_constancia")
btn_constancia.onclick = () => {
  modal_container.style.visibility = "visible"
  modal_container.style.opacity = "1"

}
btn_cerrar.onclick = () => {
  modal_container.style.visibility = "hidden"
  modal_container.style.opacity = "0"

}
btn_send_modal.onclick = () => {
  modal_container.style.visibility = "hidden"
  btn_constancia.disabled = true
  btn_constancia.style.background = "#F4F4F4"
  btn_constancia.style.border = "1px solid gray"
  btn_constancia.style.color = "gray"

}
