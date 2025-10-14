function validaciones() {

  const formulario = document.getElementById("formulario-contacto");
  const nombre = formulario.elements["nombre-completo"].value.trim();
  const telefono = formulario.elements["telefono"].value.trim();
  const email = formulario.elements["correo-electronico"].value.trim();
  const mensaje = formulario.elements["mensaje"].value.trim();

  const regexNombre = /^[A-Z-a-z-ÁÉÍÓÚáéíóúÑñ\s]+$/
  const regexTelefono = /^[0-9]{10,14}$/
  const regexEmail = /\w+@(gmail|hotmail|yahoo|outlook)(\.com|\.edu|\.ar)/

  /* Quité el booleano y en lugar retorné false o true según el caso. El booleano revisa TODOS los campos antes de mostrar algo, y tipo saltan todas las alertas al final. Entonces con el return false, detiene  el flujo a la primera y podes corregir una por una, y no saltan todas las alertas de golpe al final*/
  /* let valido = true; */


  if (nombre.length < 3 || !regexNombre.test(nombre)) {
    alert("El nombre debe de tener minimo 3 caracteres y deben ser solo letras.");
    return false;
  }
  if (!regexTelefono.test(telefono)) {
    alert('El numero tiene que ser de entre 10 y 14 de longitud.')
    return false;
  }
  if(!regexEmail.test(email)){
    alert('Por favor ingrese un email valido(gmail, hotmail, yahoo, outlook) y asegurese no dejar campos vacios.')
    return false;
  }
  if(mensaje.length < 10){
    alert('Por favor ingrese mas de 10 caracteres para el mensaje')
    return false;
  }

    alert('Se ha enviado el formulario correctamente!')
    formulario.reset()
    return true;
}
