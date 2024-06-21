function obtenerRespuesta(respuesta) {
    return respuesta.json();
}

function mostrarHoroscopo(datos) {
    if(datos.success) { // if(datos.sucess == true) {
        const horoscopo = document.getElementById("horoscopo");
        horoscopo.textContent = datos.data.horoscope_data;
    } else {
        alert("Error " + datos.status + " " + datos.message);
    }
}

function obtenerHoroscopo() {
    const signo = document.getElementById("signo").value;
    //fetch(`https://horoscope-app-api.vercel.app/api/v1/get-horoscope/daily?sign=${signo}`)
    //fetch(`https://horoscope-app-api.vercel.app/api/v1/get-horoscope/daily?sign=" + signo)
    // No va a funcionar por el tema de CORS con lo que podemos probar con uno solo
    fetch("horoscopo.json")
    .then(obtenerRespuesta) // .then(r => r.json())
    .then(mostrarHoroscopo)
    //.catch(mostrarError);
}

document.getElementById("obtener").addEventListener("click", obtenerHoroscopo);