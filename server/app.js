'use strict';
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
//models
const Song = require('./models/Songs.js');

//connect server to mongoDB 
mongoose.connect("mongodb://localhost/pnw-chords",
    {
        useNewUrlParser:true, 
        useUnifiedTopology:true,
        useFindAndModify: false
    });

mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());



app.get('/', (req, res) => {
  Song.find({}).sort({updatedAt: 'descending'}).exec((err, songs) => {
    if (err) return res.status(404).send('Error while getting songs!');
    return res.send({songs});
  });
});

app.get('/:id', (req, res) => {
  Song.findById(req.params.id).exec((err, foundSong) => {
    if (err) return res.status(404).send('Error while getting songs!');
    return res.send({foundSong});
  });
});

// create a new note
app.post('/create', (req, res) => {
  const song = new Song({
  	stanza: req.body.stanza,
  	chords: req.body.chords, 
  	title: req.body.title,
    artist: req.body.artist,
    details: req.body.details,
    stanzaCount: req.body.stanzaCount
  });
  song.save( (err) => {
    if (err) return res.status(404).send({message: err.message});      
    return res.send({ song });
  });
});

app.post('/:id/update', (req, res) => {
let options = { new: true };
  Song.findByIdAndUpdate(req.params.id, req.body.data , options, (err, song) => {
    if (err) return res.status(404).send({message: err.message});
    return res.send({ message: 'song updated!', song });
  });
});

const PORT = process.env.PORT || 8081;

app.listen(PORT, function(){
    console.log("PnW Chords server started on port " + PORT);
});