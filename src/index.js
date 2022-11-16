const { Send } = require('./send/send.js');
require('dotenv').config()

setInterval(function(){
    
    let newDate = new Date();
    let hour = newDate.getHours();
    let minute = newDate.getMinutes();
    let second = newDate.getSeconds();
   
    hour = addZero(hour);
    minute = addZero(minute);
    second = addZero(second);
   
    console.log(`${hour}:${minute}:${second}`)

    if (`${hour}:${minute}:${second}` === '11:08:50') {
        Send()
    }
},1000)

function addZero(x) {
    if (x < 10) {
        x = '0' + x;
    } return x;
}