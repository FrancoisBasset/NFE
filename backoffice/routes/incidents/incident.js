const express = require('express');
const router = express.Router({ mergeParams: true });
const bodyParser = require('body-parser');
const Global = require('../../utils/global');

router.use('/', express.static('./public'));
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', (req, res) => {
    const incident = Global.IncidentHelper.GetById(req.params.id);

    if (incident) {
        res.render('incidents/incident.ejs', {
            incident: incident,
            hardwares: Global.Helper.GetAll('hardwares')
        });
    } else {
        res.render('notfound.ejs', {
            resource_type: 'incident',
            id: req.params.id,
        });
    }
});

router.post('/', (req, res) => {
    if (req.body.delete) {
        Global.IncidentHelper.Delete(req.body.id);

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
            done: false
        };

        if (Global.IncidentHelper.IsFilled(req.body)) {
            if (req.body.validate) {
                if (Global.InterventionHelper.IsFilled(req.body)) {
                    Global.IncidentHelper.Modify(incident);
                    Global.IncidentHelper.Validate(req.body);
                    
                    res.redirect('back');
                } else {
                    res.render('incidents/incident.ejs', {
                        types: Global.Helper.GetAll('types'),
                        incident: incident,
                        hardwares: Global.Helper.GetAll('hardwares'),
                        error: 'Le formulaire n\'a pas été correctement renseigné'
                    });
                }
            } else {
                Global.IncidentHelper.Modify(incident);

                res.render('incidents/incident.ejs', {
                    types: Global.Helper.GetAll('types'),
                    incident: incident,
                    hardwares: Global.Helper.GetAll('hardwares'),
                    success: 'Incident modifié'
                });
            }            
        } else {            
            res.render('incidents/incident.ejs', {
                types: Global.Data.types,
                incident: incident,
                hardwares: Global.Data.hardwares,
                error: 'Le formulaire n\'a pas été correctement renseigné'
            });
        }
    }
});

module.exports = router;