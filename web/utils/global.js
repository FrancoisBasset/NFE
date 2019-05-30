module.exports = {
    GetHost: (host, mobile) => {
        if (host == 'https://nfe-web.herokuapp.com') {
            return 'https://nfe-backoffice.herokuapp.com';
        } else {
            if (!mobile) {
                return 'http://localhost:81';
            } else {
                if (host == 'localhost') {
                    return 'http://localhost:81';
                } else {
                    return 'http://localhost:3001';
                }
            }
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