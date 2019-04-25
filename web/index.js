const express = require('express');
const app = express();
const request = require('request');
const sync_request = require('sync-request');

require('./sentry')(app);

app.listen(process.env.PORT || 80, () => {
    console.log('Web started on port 80');
});

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', express.static('./public'));

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.get('/declaration_incidents', (req, res) => {
    var host = '';
    if (req.headers.host == 'nfe.fr') {
        host = 'http://127.0.0.1/types';
    } else {
        host = 'https://nfe-web.herokuapp.com/types';
    }

    request.get(host, { json: true }, (e, r) => {
        res.render('declaration_incidents.ejs', { types: r.body.result});
    });
});

app.post('/declaration_incidents', (req, res) => {
    const data = getData(req.headers.host);

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

    sendIncident(incident, req.headers.host);

    res.render('remain_declaration.ejs', {incident: incident });
});

app.get('/types', (req, res) => {
    res.send({
        result: [
            {name: 'panne', text: 'Panne de courant'},
            {name: 'compteur_casse', text: 'Compteur cassé'},
            {name: 'compteur_bugge', text: 'Compteur buggé'},
            {name: 'sous_voltage', text: 'Sous-voltage'},
            {name: 'sur_voltage', text: 'Sur-voltage'},
            {name: 'pylone_casse', text: 'Pylone cassé'}
        ]
    });
});

function getData(host) {
    if (host == 'nfe.fr') {
        host = 'http://127.0.0.1:81/data';
    } else {
        host = 'https://nfe-backoffice.herokuapp.com/data';
    }
    
    const res = sync_request('get', host);
    return JSON.parse(res.getBody('utf8'));
}

function sendIncident(incident, host) {
    if (host == 'nfe.fr') {
        host = 'http://127.0.0.1:81/data';
    } else {
        host = 'https://nfe-backoffice.herokuapp.com/data';
    }
console.log(incident);
    sync_request('post', host, { json: incident});
}