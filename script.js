window.onload = function () {
    // Variables

    // Añadir las tres imágenes del directorio "img" al array IMAGENES.
    const IMAGENES = ["img/img1.jpg","img/img2.jpg","img/img3.jpg"];

    const TIEMPO_INTERVALO_MILESIMAS_SEG = 1000;

    // posición actual guarda el indice de la imágen que se está mostrando (del array IMAGENES)
    let posicionActual = 0;

    // variables con los elementos del DOM HTML, aplicar el selector necesario.
    let $botonRetroceder = document.getElementById("retroceder");
    let $botonAvanzar =document.getElementById("avanzar");
    let $imagen = document.getElementById("imagen");
    let $botonPlay = document.getElementById("play");
    let $botonStop= document.getElementById("stop");

    // Identificador del proceso que se ejecuta con setInterval().
    let intervalo;

    // Funciones

    /**
     * Funcion que cambia la foto en la siguiente posicion
     */
    function pasarFoto() {
        if (posicionActual===2){
            posicionActual=-1;
        }
        posicionActual++;
        renderizarImagen();
    }

    /**
     * Funcion que cambia la foto en la anterior posicion
     */
    function retrocederFoto() {
        // se incrementa el indice (posicionActual)
        if (posicionActual===0){
            posicionActual=3;
        }
        posicionActual--;
        renderizarImagen();
        // ...y se muestra la imagen que toca.
    }

    /**
     * Funcion que actualiza la imagen de imagen dependiendo de posicionActual
     */
    function renderizarImagen() {
        $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
    }

    /**
     * Activa el autoplay de la imagen
     */
    function playIntervalo() {
        intervalo = setInterval(pasarFoto, TIEMPO_INTERVALO_MILESIMAS_SEG, 'Parameter 1', 'Parameter 2');
        // Documentación de la función setInterval: https://developer.mozilla.org/en-US/docs/Web/API/setInterval
        // Mediante la función setInterval() se ejecuta la función pasarFoto cada TIEMPO_INTERVALO_MILESIMAS_SEG.
        $botonPlay.setAttribute("disabled",true);
        $botonStop.removeAttribute("disabled")
        $botonStop.setAttribute("enabled",true);

        // Desactivamos los botones de control necesarios. Utilizando setAttribute y removeAttribute.
    }

    /**
     * Para el autoplay de la imagen
     */
    function stopIntervalo() {
        clearInterval(intervalo)
        $botonPlay.removeAttribute("disabled")
        $botonPlay.setAttribute("enabled",true);
        $botonStop.removeAttribute("enabled")
        $botonStop.setAttribute("disabled",true);
        // Desactivar la ejecución de intervalo.
        // Activamos los botones de control. Utilizando setAttribute y removeAttribute.
    }

    // Eventos
    // Añadimos los evenntos necesarios para cada boton. Mediante addEventListener.

    $botonAvanzar.addEventListener('click',pasarFoto);
    $botonRetroceder.addEventListener('click',retrocederFoto);
    $botonPlay.addEventListener('click',playIntervalo);
    $botonStop.addEventListener('click',stopIntervalo);

    // Iniciar
    renderizarImagen();
}
