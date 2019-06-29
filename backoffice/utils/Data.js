module.exports = {
    incidentsIDs: 10,
    interventionsIDs: 1,

    types: [
        'Panne de courant',
        'Compteur cassé',
        'Compteur buggé',
        'Sous-voltage',
        'Sur-voltage',
        'Pylone cassé'
    ],

    priorities: [
        'Simple',
        'Mineur',
        'Important',
        'Critique',
        'Blocage'
    ],

    hardwares: [
        'Pince',
        'Pile',
        'Batterie',
        'Fils',
        'Ampèremetre'
    ],

    interventions: [],

    agents: [
        {
            id: 1,
            firstname: 'Aleksandr',
            lastname: 'Gagarin',
            lat: 48.924400,
            lng: 2.360108
        },
        {
            id: 2,
            firstname: 'Anton',
            lastname: 'Bodganov',
            lat: 48.924400,
            lng: 2.360108
        },
        {
            id: 3,
            firstname: 'Grigori',
            lastname: 'Intelov',
            lat: 48.924400,
            lng: 2.360108
        },
        {
            id: 4,
            firstname: 'Igor',
            lastname: 'Nodejsov',
            lat: 48.924400,
            lng: 2.360108
        },
        {
            id: 5,
            firstname: 'Miron',
            lastname: 'Dotnetin',
            lat: 48.924400,
            lng: 2.360108
        },
        {
            id: 6,
            firstname: 'Nastya',
            lastname: 'Samsungina',
            lat: 48.924400,
            lng: 2.360108
        },
        {
            id: 7,
            firstname: 'Vladimir',
            lastname: 'Poutine',
            lat: 48.924400,
            lng: 2.360108
        },
        {
            id: 8,
            firstname: 'Yaroslav',
            lastname: 'Temperaturovitch',
            lat: 48.924400,
            lng: 2.360108
        }
    ],

    incidents: [
    {
        id: 1,
        place: 'Republique',
        date: '2019-05-05',
        type: 'Panne de courant',
        name: 'Jean',
        phone: '0123456789',
        mail: 'jean@mail.fr',
        comment: 'Ouais',
        done: false
    },
    {
        id: 2,
        place: 'Romorantin',
        date: '2019-05-05',
        type: 'Compteur cassé',
        name: 'Jacques',
        phone: '0123456789',
        mail: 'jacques@mail.fr',
        comment: 'Ouais',
        done: false
    },
    {
        id: 3,
        place: 'Saint-Gervais',
        date: '2019-05-05',
        type: 'Compteur buggé',
        name: 'René',
        phone: '0123456789',
        mail: 'rene@mail.fr',
        comment: 'Ouais',
        done: false
    },

    {
        id: 4,
        place: 'Menton',
        date: '2019-05-05',
        type: 'Sous-voltage',
        name: 'Edouard',
        phone: '0123456789',
        mail: 'edouard@mail.fr',
        comment: 'Ouais',
        done: false
    },
    {
        id: 5,
        place: 'Saint-Benoit',
        date: '2019-05-05',
        type: 'Sur-voltage',
        name: 'Philippe',
        phone: '0123456789',
        mail: 'philippe@mail.fr',
        comment: 'Ouais',
        done: false
    },
    {
        id: 6,
        place: 'Strasbourg',
        date: '2019-05-05',
        type: 'Pylone cassé',
        name: 'Pierre',
        phone: '0123456789',
        mail: 'pierre@mail.fr',
        comment: 'Ouais',
        done: false
    },

    {
        id: 7,
        place: 'Metz',
        date: '2019-05-05',
        type: 'Panne de courant',
        name: 'Denis',
        phone: '0123456789',
        mail: 'denis@mail.fr',
        comment: 'Ouais',
        done: false
    },
    {
        id: 8,
        place: 'Saint-Moret',
        date: '2019-05-05',
        type: 'Compteur cassé',
        name: 'Marcel',
        phone: '0123456789',
        mail: 'marcel@mail.fr',
        comment: 'Ouais',
        done: false
    },
    {
        id: 9,
        place: 'Reims',
        date: '2019-05-05',
        type: 'Compteur buggé',
        name: 'Vladimir',
        phone: '0123456789',
        mail: 'vladimir@mail.fr',
        comment: 'Ouais',
        done: false
    }
    ],

    holidays: [
        {
            id: 1,
            agent: 1,
            beginning_date: '2019-07-01',
            end_date: '2019-07-20',
            type: 'Congé payé',
            document: "Coder_proprement.pdf",
            done: null
        },
        {
            id: 2,
            agent: 2,
            beginning_date: '2019-07-01',
            end_date: '2019-07-20',
            type: 'Congé maladie',
            document: "Programming_challenges.pdf",
            done: null,
        }
    ]
};