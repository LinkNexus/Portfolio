<?php

return [
    'contact' => [
        'name' => 'Nom',
        'email' => 'Addresse Mail',
        'message' => 'Ton message détaillé',
        'details' => 'Détails à propos de toi',
        'send' => 'Envoyer',
        'errors' => [
            'name' => [
                'pattern' => "Le nom ne doit contenir que des lettres, des chiffres, des tirets bas et des tirets.",
                'min' => "Le nom doit être suffisamment descriptif et comporter au moins 5 caractères."
            ]
        ]
    ],
    'email' => [
        'sent' => 'Vôtre Message a bien été envoyé',
    ]
];