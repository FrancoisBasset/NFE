const express = require('express')
const router = express.Router();

const incidents = [
    { id: 1, name: 'République' },
    { id: 2, name: 'Romorantin' },
    { id: 3, name: 'Saint-Gervais' },
    { id: 4, name: 'Bastia' },
    { id: 5, name: 'Saint-Benoit' }
]

router.get('/', (req, res) => {
    res.render('incidents/index.ejs', { incidents: incidents});
});

router.get('/:id', (req, res) => {
    const incident = incidents.find((incident) => {
        return incident.id == req.params.id;
    });

    res.render("incidents/incident.ejs", {incident: incident});
});

router.post('/', (req, res) => {
    incidents.push({
        id: incidents.length + 1,
        name: req.body.name
    });

    res.redirect('back');
});

module.exports = router;