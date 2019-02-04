let interval = undefined;
let timerDuration = 1500
let displayTime = `${ numberDisplayFormat(timerDuration, 'minutes') }:${ numberDisplayFormat(timerDuration,'seconds') }`;
let numberOfSessions = 0;

function numberDisplayFormat(timerDuration, specify){
    let minutes = Math.floor(timerDuration/60);
    let seconds = timerDuration%60
   
    switch(specify){

        case 'minutes':
        if(minutes.toString().length < 2){
            return `${0}${minutes}`;
        }else{
            return minutes;
        }

        case 'seconds':
        if((seconds.toString().length < 2) && (seconds.toString().charAt(0) === 0)){
            return `${seconds}${0}`;
        }else if(seconds.toString().length < 2){
            return `${0}${seconds}`;
        }else{
            return seconds;
        }
    }
}

function toggleTimer(boolean){
    let toggle = boolean;

    switch(toggle){
        case 'on':
            interval = setInterval(updateDisplayTime, 1000);
        break;

        case 'off':
            clearInterval(interval);
        break;
    }
}

function updateDisplayTime(){
    timerDuration--
    displayTime = `${ numberDisplayFormat(timerDuration, 'minutes') }:${ numberDisplayFormat(timerDuration,'seconds') }`;
    displayValue.innerText = displayTime;

    if(timerDuration === 0 && numberOfSessions === 0){
        toggleTimer('off');
        breakTime();
    }else if(timerDuration === 0 && numberOfSessions === 1){
        resetTimer();
    }
}

function breakTime(){
    numberOfSessions++
    timerDuration = 300;
    alert('time for a break.');
    toggleTimer('on');
}

function resetTimer(){
    toggleTimer('off');
    timerDuration = 1500;
    numberOfSessions = 0;
    displayTime = `${ numberDisplayFormat(timerDuration, 'minutes') }:${ numberDisplayFormat(timerDuration,'seconds') }`;
    displayValue.innerText = displayTime;
}

/*
function displayTime(){
    displayTime = `${ numberDisplayFormat(timerDuration, 'minutes') }:${ numberDisplayFormat(timerDuration,'seconds') }`;
}
*/  

//  start, stop, reset buttons. 
const startButton = document.getElementById('start').addEventListener('click', ()=>{
    toggleTimer('on');
});

const stopButton = document.getElementById('stop').addEventListener('click', ()=>{
    toggleTimer('off');
});

const resetButton = document.getElementById('reset').addEventListener('click', resetTimer );

// plus and Minus buttons
const plus = document.getElementById('plus').addEventListener('click' , ()=>{
    timerDuration += 60;
    displayTime = `${ numberDisplayFormat(timerDuration, 'minutes') }:${ numberDisplayFormat(timerDuration,'seconds') }`;
    displayValue.innerText = displayTime;
});

const minus = document.getElementById('minus').addEventListener('click', ()=>{
    timerDuration -= 60;
    displayTime = `${ numberDisplayFormat(timerDuration, 'minutes') }:${ numberDisplayFormat(timerDuration,'seconds') }`;
    displayValue.innerText = displayTime;
})

// here down are display updates and modifications. 
const displayValue = document.getElementById('current_time');
displayValue.innerText = displayTime;