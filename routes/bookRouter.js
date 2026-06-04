const { Router } = require("express");

const bookRouter = Router();

bookRouter.get("/", (req, res) => {
    res.send("Todos los libros");
});

bookRouter.get("/:id", (req, res) => {
    res.send(`Libro ${req.params.id}`);
});

module.exports = bookRouter;