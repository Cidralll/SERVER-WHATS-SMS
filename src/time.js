const { Send } = require('./send/send.js');

function addZero(x) {
    if (x < 10) {
        x = '0' + x;
    } return x;
}

module.exports = {
    Time() {
        setInterval(function(){
            
            let newDate = new Date();
            let hour = newDate.getHours();
            let minute = newDate.getMinutes();
            let second = newDate.getSeconds();
           
            hour = addZero(hour);
            minute = addZero(minute);
            second = addZero(second);
        
        
            console.clear()
            console.log(`${hour}:${minute}:${second}`)
        
            let time = process.env.TIME;
            if (`${hour}:${minute}:${second}` === time) {
                Send()
            }
        },1000)
    }
}