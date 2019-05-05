const express = require('express');
const router = express.Router({ mergeParams: true });

const global = require('./global');

router.use('/', express.static('./public'));

router.get('/', (req, res) => {
    const incident = global.getIncidentById(req.params.id);

    if (incident) {
        res.render('incidents/incident.ejs', { incident: incident});
    } else {
        res.render('incidents/notfound.ejs', { id: req.params.id});
    }
});

router.post('/', (req, res) => {
    if (req.body.delete) {
        global.removeIncident(req.body.id);

        res.redirect('/incidents');
    }

    if (req.body.validate) {
        global.validateIncident(req.body.id);

        res.redirect('/incidents');
    }
});

module.exports = router;