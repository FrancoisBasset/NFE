const router = require('express').Router();
const request = require('request');
const Global = require('../utils/global');
const bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

global.regions = [];

router.get('/', (req, res) => {
    const url = 'https://nfe-official.herokuapp.com/externals/regions';

    request.get(url, { json: true }, (e, r, body) => {
        global.regions = body.regions;

        if (e) {
            res.render('declaration_incidents.ejs', {
                regions: global.regions,
                error: 'Impossible de joindre l\'API, veuillez réessayer ultérieurement'
            });
        } else {
            res.render('declaration_incidents.ejs', {
                regions: global.regions
            });
        }
    });
});

router.post('/', (req, res) => {
    if (!Global.IncidentIsFilled(req.body)) {
        res.render('declaration_incidents.ejs', {
            regions: global.regions,
            body: req.body,
            error: 'Le formulaire n\'a pas été correctement renseigné'
        });

        return;
    }

    const url = 'https://nfe-official.herokuapp.com/externals/incident';

    req.body.region = {
        id: parseInt(req.body.region)
    };

    request.post(url, { json: req.body}, (e, r) => {
        if (e) {
            res.render('declaration_incidents.ejs', {
                regions: [],
                body: req.body,
                error: 'Impossible de créer un incident, veuillez réessayer ultérieurement'
            });
        } else {
            res.render('declaration_incidents.ejs', {
                regions: regions,
                body: req.body
            });
        }
    });    
});

module.exports = router;