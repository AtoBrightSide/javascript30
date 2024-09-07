const secondHand = document.getElementById("second-hand");
const minuteHand = document.getElementById("min-hand");
const hourHand = document.getElementById("hour-hand");

setInterval(() => {
    let currSecond = new Date().getSeconds();
    if (currSecond === 0) { secondHand.style.transition = 'none'; }
    secondHand.style.transform = `rotate(${(currSecond * 6) + 90}deg)`
    let currMin = new Date().getMinutes();
    if (currMin === 0) currMin = 60;
    minuteHand.style.transform = `rotate(${(currMin * 6) + 90}deg)`
    let currHour = new Date().getHours();
    if (currHour === 0) currHour = 12;
    hourHand.style.transform = `rotate(${(currHour * 30) + 90}deg)`
}, 1000)