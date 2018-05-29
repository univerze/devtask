const express = require('express');
const router = express.Router();
const Medicine = require('./medicine.schema');

router.get('/', (req, res) => {
    Medicine.find().then(response => {
        res.json(response);
    });
});

router.post('/', (req, res) => {
    const model = new Medicine({
        name: req.body.name,
        manufacturer: req.body.manufacturer,
        stock: req.body.stock
    });

    model.save();

    res.json(model);
});

module.exports = router;
