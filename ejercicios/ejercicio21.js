document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("registro");

  form.addEventListener("submit", function(event) {
    if (!validateForm()) {
      event.preventDefault();
    }
  });

  function validateForm() {
    let isValid = true;

    const nombre = document.getElementById("registro_nombre").value.trim();
    const apellido = document.getElementById("registro_apellido").value.trim();
    const email = document.getElementById("registro_email").value.trim();
    const password = document.getElementById("registro_contraseña").value;
    const comentarios = document.getElementById("registro_comentarios").value.trim();
    const condiciones = document.getElementById("registro_condiciones").checked;



    if (nombre === "" || email === "" || comentarios === "") {
      alert("Por favor, complete todos los campos obligatorios.");
      isValid = false;
    }

    if (!validateEmail(email)) {
      alert("Por favor, introduzca una dirección de email válida.");
      isValid = false;
    }

    if (comentarios.length > 50) {
      alert("Los comentarios no deben exceder los 50 caracteres.");
      isValid = false;
    }

    if (password.length < 6 || !validatePassword(password)) {
      alert("La contraseña no cumple con los requisitos mínimos.");
      isValid = false;
    }

    if (!condiciones) {
      alert("Debe aceptar las condiciones del servicio para continuar.");
      isValid = false;
    }

    if (isValid) {
      window.location.href = "servidor.php"; // Redirige a servidor.php si la validación es exitosa
    }

    return isValid;
  }

  function validateEmail(email) {
    // Expresión regular para validar un email
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  }

  function validatePassword(password) {
    // Expresiones regulares para validar la contraseña
    const lowercaseRegex = /[a-z]/;
    const uppercaseRegex = /[A-Z]/;
    const digitRegex = /\d/;

    return lowercaseRegex.test(password) && uppercaseRegex.test(password) && digitRegex.test(password);
  }
});