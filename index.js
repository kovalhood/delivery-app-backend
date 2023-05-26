const express = require("express");
const app = express();
const shopsData = require("./database/shops.json");
let port = 4000;

app.get("/shops", (req, res) => {
    res.send(shopsData);
})

app.listen(port);