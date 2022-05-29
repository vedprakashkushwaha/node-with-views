require('dotenv').config();
const express = require("express");
const path = require("path");
const hbs = require("hbs");
const cors = require("cors");
require('./databaseconnection/connection');
const router = require("./router/router");
const app = express()

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(static_path));

app.use(cors())
const port = process.env.PORT || 3000;
app.set("view engin", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);

app.get('/', (req, res) => {
    res.render("index.hbs");
});

app.get("/register", (req, res) => {
    res.render("register.hbs");
});

app.use('/api', router);

app.listen(port, () => {
    console.log(`server is running on port: ${port}`);
});
