const formulario = document.forms['formulario']
  const nombreInput = formulario['nombre-completo']
  const telefonoInput = formulario['telefono']
  const emailInput = formulario['correo-electronico']
  const mensajeInput = formulario['mensaje']

  const regexNombre = /^[A-Z-a-z-ÁÉÍÓÚáéíóúÑñ\s]+$/
  const regexTelefono = /^[0-9]{10,14}$/
  const regexEmail = /^(\w)+@(gmail|hotmail|yahoo|outlook)(\.com|\.ar)$/

function validaciones() {
  const spanNombre = document.getElementById('error-nombre')
  const spanTelefono = document.getElementById('error-telefono')
  const spanCorreo = document.getElementById('error-correo')
  const spanMensaje = document.getElementById('error-mensaje')
  const nombreValue = nombreInput.value
  const telefonoValue = telefonoInput.value
  const emailValue = emailInput.value
  const mensajeValue = mensajeInput.value
  let bandera = true

  if (nombreValue.length < 3 || !regexNombre.test(nombreValue) || nombreValue === '') {
    nombreInput.style.borderColor = "red"
    spanNombre.textContent = 'El nombre debe de tener minimo 3 caracteres y deben ser solo letras.'
    spanNombre.style.textAlign = "left"
    spanNombre.style.top = '21%'
    spanNombre.style.display = 'block'
    bandera = false
  } else {
    nombreInput.style.borderColor = "black"
    spanNombre.textContent = ""
  }

  if (!regexTelefono.test(telefonoValue) || (telefonoValue.length < 10 || telefonoValue.length > 14) || telefonoValue === '') {
    telefonoInput.style.borderColor = "red"
    spanTelefono.textContent = 'El numero tiene que ser de entre 10 y 14 de longitud, sin guiones.'
    spanTelefono.style.textAlign = "left"
    spanTelefono.style.top = '38%'
    spanTelefono.style.display = 'block'
    bandera = false
  } else {
    telefonoInput.style.borderColor = "black"
    spanTelefono.textContent = ""
  }

  if (!regexEmail.test(emailValue) || emailValue === '') {
    emailInput.style.borderColor = "red"
    spanCorreo.textContent = 'El correo debe de ser valido (gmail, yahoo, outlook, hotmail)'
    spanCorreo.style.textAlign = "left"
    spanCorreo.style.top = '55%'
    spanCorreo.style.display = 'block'
    bandera = false
  } else {
    emailInput.style.borderColor = "black"
    spanCorreo.textContent = ""
  }

  if (mensajeValue === '' || mensajeValue.length < 100) {
    mensajeInput.style.borderColor = "red"
    spanMensaje.textContent = 'El mensaje debe de ser mayor a 100 caracteres.'
    spanMensaje.style.textAlign = "left"
    spanMensaje.style.bottom = '12%'
    spanMensaje.style.display = 'block'
    bandera = false
  } else {
    mensajeInput.style.borderColor = "black"
    spanMensaje.textContent = ""
  }

  if(bandera === true) alert('Formulario enviado exitosamente!')
    formulario.reset()
  return false;
}
