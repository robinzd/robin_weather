var express = require('express');
const app = express();
const { WeatherApp } = require('./middleware/weather.cjs'); 
const port = 2000
app.use('/api', WeatherApp)
app.all('/', (req, res) => {
    res.status(200).send('API server id active...!')
})
app.all("*", (req, res) => {
    res.status(404).send('(¯\\_(ツ)_/¯) : API not found...!')
})
app.listen(port, () => console.log(`Listening on port ${port}`))