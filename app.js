"strict";

const day = document.querySelector('.day-text')
const hour = document.querySelector('.hr-text')
const minute = document.querySelector('.min-text')
const sec = document.querySelector('.sec-text')


let time = 777341;
function countDown(){
    day.textContent = Math.trunc(time/86400);
    hour.textContent= Math.trunc((time%86400)/3600);
    minute.textContent = Math.trunc((time%3600)/60);
    sec.textContent = time%60
    time--
}
countDown();
setInterval(countDown, 1000)

