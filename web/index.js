const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const request = require('request');

require('./public/js/sentry')(app);

app.listen(80, 'nfe.fr', () => {
    console.log('Web started on port 80');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', express.static('./public'));

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.get('/declaration_incidents', (req, res) => {
    request.get('http://127.0.0.1/types', { json: true }, (e, r) => {
        res.render('declaration_incidents.ejs', { types: r.body.result});
    });
});

app.post('/declaration_incidents', (req, res) => {
    const incident = {
        place: req.body.place,
        date: req.body.date,
        type: req.body.type
    };

    const client = {
        name: req.body.name,
        phone_number: req.body.phone_number,
        mail_address: req.body.mail_address,
        comment: req.body.comment
    };

    res.render('remain_declaration.ejs', {incident: incident, client: client});
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