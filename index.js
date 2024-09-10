const sim = window.document.getElementById("opcyes")
const nao = window.document.getElementById("opcNo")
const fundo = window.document.getElementById("area")
const resp = window.document.getElementById("textinho")

nao.addEventListener("mouseenter", entrar)
let estado = -1

function entrar(){
    estado++
    if (estado == 0){
        nao.style.transform="translate(13px, -15px)"
    }
    if (estado == 1){
        nao.style.transform="translate(13px, +15px)"
    }
    if (estado == 2){
        nao.style.transform="translate(-32px, +15px)"
    }
    if (estado == 3){
        nao.style.transform="translate(-32px, -15px)"
    }
    if (estado == 4){
        nao.style.transform="translate(+13px, +15px)"
    }
    if (estado == 5){
        nao.style.transform="translate(+13px, -15px)"
    }
    if (estado == 6){
        nao.style.transform="translate(-32px, +15px)"
    }
    if (estado == 7){
        nao.style.transform="translate(-32px, -15px)"
        estado = -1
    }
}
