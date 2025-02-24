const express = require("express");
const routerMenu = require("./app/api/v1/menu/router.js");
const routerPoster = require("./app/api/v1/poster/router.js");
const routerInbox = require("./app/api/v1/inbox/router.js");
const routerToko = require("./app/api/v1/toko/router.js");


const app = express();
const path = "/api/v1";

app.use(express.json());
app.use(express.static("public"));

app.use(path, routerPoster);
app.use(path, routerInbox);
app.use(path, routerMenu);
app.use(path, routerToko)


app.listen(4000, () => {
    console.log("Server running is running...");
});
