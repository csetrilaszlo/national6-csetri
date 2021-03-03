console.log('Digital Clock');


//sa retinem secunda la care suntem
let seconds = 0;

const secondsParagraphs = document.querySelectorAll('.seconds p');
//console.log(secondsParagraphs);

let minutes = 0;
const minutesParagraphs = document.querySelectorAll('.minutes p');

let hours = 0;
const hoursParagraphs = document.querySelectorAll('.hours p');


//----------Print-Time----------
document.getElementById('print-time').addEventListener('click', function(){
    if(hours.value = null){
        hours.value = 00;
    } else if(minutes.value = null){
        minutes.value = 00;
    } else {
        seconds.value = 00;
    }
    console.log('The time is: ', `${hours}: ${minutes}: ${seconds}`)
});








//----------Start----------
    document.getElementById('start').addEventListener('click', function (){
    let result = setInterval(function() {
    renderDigits(seconds, secondsParagraphs);
    renderDigits(minutes, minutesParagraphs);
    renderDigits(hours, hoursParagraphs);
    const secondsString = seconds + "";
    const secondsStringArray = secondsString.split('');
    //console.log(secondsStringArray);
    


     //----------Stop----------
    document.getElementById('stop').addEventListener('click', function(){
     clearInterval(result);
    });


    //----------Reset----------
    document.getElementById('reset').addEventListener('click', function reset(){
        seconds = 0;
        minutes = 0;
        hours = 0;
        // secondsParagraphs = 0;
        // minutesParagraphs = 0;
        // hoursParagraphs = 0;
        renderDigits(seconds, secondsParagraphs);
        renderDigits(minutes, minutesParagraphs);
        renderDigits(hours, hoursParagraphs);
        clearInterval(result);
});


    if(secondsStringArray.length === 2){
        secondsParagraphs[0].innerText = secondsStringArray[0];
        secondsParagraphs[1].innerText = secondsStringArray[1];
     } else {
       // secondsParagraphs[0].innerText = 0;
        secondsParagraphs[1].innerText = secondsStringArray[0];
        }
        
    
    
    seconds++;
     if(seconds === 60){
        seconds = 0;
        renderDigits(minutes, minutesParagraphs);
        minutes++;
    }
    if(minutes === 60){
        minutes = 0;
        hours++;
        
    }
    if(hours === 24){
        hours = 0;
    } 
    }, 1);
});

    
    
    
//----------Save----------
    
function output() {   

const div = document.createElement('div');
const content = document.createElement('p');

let section = document.querySelector('.save-section');
div.appendChild(content);
section.appendChild(div);

let formatSeconds = ("0" + seconds).slice(-2);
let formatMinutes = ("0" + minutes).slice(-2);
let formatHours = ("0" + hours).slice(-2);

content.innerText = formatHours + ":" + formatMinutes + ":" + formatSeconds;




}


-//----------Clear---------
document.getElementById('clear').addEventListener('click', function(){
    document.querySelector('.save-section').innerText = "";
})






function renderDigits(nr, pList){
    const stringDigits = nr + "";// transform nr in string
    const digitsList = stringDigits.split('');

    if(digitsList.length === 2){
        pList[0].innerText = digitsList[0];
        pList[1].innerText = digitsList[1];
     } else {
       pList[0].innerText = 0;
        pList[1].innerText = digitsList[0];
}
}



