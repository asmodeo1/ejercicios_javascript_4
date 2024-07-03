
function mostrarPeliculas(datos) {
    const peliculas = document.getElementById("peliculas");
    for (const pelicula of datos) {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("card", "m-2");
        const cuerpo = document.createElement("cuerpo");
        tarjeta.appendChild(cuerpo);
        cuerpo.classList.add("card-body");
        const titulo = document.createElement("h5");
        cuerpo.appendChild(titulo);
        titulo.classList.add("card-title");
        titulo.textContent = pelicula.titulo;
        const subtitulo = document.createElement("h6");
        cuerpo.appendChild(subtitulo);
        subtitulo.classList.add("card-subtitle", "mb-2", "text-body-secondary");
        subtitulo.textContent = pelicula.director;
        const lista = document.createElement("ul");
        cuerpo.appendChild(lista);
        lista.classList.add("list-group");
        for (const actor of pelicula.actores) {
            const li = document.createElement("li");
            lista.appendChild(li);
            li.innerHTML = '<i class="bi bi-diamond-fill"></i> ' + actor;
            li.classList.add("list-group-item");
        }
        const p = document.createElement("p");
        cuerpo.appendChild(p);
        p.classList.add("card-text", "mt-2");
        p.textContent = pelicula.descripcion;

        peliculas.appendChild(tarjeta);
    }
}

fetch("pelis.json")
.then(respuesta => respuesta.json())
.then(mostrarPeliculas);
