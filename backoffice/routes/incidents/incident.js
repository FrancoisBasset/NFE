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
    if (req.body.modify) {
        const incident = {
            id: req.body.id,
            place: req.body.place,
            date: req.body.date,
            type: req.body.type,
            client: {
                name: req.body.name,
                phone: req.body.phone,
                mail: req.body.mail,
                comment: req.body.comment
            }
        };

        if (global.incidentIsFilled(req.body)) { 
            global.modifyIncident(incident);

            res.render('incidents/incident.ejs', { types: global.data.types, incident: incident, success: 'Incident enregistré'});
        } else {            
            res.render('incidents/incident.ejs', { types: global.data.types, incident: incident, error: 'Le formulaire n\'a pas été correctement renseigné' });
        }
    }

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