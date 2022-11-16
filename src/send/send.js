const axios = require('axios')
require('dotenv').config()
const number = process.env.NUMBER;
const message = process.env.MESSAGE;
const url = process.env.URL

async function Post(url, body) {
    axios.post(`${url}`, body)
    .then(() => {
        console.log('Message sent')
    })
    .catch(()=> {
        console.log('Unsent message')
    })
}

module.exports = {
    Send() {
    
        let body = {
            "number": `${number}`,
            "message": `${message}`
        }

        Post(url, body)
    }

}