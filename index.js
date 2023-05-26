const express = require("express");
const cors = require('cors');
const app = express();
const shopsData = require("./database/shops.json");
let port = 4000;

app.use(cors());

app.get("/", (req, res) => {
    res.send(`This is a backend API for CoolDelivery shops. Just add "/shops" to the address bar to get data`);
})

app.get("/shops", (req, res) => {
    res.send(shopsData);
})

app.listen(port);
