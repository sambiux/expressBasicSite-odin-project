const express = require('express');
const path = require('path');
const app = express();

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "home.html"));
});
app.get('/about', (req, res) =>{
    res.sendFile(path.join(__dirname, "views", "about.html"));
})

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, "views", "contact.html"));
})

const PORT = 8080;

app.listen(PORT, () => {
    console.log("Servidor corriendo en el puerto " + PORT)
})
