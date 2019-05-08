const express = require('express');
const router = express.Router({ mergeParams: true });

const global = require('./global');

router.use('/', express.static('./public'));

router.get('/', (req, res) => {
    const incident = global.getIncidentById(req.params.id);

    console.log(incident);

    if (incident) {
        res.render('incidents/incident.ejs', { incident: incident, hardwares: global.data.hardwares, priorities: global.data.priorities });
    } else {
        res.render('incidents/notfound.ejs', { id: req.params.id});
    }
});

router.post('/', (req, res) => {
    if (req.body.delete) {
        global.removeIncident(req.body.id);

        res.redirect('/incidents');
    }

    if (req.body.modify || req.body.validate) {
        var incident = {
            id: req.body.id,
            place: req.body.place,
            date: req.body.date,
            type: req.body.type,
            client: {
                name: req.body.name,
                phone: req.body.phone,
                mail: req.body.mail,
                comment: req.body.comment
            },
            validated: false
        };

        if (global.incidentIsFilled(req.body)) {
            if (req.body.validate) {
                if (global.interventionIsFilled(req.body)) {
                    global.modifyIncident(incident);
                    global.validateIncident(req);
                    res.redirect('back');
                } else {
                    res.render('incidents/incident.ejs', { types: global.data.types, incident: incident, hardwares: global.data.hardwares, error: 'Le formulaire n\'a pas été correctement renseigné' });
                }
            } else {
                global.modifyIncident(incident);
                res.render('incidents/incident.ejs', { types: global.data.types, incident: incident, hardwares: global.data.hardwares, success: 'Incident modifié'});
            }            
        } else {            
            res.render('incidents/incident.ejs', { types: global.data.types, incident: incident, hardwares: global.data.hardwares, error: 'Le formulaire n\'a pas été correctement renseigné' });
        }
    }
});

module.exports = router;