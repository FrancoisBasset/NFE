const express = require('express');
const router = express.Router({ mergeParams: true });

router.use(require('../../utils/checkConnection'));

router.use('/:id', require('./incident'));

const global = require('./global');

router.get('/', (req, res) => {
    res.render('incidents/index.ejs', { incidents: global.data.incidents});
});

router.post('/', (req, res) => {
    if (req.body.delete_all) {
        if (req.body.incidents) {
            for (var id of req.body.incidents) {
                global.removeIncident(id);
            }
        }
    }
     
    if (req.body.delete) {
        global.removeIncident(req.body.id);
    }    
    
    res.redirect('back');
});

module.exports = router;