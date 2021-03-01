console.log('Digital Clock');

//sa retinem secunda la care suntem
let seconds = 0;

const secondsParagraphs = document.querySelectorAll('.seconds p');
console.log(secondsParagraphs);

let minutes = 0;
const minutesParagraphs = document.querySelectorAll('.minutes p');

let hours = 0;
const hoursParagraphs = document.querySelectorAll('.hours p');


setInterval(function() {
    renderDigits(seconds, secondsParagraphs);
    renderDigits(minutes, minutesParagraphs);
    renderDigits(hours, hoursParagraphs);
    
    
    
    const secondsString = seconds + "";
    const secondsStringArray = secondsString.split('');
    console.log(secondsStringArray);
    

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
    }, 1000);

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



