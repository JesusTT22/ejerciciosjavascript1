        function muestra() {
            // Obtener el elemento con la clase "adicional"
            var elementoAdicional = document.querySelector('.adicional');

            // Obtener el elemento con la clase "enlace"
            var enlace = document.querySelector('.enlace');

            // Cambiar la clase del elemento adicional para hacerlo visible
            elementoAdicional.classList.remove('oculto');
            elementoAdicional.classList.add('visible');

            // Ocultar el enlace
            enlace.style.display = 'none';
        }