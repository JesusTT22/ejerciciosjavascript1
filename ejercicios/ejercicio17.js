        // Obtener todos los enlaces y secciones
        const toggleLinks = document.querySelectorAll('.toggle-link');
        const contents = document.querySelectorAll('.content');

        // Agregar un evento de clic a cada enlace
        toggleLinks.forEach((link, index) => {
            link.addEventListener('click', function (e) {
                e.preventDefault(); // Prevenir el comportamiento predeterminado del enlace

                // Toggle para mostrar/ocultar la sección relacionada
                contents[index].classList.toggle('hidden');

                // Cambiar el texto del enlace
                if (contents[index].classList.contains('hidden')) {
                    link.textContent = `Enlace ${index + 1} (Mostrar)`;
                } else {
                    link.textContent = `Enlace ${index + 1} (Ocultar)`;
                }
            });
        });