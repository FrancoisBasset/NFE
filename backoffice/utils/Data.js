const types = [
    'Panne de courant',
    'Compteur cassé',
    'Compteur buggé',
    'Sous-voltage',
    'Sur-voltage',
    'Pylone cassé'
];

const hardwares = [
    'Pince',
    'Pile',
    'Batterie',
    'Fils',
    'Ampèremetre'
];

const priorities = [
    'Simple',
    'Mineur',
    'Important',
    'Critique',
    'Blocage'
];

const agents = [
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
];

module.exports = {
    incidentsIDs: 10,
    interventionsIDs: 1,

    types: types,

    priorities: priorities,

    hardwares: hardwares,

    interventions: [],

    agents: agents,

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
            document: 'Coder_proprement.pdf',
            done: null
        },
        {
            id: 2,
            agent: 2,
            beginning_date: '2019-07-01',
            end_date: '2019-07-20',
            type: 'Congé maladie',
            document: 'Programming_challenges.pdf',
            done: null,
        }
    ],

    agents_form: [
        {
            'label': 'Prénom :',
            'universal': {
                'category': 'input',
                'label': 'text'
            },
            'options': [
                {
                    'label': 'name',
                    'value': 'firstname'
                }
            ]
        },
        {
            'label': 'Nom :',
            'universal': {
                'category': 'input',
                'label': 'text'
            },
            'options': [
                {
                    'label': 'name',
                    'value': 'lastname'
                }
            ]
        },
        {
            'label': '',
            'universal': {
                'category': 'input',
                'label': 'submit'
            },
            'options': [
                {
                    'label': 'name',
                    'value': 'create'
                },
                {
                    'label': 'value',
                    'value': 'Créer l\'agent'
                }
            ]
        }
    ],

    incidents_form: [
        {
            'label': 'Lieu de l\'incident :',
            'universal': {
                'category': 'input',
                'label': 'text'
            },
            'options': [
                {
                    'label': 'name',
                    'value': 'place'
                }
            ]
        },
        {
            'label': 'Date d\'apparition :',
            'universal': {
                'category': 'input',
                'label': 'date'
            },
            'options': [
                {
                    'label': 'name',
                    'value': 'date'
                }
            ]
        },
        {
            'label': 'Type d\'incident :',
            'universal': {
                'category': 'select',
                'label': ''
            },
            'options': [
                {
                    'label': 'name',
                    'value': 'type'
                }
            ],
            'data': types
        },
        {
            'label': 'Nom du client :',
            'universal': {
                'category': 'input',
                'label': 'text'
            },
            'options': [
                {
                    'label': 'name',
                    'value': 'client'
                }
            ]
        },
        {
            'label': 'Numéro de téléphone :',
            'universal': {
                'category': 'input',
                'label': 'text'
            },
            'options': [
                {
                    'label': 'name',
                    'value': 'phone'
                }
            ]
        },
        {
            'label': 'Adresse mail :',
            'universal': {
                'category': 'input',
                'label': 'mail'
            },
            'options': [
                {
                    'label': 'name',
                    'value': 'mail'
                }
            ]
        },
        {
            'label': 'Commentaire :',
            'universal': {
                'category': 'textarea',
                'label': ''
            },
            'options': [
                {
                    'label': 'name',
                    'value': 'comment'
                }
            ]
        },
        {
            'label': '',
            'universal': {
                'category': 'input',
                'label': 'submit'
            },
            'options': [
                {
                    'label': 'name',
                    'value': 'create'
                },
                {
                    'label': 'value',
                    'value': 'Créer l\'incident'
                }
            ]
        }
    ],
    holidays_form: [
        {
            'label': 'Date de début :',
            'universal': {
                'category': 'input',
                'label': 'date'
            },
            'options': [
                {
                    'label': 'name',
                    'value': 'beginning_date'
                }
            ]
        },
        {
            'label': 'Date de fin :',
            'universal': {
                'category': 'input',
                'label': 'date'
            },
            'options': [
                {
                    'label': 'name',
                    'value': 'end_date'
                }
            ]
        },
        {
            'label': 'Type de congé :',
            'universal': {
                'category': 'select',
                'label': ''
            },
            'options': [
                {
                    'label': 'name',
                    'value': 'type'
                }
            ],
            data: [
                'Congé payé',
                'Congé maladie'
            ]
        },
        {
            'label': 'Justificatif :',
            'universal': {
                'category': 'input',
                'label': 'file'
            },
            'options': [
                {
                    'label': 'name',
                    'value': 'document'
                }
            ]
        },
        {
            'label': '',
            'universal': {
                'category': 'input',
                'label': 'submit'
            },
            'options': [
                {
                    'label': 'name',
                    'value': 'create'
                },
                {
                    'label': 'value',
                    'value': 'Créer le congé'
                }
            ]
        }
    ],
    interventions_form: [
        {
            'label': 'Lieu :',
            'universal': {
                'category': 'input',
                'label': 'text'
            },
            'options': [
                {
                    'label': 'name',
                    'value': 'place'
                }
            ]
        },
        {
            'label': 'Type d\'intervention :',
            'universal': {
                'category': 'select',
                'label': ''
            },
            'options': [
                {
                    'label': 'name',
                    'value': 'type'
                }
            ],
            data: types
        },
        {
            'label': 'Date de début :',
            'universal': {
                'category': 'input',
                'label': 'date'
            },
            'options': [
                {
                    'label': 'name',
                    'value': 'beginning_date'
                }
            ]
        },
        {
            'label': 'Date de fin :',
            'universal': {
                'category': 'input',
                'label': 'date'
            },
            'options': [
                {
                    'label': 'name',
                    'value': 'end_date'
                }
            ]
        },
        {
            'label': 'Matériels :',
            'universal': {
                'category': 'select',
                'label': ''
            },
            'options': [
                {
                    'label': 'name',
                    'value': 'hardware'
                }
            ],
            data: hardwares
        },
        {
            'label': 'Priorité :',
            'universal': {
                'category': 'select',
                'label': ''
            },
            'options': [
                {
                    'label': 'name',
                    'value': 'priority'
                }
            ],
            data: priorities
        },
        {
            'label': 'Agents :',
            'universal': {
                'category': 'select',
                'label': ''
            },
            'options': [
                {
                    'label': 'name',
                    'value': 'agent'
                }
            ],
            data: agents.map(a => {
                return a.firstname + " " + a.lastname;
            })
        },
        {
            'label': '',
            'universal': {
                'category': 'input',
                'label': 'submit'
            },
            'options': [
                {
                    'label': 'name',
                    'value': 'create'
                },
                {
                    'label': 'value',
                    'value': 'Créer l\'intervention'
                }
            ]
        }
    ]
};