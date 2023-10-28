        // Punto 1: Validar una fecha en formato "XX/XX/XXXX"
        var texto = "Nací el 05/04/1982 en Donostia.";
        var expresionFecha = /^\d{2}\/\d{2}\/\d{4}$/;
        var resultadoFecha = expresionFecha.test(texto);

        // Punto 2: Validar una dirección de correo electrónico
        var email = "mi.correo@ejemplo.com";
        var expresionEmail = /^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,3}$/;
        var resultadoEmail = expresionEmail.test(email);

        // Punto 3: Reescribir la función escapeHTML utilizando expresiones regulares
        function escapeHTML(text) {
            var replacements = [["&", "&amp;"], ["\"", "&quot;"], ["<", "&lt;"], [">", "&gt;"]];
            replacements.forEach(function(replace) {
                var regex = new RegExp(replace[0], "g");
                text = text.replace(regex, replace[1]);
            });
            return text;
        }

        // Punto 4: Invertir un nombre y un apellido y separarlos por una coma
        var nombreCompleto = "Gabriel Torrealba";
        var expresionNombre = /(\w+)\s(\w+)/;
        var nombreInvertido = nombreCompleto.replace(expresionNombre, "$2, $1");

        // Punto 5: Eliminar etiquetas de script y su contenido de una cadena HTML
        function eliminarEtiquetasScript(html) {
            var expresionScript = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
            return html.replace(expresionScript, '');
        }

        var codigoHTML = '<div>Este es un ejemplo de <script>script malicioso /script> HTML.</div>';
        var codigoLimpio = eliminarEtiquetasScript(codigoHTML);

        // Mostrar resultados en la página
        document.write("<p>Resultado de la validacion de la fecha: " + resultadoFecha + "</p>");
        document.write("<p>Resultado de la validacion del correo electronico: " + resultadoEmail + "</p>");
        document.write("<p>Nombre invertido: " + nombreInvertido + "</p>");
        document.write("<p>Codigo HTML limpio: " + codigoLimpio + "</p>");