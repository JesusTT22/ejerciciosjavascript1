    function contarCaracteres() {
      var texto = document.getElementById("texto");
      var mensaje = document.getElementById("zonaClic");

      // Máximo número de caracteres permitidos
      var maxCaracteres = 60;

      if (texto.value.length > maxCaracteres) {
        texto.value = texto.value.substring(0, maxCaracteres);
      }

      var caracteresRestantes = maxCaracteres - texto.value.length;
      mensaje.innerHTML = caracteresRestantes + " caracteres restantes";

      // Permitir las teclas Backspace, Supr y flechas horizontales
      if (event.keyCode == 8 || event.keyCode == 37 || event.keyCode == 39 || event.keyCode == 46) {
        return true;
      }

      if (texto.value.length >= maxCaracteres) {
        return false;
      }
    }