let hours = document.querySelector('#hours');
let minutes = document.querySelector('#minutes');
let seconds = document.querySelector('#seconds');
let ampm = document.querySelector('#ampm');
let date = document.querySelector('#date');


let setTimeInterval = setInterval(() => {


    let newDate = new Date();
    let getHrs = newDate.getHours();
    let getMins = newDate.getMinutes();
    let getSec = newDate.getSeconds();

    let setHrs = getHrs % 12;
    console.log(setHrs);


    if (getHrs < 12) {

        ampm.textContent = "AM"

    } else {
        ampm.textContent = "PM"

    }


    let mins = String(getMins)
    let sec = String(getSec)

    let padMin = mins.padStart(2, '0')
    let padSec = sec.padStart(2, '0')

    hours.textContent = `${setHrs}h`
    minutes.textContent = `${padMin}m`;
    seconds.textContent = `${padSec}s`;

}, 1000)

