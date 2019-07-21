module.exports = {
    IncidentIsFilled: body => {
        if (
            body.date.trim() == '' ||
            body.region.trim() == '' ||
            body.name.trim() == '' ||
            body.phone.trim() == '' || isNaN(body.phone.trim()) || body.phone.length != 10 ||
            body.mail.trim() == ''
        ) {
            return false;
        }

        return true;
    }
};