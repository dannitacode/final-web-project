const imagenes = [
        '../img/cafe-cappuccino.jpg',
        '../img/cafe-flat-white.jpg',
        '../img/cafe-caramel.jpg',
        '../img/cafe-americano.jpg',
        '../img/cafe-affogato.jpg'
    ]
    let contador = 0
    let imagen = document.getElementById('imagen')
function carrousel() {
    contador++
    if (contador === 5) {
        contador = 0
    }
    imagen.src = imagenes[contador]
}

function carrouselBack() {
    contador--
    if (contador === -1) {
        contador = 4
    }
    imagen.src = imagenes[contador]
}