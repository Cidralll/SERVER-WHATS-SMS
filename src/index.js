const { Send } = require('./send/send.js');
require('dotenv').config()

console.log('Servidor rodando!')

setInterval(function(){
    
    let newDate = new Date();
    let hour = newDate.getHours();
    let minute = newDate.getMinutes();
    let second = newDate.getSeconds();
   
    hour = addZero(hour);
    minute = addZero(minute);
    second = addZero(second);

    let time = process.env.TIME;
    if (`${hour}:${minute}:${second}` === time) {
        Send()
    }
},1000)

function addZero(x) {
    if (x < 10) {
        x = '0' + x;
    } return x;
}