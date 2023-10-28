        // Función que se ejecuta al hacer clic en el botón
        function anade() {
            // Obtener el elemento de entrada de texto
            var nuevoElemento = prompt("Ingrese el nuevo elemento:");

            // Comprobar si se ingresó un valor
            if (nuevoElemento !== null && nuevoElemento !== "") {
                // Crear un nuevo elemento de lista
                var li = document.createElement("li");

                // Asignar el texto ingresado al nuevo elemento de lista
                li.textContent = nuevoElemento;

                // Obtener la lista existente
                var lista = document.getElementById("lista");

                // Agregar el nuevo elemento a la lista
                lista.appendChild(li);
            }
        }

        // Asociar la función anade al evento click del botón
        var boton = document.getElementById("boton");
        boton.addEventListener("click", anade);