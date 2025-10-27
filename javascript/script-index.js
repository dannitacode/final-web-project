const tipos = [
    'Cappuccino',
    'Flat White',
    'Caramel Macchiato',
    'Americano',
    'Affogato'
]

const imagenes = [
    './img/cafe-cappuccino.jpg',
    './img/cafe-flat-white.jpg',
    './img/cafe-caramel.jpg',
    './img/cafe-americano.jpg',
    './img/cafe-affogato.jpg'
]
let contador = 0
const imagen = document.getElementById('imagen')
const tipo = document.getElementById('tipo-cafe')
function carrousel() {
    contador++
    if (contador === 5) {
        contador = 0
    }
    imagen.src = imagenes[contador]
    tipo.textContent = tipos[contador]
}

function carrouselBack() {
    contador--
    if (contador === -1) {
        contador = 4
    }
    imagen.src = imagenes[contador]
    tipo.textContent = tipos[contador]
}