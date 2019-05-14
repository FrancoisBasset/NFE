const app = require('express')();

require('./utils/sentry')(app);

app.listen(process.env.PORT || 81, () => {
    console.log('Back office started on port 81');
});

app.use('/', require('./routes'));
app.use('/login', require('./routes/login'));
app.use('/logout', require('./routes/logout'));
app.use('/incidents', require('./routes/incidents'));
app.use('/interventions', require('./routes/interventions'));
app.use('/agents', require('./routes/agents'));
app.use('/holidays', require('./routes/holidays'));

////////////////////////////////////////////////

var data = require('./utils/Data');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/data', (req, res) => {
    res.json(data);
});

app.post('/data', (req, res) => {
    req.body.id = data.incidentsIDs;
    data.incidentsIDs++;

    data.incidents.push(req.body);
    res.status(201).end();
});