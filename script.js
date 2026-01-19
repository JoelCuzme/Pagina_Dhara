// Lógica de negocio: cálculo de la diferencia de tiempo
const targetDate = new Date('January 31, 2026 21:00:00').getTime();

const updateCountdown = () => {
    const now = new Date().getTime();
    const gap = targetDate - now;

    // Cálculos de tiempo
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Aplicar lógica a los elementos del DOM
    if (gap > 0) {
        document.getElementById('days').innerText = Math.floor(gap / day);
        document.getElementById('hours').innerText = Math.floor((gap % day) / hour);
        document.getElementById('minutes').innerText = Math.floor((gap % hour) / minute);
        document.getElementById('seconds').innerText = Math.floor((gap % minute) / second);
    } else {
        document.querySelector('.event-details').innerText = "¡Es hoy!";
        document.getElementById('countdown').style.display = 'none';
    }
};

// Actualizar cada segundo
setInterval(updateCountdown, 1000);

// Ejecutar una vez al cargar
updateCountdown();