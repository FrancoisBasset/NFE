const express = require('express')
const router = express.Router();
const ejs = require('ejs');

router.use('/', express.static('public/html/incidents'));

router.get('/:incident', (req, res) => {
    res.render("detail.ejs", {id: req.params.incident});
});

module.exports = router;