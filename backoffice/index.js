const express = require('express')
const app = express();
const bodyParser = require('body-parser');

require('./sentry')(app);

app.listen(81, () => {
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
    console.log(req.body);

    if (req.body.email == 'a@a.fr' && req.body.id == 'a' && req.body.password == 'a') {
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

app.use('/incidents', require('./routes/incidents'));
app.use('/interventions', require('./routes/interventions'));
app.use('/agents', require('./routes/agents'));
app.use('/holidays', require('./routes/holidays'));