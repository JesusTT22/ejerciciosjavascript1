        // Función para simular el lanzamiento de un dado (números del 1 al 6)
        function lanzarDado() {
            return Math.floor(Math.random() * 6) + 1;
        }

        // Función para realizar una simulación de 36,000 lanzamientos de dos dados y contar las sumas
        function simularLanzamientos() {
            const resultados = new Array(11).fill(0); // Array para contar las sumas (índices de 2 a 12)

            for (let i = 0; i < 36000; i++) {
                const dado1 = lanzarDado();
                const dado2 = lanzarDado();
                const suma = dado1 + dado2;
                resultados[suma - 2]++; // Restamos 2 para que el índice sea 0 para suma 2, 1 para suma 3, etc.
            }

            return resultados;
        }

        // Realizar la simulación
        const resultados = simularLanzamientos();
        const resultadosBody = document.getElementById("resultados-body");

        // Mostrar los resultados en la página
        for (let i = 0; i < resultados.length; i++) {
            const fila = document.createElement("tr");
            const sumaCel = document.createElement("td");
            const frecuenciaCel = document.createElement("td");

            sumaCel.textContent = i + 2;
            frecuenciaCel.textContent = resultados[i];

            fila.appendChild(sumaCel);
            fila.appendChild(frecuenciaCel);

            resultadosBody.appendChild(fila);
        }