
document.addEventListener('DOMContentLoaded', function () {
    // Selecciona todos los botones que muestran el contador
    const botones = document.querySelectorAll('.miBoton');

    botones.forEach(function (boton) {
        const p = boton.querySelector('.contador');

        // Extrae el número inicial (si lo hay) del texto, por ejemplo "0 vistas"
        let count = 0;
        if (p) {
            const match = p.textContent.match(/(\d+)/);
            if (match) count = parseInt(match[1], 10);
        }

        boton.addEventListener('click', function () {
            count++;
            if (p) p.textContent = count + ' vistas';
        });
    });
});

