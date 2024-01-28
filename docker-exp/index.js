const express = require('express')
const app = express()


app.get('/', (req, res) => {
    return res.send('hello world, khaja shaik')
})

app.get('/api', (req, res) => {
    return res.send('welcome to the api from the docker compose')
})

app.listen(3000)