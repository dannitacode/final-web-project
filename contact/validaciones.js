function validaciones() {

  const formulario = document.getElementById("formulario-contacto");
  const nombre = formulario.elements["nombre-completo"].value.trim();
  const telefono = formulario.elements["telefono"].value.trim();
  const email = formulario.elements["correo-electronico"].value.trim();
  const mensaje = formulario.elements["mensaje"].value.trim();

  const regexNombre = /^[A-Z-a-z-ÁÉÍÓÚáéíóúÑñ\s]+$/
  const regexTelefono = /^[0-9]{10,14}$/
  const regexEmail = /\w+@(gmail|hotmail|yahoo|outlook)(\.com|\.edu|\.ar)/

  let valido = true;
  //aca iria despues las validaciones de toda la vida parecidas a java

  if (nombre.length < 3 || !regexNombre.test(nombre)) {
    alert("El nombre debe de tener minimo 3 caracteres y deben ser solo letras.");
    valido = false;
    return;
  }
  if (!regexTelefono.test(telefono)) {
    alert('El numero tiene que ser de entre 10 y 14 de longitud.')
    valido = false;
    return;
  }
  if(!regexEmail.test(email)){
    alert('Por favor ingrese un email valido(gmail, hotmail, yahoo, outlook) y asegurese no dejar campos vacios.')
    valido = false;
  }
  if(mensaje.length < 10){
    alert('Por favor ingrese mas de 10 caracteres para el mensaje')
    valido = false;
  }
  if(valido = true){
    alert('Se ha enviado el formulario correctamente!')
    formulario.reset()
  }else{
    alert('por favor verifique los campos.')
  }


}
