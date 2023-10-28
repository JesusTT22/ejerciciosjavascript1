        function tamanoVentanaNavegador(){
            // Adaptada de http://www.howtocreate.co.uk/tutorials/javascript/browserwindow
            var dimensiones = [];
            
            if(typeof(window.innerWidth) == 'number') {
                // No es IE
                dimensiones = [window.innerWidth, window.innerHeight];
            } else if(document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
                //IE 6 en modo estandar (no quirks)
                dimensiones = [document.documentElement.clientWidth, document.documentElement.clientHeight];
            } else if(document.body && (document.body.clientWidth || document.body.clientHeight)) {
                //IE en modo quirks
                dimensiones = [document.body.clientWidth, document.body.clientHeight];
            }
            
            return dimensiones;
        }