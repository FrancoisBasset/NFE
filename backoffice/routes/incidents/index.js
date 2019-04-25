const express = require('express')
const router = express.Router();

var data = require('../../Data');

router.get('/', (req, res) => {
    console.log(data.incidents);
    res.render('incidents/index.ejs', { incidents: data.incidents});
});

router.get('/:id', (req, res) => {
    const incident = getIncidentById(req.params.id);

    if (incident) {
        res.render('incidents/incident.ejs', { incident: incident});
    } else {
        res.render('incidents/notfound.ejs', { id: req.params.id});
    }
});

router.post('/', (req, res) => {
    if (req.body.add_submit) {
        data.incidents.push({
            id: data.incidents.length + 1,
            name: req.body.name
        });
    } else if (req.body.delete_submit) {
        if (req.body.incidents) {
            for (var id of req.body.incidents) {
                data.incidents = excludeIncident(id);
            }
        } else {
            data.incidents = excludeIncident(req.body.id);

            res.redirect('/incidents');
            return;
        }        
    } else if (req.body.validate_submit) {
        if (req.body.incidents) {
            for (var id of req.body.incidents) {
                validateIncident(id);
            }
        } else if (req.body.id) {
            validateIncident(req.body.id);

            res.redirect('/incidents');
            return;
        }
    }
    
    res.redirect('back');
});

function validateIncident(id) {
    var incident = getIncidentById(id);

    data.incidents = excludeIncident(id);
    data.interventions.push(incident);
}

function getIncidentById(id) {
    return data.incidents.filter((incident) => {
        return incident.id == id;
    })[0];
}

function excludeIncident(id) {
    return data.incidents.filter((incident) => {
        return incident.id != id;
    });
}

module.exports = router;