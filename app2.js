const {PORT1} = require('./data/constantes.js')
const playerRouter = require('./routes/player-route.js')
const express = require('express');
const app = express();


app.use('/player', playerRouter );

app.use(express.json());

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).send(err.message);
});



const PORT = process.env.PORT1 || 8080;

app.listen(PORT, () => {
    console.log("El servidor esra corriendo en en el puerto" + PORT);
})