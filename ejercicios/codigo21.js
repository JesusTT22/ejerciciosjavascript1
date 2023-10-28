document.addEventListener("DOMContentLoaded", function() {
    const nombreInput = document.getElementById("registro_nombre");
    const apellidoInput = document.getElementById("registro_apellido");
    const emailInput = document.getElementById("registro_email");
    const passwordInput = document.getElementById("registro_password");
    const comentariosInput = document.getElementById("registro_comentarios");
  
    nombreInput.addEventListener("blur", function() {
      if (nombreInput.value.trim() === "") {
        alert("El campo Nombre es obligatorio.");
      }
    });
  
    // Puedes agregar eventos 'blur' para otros campos aquí...
  
  });