function escribirLetra(evt) {
    const texto = document.getElementById("texto").value;
    const span = document.getElementById("numeroCaracteres");
    span.textContent = texto.length;
}

function comprobarLimite(evt) {
    const texto = document.getElementById("texto").value;
    // 249 pues la letra aún no está dentro de texto 
    if(texto.length == 250 && 
        (evt.key != "Backspace" && evt.key != "Delete" 
            && evt.key != "ArrowLeft" && evt.key != "ArrowRight"
            && evt.key != "ArrowUp" && evt.key != "ArrowDown")) {
        evt.preventDefault();
    }
}

document.getElementById("texto").addEventListener("keyup", escribirLetra);
document.getElementById("texto").addEventListener("keydown", comprobarLimite);
// Para no dejar pegar
document.getElementById("texto").addEventListener("paste", evt => evt.preventDefault());
// Para no dejar arrastrar
document.getElementById("texto").addEventListener("drop", evt => evt.preventDefault());



