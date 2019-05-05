const express = require('express');
const router = express.Router();
const request = require('request');
const global = require('./global');
const bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', (req, res) => {
    const host = global.getHost(req.headers.host) + "/data";

    request.get(host, { json: true }, (e, r, body) => {
        if (e) {
            res.render('declaration_incidents.ejs', { types: [], error: 'Impossible de récupérer les types d\'incidents, Impossible de créer un incident, veuillez réessayer ultérieurement'});
        } else {
            res.render('declaration_incidents.ejs', { types: body.types });
        }
    });
});

router.post('/', (req, res) => {
    const host = global.getHost(req.headers.host) + "/data";

    request.get(host, { json: true}, (e, r, data) => {
        if (e) {
            res.render('declaration_incidents.ejs', { types: [], error: 'Impossible de créer un incident, veuillez réessayer ultérieurement'});
            return;
        }

        if (!global.incidentIsFilled(req.body)) {
            res.render('declaration_incidents.ejs', { types: data.types, error: 'Le formulaire n\'a pas été correctement renseigné'});
            return;
        }

        const id = data.incidents.length + 1;

        const incident = {
            id: id,
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
    
        request.post(host, { json: incident}, (e, r) => {
            if (e) {
                res.render('declaration_incidents.ejs', { types: [], error: 'Impossible de créer un incident, veuillez réessayer ultérieurement'});
            } else {
                res.render('declaration_incidents.ejs', { types: data.types, incident: incident});
            }
        });        
    });    
});

module.exports = router;