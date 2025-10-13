function validaciones() {

    //con esto se sacarian los datos del formulario
    const formulario = document.getElementById('formulario-contacto')
    const nombre = "hola"
    const telefono = formulario.elements['telefono'].value.trim()
    const email = formulario.elements['email'].value.trim()
    const mensaje = formulario.elements['mensaje'].value.trim()



    //aca iria despues las validaciones de toda la vida parecidas a java

    if(nombre.length < 3){
        console.log('El nombre debe tener minimo 3 caracteres')
    }

    //se podria hacer regex para el numero de telefono y demas, permitir solo correos de gmail tmb
    //hasta ahi llega mi conocimiento
}
