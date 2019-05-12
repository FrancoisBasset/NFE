const checker = function (req, res, next) {
    if (!req.session.connection) {
        res.redirect('/login');
        return;
    }
    next();
};

module.exports = checker;