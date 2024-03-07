const contadores = document.getElementById("contadorVisitas")
const frase = document.getElementById("frase")
const fondo = document.getElementById("content")
const imagen = console.log

let contador

const visitas = (localStorage.getItem("visitas"))

const reestablecer = document.getElementById("btnReestablecer")

reestablecer.addEventListener("click", () => {
    localStorage.removeItem("visitas")
    location.reload();
    contadores.innerHTML = 0
})


if (!visitas) {
    contador = 0;
    localStorage.setItem("visitas", contador)
}else if (visitas >=50){
    contador = localStorage.getItem("visitas")
    contador++
    localStorage.setItem("visitas", contador)
    // fondo.innerHTML = `holaaa <img src = /img/meme.jpg">`
    fondo.style.backgroundColor = "green" 
    frase.innerHTML = `Ya vas por más de  ${contador} cuidado o acabaras asi<p> <img id = "img" src = "/img/meme.jpg"></p>` 

}
else if (visitas >=20){
    contador = localStorage.getItem("visitas")
    contador++
    localStorage.setItem("visitas", contador)
    fondo.style.backgroundColor = "green" 
    frase.innerHTML = `Ya vas por más de ${contador} veces`
}

else {
    contador = localStorage.getItem("visitas")
    contador++
    localStorage.setItem("visitas", contador)


}


contadores.innerHTML = contador















