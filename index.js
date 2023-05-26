const express = require("express");
const app = express();
const shopsData = require("./database/shops.json");
let port = 4000;

app.get("/", (req, res) => {
    res.send(`This is a backend API for CoolDelivery shops. Just add "/shops" for getting data`);
})

app.get("/shops", (req, res) => {
    res.send(shopsData);
})

app.listen(port);
