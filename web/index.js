const express = require('express');
const app = express();
const request = require('request');

require('./sentry')(app);

app.listen(process.env.PORT || 80, () => {
    console.log('Web started on port 80');
});

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', express.static('./public'));

app.get('/', (req, res) => {
    var host = getHost(req.headers.host);

    request.get(host, (e, r) => {
        res.render('index.ejs', { host: host, back_office: !e});
    });    
});

app.get('/declaration_incidents', (req, res) => {
    const host = getHost(req.headers.host) + "/data";

    request.get(host, { json: true }, (e, r, body) => {
        if (e) {
            res.render('declaration_incidents.ejs', { types: [], error: 'Impossible de récupérer les types d\'incidents, Impossible de créer un incident, veuillez réessayer ultérieurement'});
            return;
        }
        
        res.render('declaration_incidents.ejs', { types: body.types });
    });
});

app.post('/declaration_incidents', (req, res) => {
    const host = getHost(req.headers.host) + "/data";

    request.get(host, { json: true}, (e, r, data) => {
        if (e) {
            res.render('declaration_incidents.ejs', { types: [], error: 'Impossible de créer un incident, veuillez réessayer ultérieurement'});
            return;
        }

        if (!incidentIsFilled(req.body)) {
            res.render('declaration_incidents.ejs', { types: data.types, incorrect: true});
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
                return;
            }

            res.render('declaration_incidents.ejs', { types: data.types, incident: incident});
        });        
    });    
});

function getHost(host) {
    if (host == 'nfe.fr') {
        return 'http://nfe.fr:81';
    } else {
        return 'https://nfe-backoffice.herokuapp.com';
    }
}

function incidentIsFilled(body) {
    if (
        body.place.trim() == '' ||
        body.date.trim() == '' ||
        body.type.trim() == '' ||
        body.name.trim() == '' ||
        body.phone.trim() == '' || isNaN(body.phone.trim()) || body.phone.length != 10 ||
        body.mail.trim() == '' ||
        body.comment.trim() == ''
    ) {
        return false;
    }

    return true;
}