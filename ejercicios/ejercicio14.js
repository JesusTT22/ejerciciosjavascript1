        // Obtener todos los enlaces de la página
        var enlaces = document.getElementsByTagName("a");
        document.getElementById("numeroEnlaces").textContent = enlaces.length;

        // Obtener la dirección a la que enlaza el penúltimo enlace
        if (enlaces.length >= 2) {
            var penultimoEnlace = enlaces[enlaces.length - 2];
            document.getElementById("direccionPenultimoEnlace").textContent = penultimoEnlace.href;
        }

        // Contar el número de enlaces que enlazan a http://prueba
        var enlacesAHttpPrueba = Array.from(enlaces).filter(function(enlace) {
            return enlace.href === "http://prueba";
        });
        document.getElementById("numeroEnlacesHttpPrueba").textContent = enlacesAHttpPrueba.length;

        // Obtener el tercer párrafo
        var tercerParrafo = document.getElementsByTagName("p")[2];
        var enlacesTercerParrafo = tercerParrafo.getElementsByTagName("a");
        document.getElementById("numeroEnlacesTercerParrafo").textContent = enlacesTercerParrafo.length;