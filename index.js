document.addEventListener("DOMContentLoaded", function() {
    const btnRes1 = document.getElementById("pregunta1");
    const btnRes2 = document.getElementById("pregunta2");
    const respuesta1 = document.getElementById("respuesta1");
    const respuesta2 = document.getElementById("respuesta2");
    btnRes1.addEventListener("click", function() {
        if (respuesta1.hidden === true) {
            respuesta1.hidden = false;
            btnRes1.setAttribute("aria-expanded", "true");
        } else {
            respuesta1.hidden = true;
            btnRes1.setAttribute("aria-expanded", "false"); 
        }
    });
    btnRes2.addEventListener("click", function() {
        if (respuesta2.hidden === true) {
            respuesta2.hidden = false;
            btnRes2.setAttribute("aria-expanded", "true");
        } else {
            respuesta2.hidden = true;
            btnRes2.setAttribute("aria-expanded", "false");
        }
    });
});
