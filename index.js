const { Send } = require('./src/send/send.js');
require('dotenv').config()
const express = require('express')
const routes = require('./src/routes')
const cors = require('cors')

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

const app = express()

app.use(
    express.json(),
    express.urlencoded({ extended: true }),
    cors(),
    routes
)

const port = process.env.PORT || 3030;

app.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`);
});