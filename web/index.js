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
    var host = '';

    if (req.headers.host == 'nfe.fr') {
        host = 'http://127.0.0.1:81';
    } else {
        host = 'https://nfe-backoffice.herokuapp.com';
    }

    res.render('index.ejs', { host: host});
});

app.get('/declaration_incidents', (req, res) => {
    const data = getData(req.headers.host);

    //request.get(host, { json: true }, (e, r) => {
        res.render('declaration_incidents.ejs', { types: data.types });
    //});
});

app.post('/declaration_incidents', (req, res) => {
    const data = getData(req.headers.host);

    const id = data.incidents.length + 1;

    if (!incidentIsFilled(req.body)) {
        res.render('declaration_incidents.ejs', { types: data.types, incorrect: true});
        return;
    }

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

    res.render('declaration_incidents.ejs', { types: data.types, incident: incident});
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
    
    sync_request('post', host, { json: incident});
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