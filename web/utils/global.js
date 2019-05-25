module.exports = {
    GetHost: host => {
        if (host == 'nfe.fr') {
            return 'http://nfe.fr:81';
        } else {
            return 'https://nfe-backoffice.herokuapp.com';
        }
    },

    IncidentIsFilled: body => {
        if (
            body.place.trim() == '' ||
            body.date.trim() == '' ||
            body.type.trim() == '' ||
            body.name.trim() == '' ||
            body.phone.trim() == '' || isNaN(body.phone.trim()) || body.phone.length != 10 ||
            body.mail.trim() == ''
        ) {
            return false;
        }

        return true;
    }
};