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
        Render(res, incident);
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
                    const hardwares = Global.Helper.GetAll('hardwares');

                    for (var hardware of req.body.hardwares) {
                        if (!hardwares.includes(hardware)) {
                            Global.Helper.Add('hardwares', hardware);
                        }
                    }

                    Global.IncidentHelper.Modify(incident);
                    Global.IncidentHelper.Validate(req.body);
                    
                    res.redirect('back');
                } else {
                    Render(res, incident, {
                        error: 'Le formulaire n\'a pas été correctement renseigné'
                    });
                }
            } else {
                Global.IncidentHelper.Modify(incident);

                Render(res, incident, {
                    success: 'Incident modifié'
                });
            }            
        } else {            
            Render(res, incident, {
                error: 'Le formulaire n\'a pas été correctement renseigné'
            });
        }
    }
});

function Render(res, incident, more) {
    var datas = {
        incident: incident,
        types: Global.Helper.GetAll('types'),
        hardwares: Global.Helper.GetAll('hardwares'),
        priorities: Global.Helper.GetAll('priorities'),
        agents: Global.Helper.GetAll('agents'),
    };

    Object.assign(datas, more);

    res.render('incidents/incident.ejs', datas);
}

module.exports = router;