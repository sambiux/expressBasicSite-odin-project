function createPlayer(req, res){
    const newPlayer = {
        guid: crypto.randomUUID(),
        name: req.body.name
    }

    console.log(newPlayer)

    BD.push(newPlayer);

    res.status(201).send("PLayer creado con exito")
}

module.exports= createPlayer;