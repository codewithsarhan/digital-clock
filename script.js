let clock = document.querySelector('#clock');

let setTimeInterval = setInterval(() => {

let newDate = new Date();
let date = newDate.toLocaleTimeString();
clock.textContent = date;
    
},1000)
