const express = require('express');
const app = express();
const fs = require('fs');
const playerNames = require('./player-info');

//test using the core module (fs)
fs.readFileSync('soccer-players.txt', 'utf8', ( error, data) => {
    if (error) {
        console.log('------error --------', error);
    } else {
        console.log(data);
    }
})

//creating home route
app.get('/', (req, res) => {
    return res.json({message: 'Welcome to Soccer Node App'})
});

//using req.params and local modules
app.get('/players/:player', (req, res) => {
    let player = req.params.player;
    let answer = playerNames([player]);
    return res.json({ answer:answer});
});


//using core modules and req.query
app.get('/read', (req, res) => {
    // grab the querry string, 
    //pass the querystring into the fs function
    //return data that comes from the txt file
    let element = req.query.soccer;
    fs.readFile(`${element}.txt`, 'utf8', (error, data) => {
        if (error) {
            return res.json({ message: "Error aquiring data, try again later"});
        } else {
            return res.json({ message: data});
        }
        });
    });


//set up a PORT number and listen for server 
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log('Server is running on PORT', PORT);
})