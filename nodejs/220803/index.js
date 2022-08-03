const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const port = 8080;

app.set("view engine", "ejs");
app.use( express.static( "uploads" ) );
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json() );

const router = require("./routes");
app.use("/", router);

const board = require("./routes/board");
app.use("/board", board);


app.listen(port, ()=>{
    console.log("Server Port : ", port );
})