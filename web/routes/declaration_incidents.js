const router = require('express').Router();
const request = require('request');
const Global = require('../utils/global');
const bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', (req, res) => {
    const host = Global.GetHost(req.headers.host) + '/data';

    request.get(host, { json: true }, (e, r, body) => {
        if (e) {
            res.render('declaration_incidents.ejs', {
                types: [],
                error: 'Impossible de récupérer les types d\'incidents, Impossible de créer un incident, veuillez réessayer ultérieurement'
            });
        } else {
            res.render('declaration_incidents.ejs', {
                types: body.types
            });
        }
    });
});

router.post('/', (req, res) => {
    const host = Global.GetHost(req.headers.host) + '/data';

    request.get(host, { json: true}, (e, r, data) => {
        if (e) {
            res.render('declaration_incidents.ejs', {
                types: [],
                body: req.body,
                error: 'Impossible de créer un incident, veuillez réessayer ultérieurement'
            });

            return;
        }

        if (!Global.IncidentIsFilled(req.body)) {
            res.render('declaration_incidents.ejs', {
                types: data.types,
                body: req.body,
                error: 'Le formulaire n\'a pas été correctement renseigné'
            });

            return;
        }
    
        request.post(host, { json: req.body}, (e, r) => {
            if (e) {
                res.render('declaration_incidents.ejs', {
                    types: [],
                    body: req.body,
                    error: 'Impossible de créer un incident, veuillez réessayer ultérieurement'
                });
            } else {
                res.render('declaration_incidents.ejs', {
                    types: data.types,
                    body: req.body
                });
            }
        });        
    });    
});

module.exports = router;