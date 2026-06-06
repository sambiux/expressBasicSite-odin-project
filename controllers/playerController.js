const BD = require('../bd.js')
const CustomNotFoundError = require('../errors/customNotFoundError.js')


function getPlayerByGuid(req, res){
    
    const player = BD.find(player => player.guid == req.params.guid);
    console.log(player);
    if(!player){
        console.log("Player not found");
        throw new CustomNotFoundError("Player not found");
    }
    return res.send(player);
}



module.exports= getPlayerByGuid;