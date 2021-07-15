const express = require('express');
const chirpstore = require('./chirpstore');
let router = express.Router();

router.get('/:id?', (req, res) => {
    let id = req.params.id
    if (id) {
        res.json(chirpstore.GetChirp(id));
    }else{
        res.send(chirpstore.GetChirps);
    }
});
router.post('/', (req, res) => {
    chirpstore.CreateChirp(req.body);
        res.status(200).send("entrycreated");
});

router.delete('/:id', (req, res) => {
    chirpstore.DeleteChirp(req.params.id);
    
});

router.put('/', (req, res) => {
    chirpstore.createChirp(req.params.id, req.body)
    res.send(chirpstore.CreateChirp)
});


module.exports = router;