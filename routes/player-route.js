
const express = require('express')
const playerRouter = express();
const BD = require('../bd.js')
const playerController = require('../controllers/playerController.js')
const createPlayerCntrler= require('../controllers/createPlayerController.js')

playerRouter.get('/', (req, res) =>{
    res.send("Home players")
})

playerRouter.post('/', createPlayerCntrler )
playerRouter.get('/:guid', playerController)


module.exports= playerRouter;