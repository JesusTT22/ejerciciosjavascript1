    function muestraInformacion(event) {
      var mensajeRaton = document.getElementById("mensajeRaton");
      var posX = event.clientX;
      var posY = event.clientY;
      var pageX = event.pageX;
      var pageY = event.pageY;

      mensajeRaton.innerHTML = "Navegador [" + posX + ", " + posY + "]<br>Página [" + pageX + ", " + pageY + "]";
      document.getElementById("raton").style.backgroundColor = "white";
    }

    function cambiaMensaje(event) {
      var mensajeTeclado = document.getElementById("mensajeTeclado");

      if (event.type === "mousemove") {
        var mensajeRaton = document.getElementById("mensajeRaton");
        mensajeRaton.innerHTML = "Posición del puntero respecto del navegador: (" + event.clientX + ", " + event.clientY + ")<br>Posición del puntero respecto de la página: (" + event.pageX + ", " + event.pageY + ")";
        document.getElementById("raton").style.backgroundColor = "white";
      } else if (event.type === "keydown") {
        mensajeTeclado.innerHTML = "Carácter [" + event.key + "]<br>Código [" + event.keyCode + "]";
        document.getElementById("teclado").style.backgroundColor = "#CCE6FF";
      }
    }

    function cambiaFondo(color) {
      var mensajeRaton = document.getElementById("raton");
      var mensajeTeclado = document.getElementById("teclado");
      mensajeRaton.style.backgroundColor = "#" + color;
      mensajeTeclado.style.backgroundColor = "#" + color;
    }