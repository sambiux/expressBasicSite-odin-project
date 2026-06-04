const {PORT1} = require('./data/constantes.js')
const playerRouter = require('./routes/player-route.js')
const express = require('express');
const app = express();


app.use('/player', playerRouter );

const PORT = process.env.PORT1 || 8080;

app.listen(PORT, () => {
    console.log("El servidor esra corriendo en en el puerto" + PORT);
})