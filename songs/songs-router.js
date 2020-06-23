const express = require('express');
const router = express.Router();
const axios = require('axios');

const Tracks = require('./songs-model');
const authenticate = require('../auth/auth-middleware');

//'/api/music' is part of the base url

// save song to favoriteSongs
router.post('/faves', (req, res) => {
    const trackToSave = req.body;
    Tracks.saveTrack(trackToSave)
        .then(newTrack => {
            return res.status(200).json(newTrack);
        })
        .catch(err => {
            res.status(500).json({ message: 'Unable to save track', error: err })
        })
});

//get all savedsongs from favoritesongs 
router.get('/:id/faves', (req, res) => {
    const id = req.params.id;
    Tracks.getSavedTrack(id)
        .then(savedTracks => {
            res.status(200).json(savedTracks);
        })
        .catch(err => {
            res.status(500).json({ message: 'Unable to retrieve favorites playlist', error: err })
        })
});

// get audio features visualizatioo for single track
router.post('/singletrack/data', (req, res) => {
    const track_id = req.body.track_id;
    axios.get(`https://spotifyflask.herokuapp.com/image/${track_id}`)
        .then(response => {
            return res.json(response.data)
        })
        .catch(err => {
            console.log(err)
            rers.status(500).json({ message: 'Unable to retrieve radar graph', error: err })
        })
})

// get req from ds with one song 
router.post('/singletrack', (req, res) => {
    const track_id = req.body.track_id;
    axios.get(`https://spotifyflask.herokuapp.com/song/${track_id}`)
        .then(response => {
            return res.json(response.data)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'Unable to retrieve suggested playlist for track', error: err })
        })
});

//endpoint to post playlist to ds api WIP
router.post('/:id/faves/playlist', (req, res) => {
     const id = req.params.id;
     Tracks.getSavedTrack(id)
        .then(savedTracks => {
            return savedTracks;
        })
        .catch(err => console.log(err));

     axios.post('https://spotifyflask.herokuapp.com/favorites')
        

});


//remove song from favorites list 
router.delete('/:id/faves/:track_id', authenticate, (req, res) => {
    const id = req.params.id;
    const track_id = req.params.track_id;

    Tracks.removeTrack(id, track_id)
        .then(trackToDelete => {
            res.status(200).json({ removed: trackToDelete })
        })
        .catch(err => console.log(err))
});


module.exports = router;