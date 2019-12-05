const mongoose = require("mongoose");
const mongoDB = "mongodb://localhost/hsbc_sydney_7s";
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("combined"));
app.use("/", express.static("public"));

function verifyRequest(req, res, next) {
  if (req.headers["accesskey"] === "landMark&2") {
    next();
  } else {
    console.log(req.headers);
    res.status(400).json({ message: "Access denied" });
  }
}

const groupController = require("./controllers/groupController.js");
app.get("/hsbc_sydney_7s/groups", verifyRequest, groupController.get);
app.post("/hsbc_sydney_7s/group", verifyRequest, groupController.create);
app.post("/hsbc_sydney_7s/group/add_individual", verifyRequest, groupController.addIndividual);
app.post("/hsbc_sydney_7s/group/email", verifyRequest, groupController.email);
app.post("/hsbc_sydney_7s/group/get", verifyRequest, groupController.getParticular);

const individualController = require("./controllers/individualController.js");
app.get("/hsbc_sydney_7s/individual", verifyRequest, individualController.get);
app.post("/hsbc_sydney_7s/individual", verifyRequest, individualController.create);


const port = 6632;
const server = app.listen(port, "0.0.0.0", () => {
  console.log(`App listening on port ${port}`);
});




/////////
var io = require('socket.io')(server);

var Player = require('./Classes/Player.js');
var sockets = [];

console.log('Server has started');

var players = [];

io.on('connection', function(socket) {
    console.log('Connection established.');

    var player = new Player();
    var thisPlayerID = player.id;

    players[thisPlayerID] = player;
    sockets[thisPlayerID] = socket;

    // Tell the client that this is our id for the server
    socket.emit('register', { id: thisPlayerID });
    socket.emit('spawn', player); // Tell myself I have spawned
    socket.broadcast.emit('spawn', player); // Tell others I have spawned
    

    // Tell myself about everyone else in the game
    for (var playerID in players) {
        if (playerID != thisPlayerID) {
            socket.emit('spawn', players[playerID]);
        }
    }

    socket.on('', function (data) {
       
        socket.broadcast.emit('', player);
    });


    socket.on('startGame', function (data) {
        // player.emails.length = 0;
        console.log('startGame => GROUP NAME: ' + data.teamName);
        player.teamName = data.teamName;
        socket.broadcast.emit('startGame', player);
    });

    socket.on('teamSelectStarted', function (data) {
        console.log('teamSelectStarted');
        socket.broadcast.emit('teamSelectStarted');
    });


    socket.on('teamSelected', function (data) {
        console.log('teamSelected: ' + data.teamIndex);
        player.teamIndex = data.teamIndex;
        socket.broadcast.emit('teamSelected', player);
    });

    socket.on('photoTaken', function (data) {
        console.log('photoTaken');
        socket.broadcast.emit('photoTaken');
    });

    socket.on('retakePhoto', function (data) {
        console.log('retakePhoto');
        socket.broadcast.emit('retakePhoto');
    });

    socket.on('gameOver', function (data) {
        // player.emails.length = 0;
        console.log('gameOver');
        socket.broadcast.emit('gameOver', player);
    });



//================================================
    // DISCONNECT FUNCTION
    socket.on('disconnect', () => {
        console.log('A player has disconnected');
        delete players[thisPlayerID];
        delete sockets[thisPlayerID];
        socket.broadcast.emit('disconnected', player);
    });
});



