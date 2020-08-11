const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const SongSchema = Schema(
    {
        title: {type: String, required: true},
        artist: {type: String, required: true},
        stanza: {type: Array, required: true},
        chords: {type: Array, required: true},
        stanzaCount: {type: Number, required: true},
        details: {type: String}
    },
    { timestamps: true }
);
const Song = mongoose.model("Song", SongSchema);
module.exports = Song;