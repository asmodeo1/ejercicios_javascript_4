function obtenerRespuesta(respuesta) {
    if(respuesta.status != 200) {
        window.alert("Problemas en la descarga: " + respuesta.status);
        return;
    }
    return respuesta.json();
}

function mostrarFoto(datos) {
    const url = datos[0].url;
    const imagen = document.getElementById("imagen");
    imagen.src = url;
    // En lugar del setInterval abajo, como las fotos pueden tardar en descargarse
    // se podrían mostrar varias en poco tiempo. La solución sería hacer aquí:
    //setTimeout(obtenerFoto, 5000);
}

function obtenerFoto() {
    fetch("https://api.thecatapi.com/v1/images/search")
    .then(obtenerRespuesta)
    .then(mostrarFoto);
}

obtenerFoto();
setInterval(obtenerFoto, 5000);
