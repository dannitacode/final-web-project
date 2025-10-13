function validaciones() {

  const formulario = document.getElementById("formulario-contacto");

  const nombre = formulario.elements["nombre-completo"].value.trim();
  const telefono = formulario.elements["telefono"].value.trim();
  const email = formulario.elements["correo-electronico"].value.trim();
  const mensaje = formulario.elements["mensaje"].value.trim();

  const regexNombre = /^[A-Z-a-z-ÁÉÍÓÚáéíóúÑñ\s]+$/
  const regexTelefono = /^[0-9]{10,14}$/

  //aca iria despues las validaciones de toda la vida parecidas a java

  if (nombre.length < 3 || !regexNombre.test(nombre)) {
    console.log("El nombre debe de tener minimo 3 caracteres y deben ser solo letras.");
    return;
  }
  if (!regexTelefono.test(telefono)) {
    console.log('El numero tiene que ser de entre 10 y 14 de longitud.')
    return;
  }

  //se podria hacer regex para el numero de telefono y demas, permitir solo correos de gmail tmb
  //hasta ahi llega mi conocimiento
}
