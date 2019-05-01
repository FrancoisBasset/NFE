const express = require('express')
const app = express();
const bodyParser = require('body-parser');

require('./sentry')(app);

app.listen(process.env.PORT || 81, () => {
    console.log('Back office started on port 81');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', express.static('./public'));

var connected = false;

app.get('/', (req, res, next) => {
    if (!connected) {
        res.redirect('/login');
    } else {
        res.render('index.ejs');
    }
});

app.get('/login', (req, res) => {
    if (connected) {
        res.redirect('/');
    } else {
        res.render('login.ejs');
    }
});

app.post('/login', (req, res) => {
    if (req.body.id == 'a' && req.body.password == 'a') {
        connected = true;

        res.redirect('/');
    } else {
        res.redirect('/login');
    }
});

app.get('/logout', (req, res) => {
    connected = false;
    res.redirect('/');
});

var data = require('./Data');

app.get('/data', (req, res) => {
    res.json(data);
});

app.post('/data', (req, res) => {
    data.incidents.push(req.body);
    res.status(201).end();
});

app.use('/incidents', require('./routes/incidents'));
app.use('/interventions', require('./routes/interventions'));
app.use('/agents', require('./routes/agents'));
app.use('/holidays', require('./routes/holidays'));