require('dotenv').config()
const express = require('express')
const routes = require('./src/routes')
const cors = require('cors');
const { Time } = require('./src/time.js');

const app = express()

app.use(
    express.json(),
    express.urlencoded({ extended: true }),
    cors(),
    routes
)

const port = process.env.PORT || 3030;
    
app.listen(port, () => {
    if (port === 3030) {
        console.log(`Servidor escutando em http://localhost:${port}`);
    }else {
        console.log(`Servidor rodando em ${port}`)
    }
});

Time();