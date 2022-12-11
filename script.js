const hor = document.getElementById('horas');
const min = document.getElementById('minutos');
const sec = document.getElementById('segundos');

const relogio = setInterval(function time(){
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let mi = dateToday.getMinutes();
    let se = dateToday.getSeconds();

if( hr < 10) hr = "0" + hr;

if( mi < 10) mi = "0" + mi;

if( se < 10) se = "0" + se;

    hor.textContent = hr;
    min.textContent = mi;
    sec.textContent= se;
})