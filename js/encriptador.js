//-------Selección de Elementos-------//
const btnEncriptar = document.querySelector(".btn-encriptar");
const txtEncriptar = document.querySelector(".encriptar");
const aviso = document.querySelector(".texto-aviso");
const respuesta = document.querySelector(".evaluar");
const btnCopiar = document.querySelector(".btn-copiar");
const btnDesencriptar = document.querySelector(".btn-desencriptar");

//-------Boton de Encriptar-------//
btnEncriptar.addEventListener("click", () => {
    let texto = txtEncriptar.value.trim();
    
    if (texto === "") {
        mostrarAviso("El campo de texto no debe estar vacío");
    } else if (!/^[a-z\s]*$/.test(texto)) {
        mostrarAviso("El texto debe ser todo en minúsculas y no debe tener caracteres especiales");
    } else {
        let textoEncriptado = texto
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");

        respuesta.textContent = textoEncriptado;
        btnCopiar.style.visibility = "visible";
    }
});

//-------Boton de Desencriptar-------//
btnDesencriptar.addEventListener("click", () => {
    let texto = txtEncriptar.value.trim();
    
    if (texto === "") {
        mostrarAviso("El campo de texto no debe estar vacío");
    } else if (!/^[a-z\s]*$/.test(texto)) {
        mostrarAviso("El texto debe ser todo en minúsculas y no debe tener caracteres especiales");
    } else {
        let textoDesencriptado = texto
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");

        respuesta.textContent = textoDesencriptado;
        btnCopiar.style.visibility = "visible";
    }
});

//-------Función para mostrar avisos-------//
function mostrarAviso(mensaje) {
    aviso.style.background = "#0A3871";
    aviso.style.color = "#FFFF";
    aviso.style.fontWeight = "800";
    aviso.textContent = mensaje;

    setTimeout(() => {
        aviso.removeAttribute("style");
    }, 1500);
}

//-------Boton de Copiar-------//
btnCopiar.addEventListener("click", () => {
    navigator.clipboard.writeText(respuesta.textContent).then(() => {
        alert("Texto copiado al portapapeles");
    }).catch(err => {
        alert("Hubo un error al copiar el texto: " + err);
    });
});