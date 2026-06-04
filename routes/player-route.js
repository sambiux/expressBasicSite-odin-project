
const express = require('express')
const playerRouter = express();
const BD = require('../bd.js')


playerRouter.get('/', (req, res) =>{
    res.send("Home players")
})
playerRouter.get('/:guid', (req, res) => {
    const player = BD.find(player => player.guid == req.params.guid);
    console.log(player);
    if(!player){
        res.send("Player not found");
        console.log("Player not found");
    }
    res.send(player);
    
    
})

module.exports= playerRouter;