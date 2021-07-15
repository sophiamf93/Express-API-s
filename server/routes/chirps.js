const express = require('express');
const chirpStore = require('../../chirpstore');
const router = express.Router();

router.get('/:id?', (req, res) => {
    const id = req.params.id;

    if (id) {
        res.send(chirpStore.GetChirp(id));
    } else {
        res.sendStatus(chirpStore.GetChirps());
    }
});

router.post('/', (req, res) => {
    const chirp = req.body

    res.send(chirpStore.CreateChirp(req.body))
})

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const chirp = req.body

    res.send(chirpStore.UpdateChirp(id, chirp));
})

router.delete('/:id', (req, res) => {
    res.send(chirpStore.DeleteChirp(id))
})


module.exports = router;