const express = require('express');
const app = express();

require('./utils/sentry')(app);

app.listen(process.env.PORT || 80, () => {
    console.log('Web started on port 80');
});

app.use('/', require('./routes'));