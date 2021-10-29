map.on('load', function () {
    map.addSource('Religious Demography', {
        type: 'vector',
        url: 'mapbox://edman.BRI_Religion_MTS',
    });
    map.addLayer({
        'id': 'Religious Demography',
        'type': 'fill',
        'source': 'Religious Demography',
        'maxzoom': 5.99,
        'source-layer': 'BRI_Religion_Layer',
        'paint': {
            'fill-antialias': true,
            'fill-opacity': 1,
            'fill-outline-color':
                [
                    'case',
                    ['boolean', ['feature-state', 'hover'], false],
                    "#000000",
                    ['boolean', ['feature-state', 'click'], false],
                    "#000000",
                    "hsla(0, 0%, 0%, 20%)",
                ],
            'fill-color': [
                'case',
                ['boolean', ['feature-state', 'hover'], false],
                "hsla(0, 0%, 0%, 0.4)",
                ['boolean', ['feature-state', 'click'], false],
                "hsla(0, 0%, 0%, 0.4)",
                ["match",
                    ["get", "HighRelig"],
                    ["Muslims(Sunni)"],
                    [
                        "interpolate",
                        ["linear"],
                        ["get", "Numerical"],
                        20,
                        "hsla(100, 100%, 23%, 0.1)",
                        100,
                        "hsla(100, 100%, 23%, 0.8)",
                    ],
                    ["Protestants"],
                    [
                        "interpolate",
                        ["linear"],
                        ["get", "Numerical"],
                        20,
                        "hsla(239, 89%, 32%, 0.2)",
                        100,
                        "hsla(239, 89%, 32%, 0.8)",
                    ],
                    [
                        "Buddhists(Tibetan Buddhism)"
                    ],
                    [
                        "interpolate",
                        ["linear"],
                        ["get", "Numerical"],
                        20,
                        "hsla(60, 100%, 50%, 0.4)",
                        100,
                        "hsla(60, 100%, 50%, 0.8)"
                    ],
                    ["East Asian Religiosity"],
                    [
                        "interpolate",
                        ["linear"],
                        ["get", "Numerical"],
                        20,
                        "hsla(339, 100%, 56%, 0.2)",
                        100,
                        "#ff1f6d"
                    ],
                    ["Hindus"],
                    [
                        "interpolate",
                        ["linear"],
                        ["get", "Numerical"],
                        20,
                        "hsla(30, 100%, 60%, 0.2)",
                        100,
                        "hsla(30, 100%, 60%, 0.8)"
                    ],
                    ["Other", "Mormon"],
                    [
                        "interpolate",
                        ["linear"],
                        ["get", "Numerical"],
                        20,
                        "hsla(201, 100%, 64%, 0.2)",
                        100,
                        "hsla(201, 100%, 64%, 0.8)"
                    ],
                    ["Daoists"],
                    [
                        "interpolate",
                        ["linear"],
                        ["get", "Numerical"],
                        20,
                        "hsla(356, 89%, 17%, 0.2)",
                        100,
                        "hsla(356, 89%, 17%, 0.8)"
                    ],
                    ["Irreligionists"],
                    [
                        "interpolate",
                        ["linear"],
                        ["get", "Numerical"],
                        30,
                        "hsla(0, 0%, 100%, 0.7)",
                        100,
                        "hsla(0, 0%, 100%, 0.8)"
                    ],
                    ["Oriental orthodox"],
                    [
                        "interpolate",
                        ["linear"],
                        ["get", "Numerical"],
                        30,
                        "hsla(273, 43%, 65%, 0.7)",
                        100,
                        "hsla(273, 43%, 65%, 0.8)"
                    ],
                    ["Catholics"],
                    [
                        "interpolate",
                        ["linear"],
                        ["get", "Numerical"],
                        30,
                        "hsla(285, 92%, 9%, 0.5)",
                        100,
                        "hsla(286, 91%, 9%, 0.8)"
                    ],
                    ["Buddhists(Theravada)"],
                    [
                        "interpolate",
                        ["linear"],
                        ["get", "Numerical"],
                        30,
                        "hsla(14, 77%, 54%, 0.5)",
                        100,
                        "hsla(14, 77%, 54%, 0.8)"
                    ],
                    ["Eastern orthodox"],
                    [
                        "interpolate",
                        ["linear"],
                        ["get", "Numerical"],
                        30,
                        "hsla(200, 67%, 28%, 0.5)",
                        100,
                        "hsla(200, 66%, 28%, 0.8)"
                    ],
                    [
                        "Muslims(Non-denominational)"
                    ],
                    [
                        "interpolate",
                        ["linear"],
                        ["get", "Numerical"],
                        30,
                        "hsla(333, 19%, 44%, 0.5)",
                        100,
                        "hsla(333, 19%, 44%, 0.8)"
                    ],
                    ["Buddhists(Mahayana)"],
                    [
                        "interpolate",
                        ["linear"],
                        ["get", "Numerical"],
                        30,
                        "hsla(28, 88%, 59%, 0.5)",
                        100,
                        "hsla(28, 88%, 59%, 0.8)"
                    ],
                    ["Muslims(Shia)"],
                    [
                        "interpolate",
                        ["linear"],
                        ["get", "Numerical"],
                        30,
                        "hsla(115, 62%, 71%, 0.5)",
                        100,
                        "hsla(115, 62%, 71%, 0.8)"
                    ],
                    ["Muslims(Ibadi)"],
                    "hsla(131, 11%, 49%, 0.8)",
                    "#000000"
                ],
            ]
        },
        'layout': {
            'visibility': 'visible'
        }
    }, 'state-label')

    map.loadImage('https://brinfaithmap.space/img/TTS_S.png', function (error0, image0) {
        if (error0) throw error0;
        map.addImage("TTS_S", image0, {
        });

        map.addLayer({
            "id": "TTS_S",
            "type": "fill",
            "source": "Religious Demography",
            'filter': ['==', 'SecRelig', 'East Asian Religiosity'],
            'layout': { 'visibility': 'none' },
            'paint': {
                'fill-pattern': 'TTS_S',
                'fill-opacity': 0.7,
            },
            'source-layer': 'BRI_Religion_Layer',

        }, 'state-label');
    });
    map.loadImage('https://brinfaithmap.space/img/DAO_S.png', function (error0, image0) {
        if (error0) throw error0;
        map.addImage("DAO_S", image0, {
        });

        map.addLayer({
            "id": "DAO_S",
            "type": "fill",
            "source": "Religious Demography",
            'filter': ['==', 'SecRelig', 'Daoists'],
            'layout': { 'visibility': 'none' },
            'paint': {
                'fill-pattern': 'DAO_S',
                'fill-opacity': 0.7,
            },
            'source-layer': 'BRI_Religion_Layer',

        }, 'state-label');
    });
    map.loadImage('https://brinfaithmap.space/img/BUDTB_S.png', function (error0, image0) {
        if (error0) throw error0;
        map.addImage("BUDTB_S", image0, {
        });

        map.addLayer({
            "id": "BUDTB_S",
            "type": "fill",
            "source": "Religious Demography",
            'filter': ['==', 'SecRelig', 'Buddhists(Tibetan Buddhism)'],
            'layout': { 'visibility': 'none' },
            'paint': {
                'fill-pattern': 'BUDTB_S',
                'fill-opacity': 0.7,
            },
            'source-layer': 'BRI_Religion_Layer',

        }, 'state-label');
    });
    map.loadImage('https://brinfaithmap.space/img/BUDT_S.png', function (error0, image0) {
        if (error0) throw error0;
        map.addImage("BUDT_S", image0, {
        });

        map.addLayer({
            "id": "BUDT_S",
            "type": "fill",
            "source": "Religious Demography",
            'filter': ['==', 'SecRelig', 'Buddhists(Theravada)'],
            'layout': { 'visibility': 'none' },
            'paint': {
                'fill-pattern': 'BUDT_S',
                'fill-opacity': 0.7,
            },
            'source-layer': 'BRI_Religion_Layer',

        }, 'state-label');
    });
    map.loadImage('https://brinfaithmap.space/img/BUDM_S.png', function (error0, image0) {
        if (error0) throw error0;
        map.addImage("BUDM_S", image0, {
        });

        map.addLayer({
            "id": "BUDM_S",
            "type": "fill",
            "source": "Religious Demography",
            'filter': ['==', 'SecRelig', "Buddhists(Mahayana)"],
            'layout': { 'visibility': 'none' },
            'paint': {
                'fill-pattern': 'BUDM_S',
                'fill-opacity': 0.7,
            },
            'source-layer': 'BRI_Religion_Layer',

        }, 'state-label');
    });
    map.loadImage('https://brinfaithmap.space/img/HIN_S.png', function (error0, image0) {
        if (error0) throw error0;
        map.addImage("HIN_S", image0, {
        });

        map.addLayer({
            "id": "HIN_S",
            "type": "fill",
            "source": "Religious Demography",
            'filter': ['==', 'SecRelig', "Hindus"],
            'layout': { 'visibility': 'none' },
            'paint': {
                'fill-pattern': 'HIN_S',
                'fill-opacity': 0.7,
            },
            'source-layer': 'BRI_Religion_Layer',

        }, 'state-label');
    });
    map.loadImage('https://brinfaithmap.space/img/ISLSU_S.png', function (error0, image0) {
        if (error0) throw error0;
        map.addImage("ISLSU_S", image0, {
        });

        map.addLayer({
            "id": "ISLSU_S",
            "type": "fill",
            "source": "Religious Demography",
            'filter': ['==', 'SecRelig', 'Muslims(Sunni)'],
            'layout': { 'visibility': 'none' },
            'paint': {
                'fill-pattern': 'ISLSU_S',
                'fill-opacity': 0.7,
            },
            'source-layer': 'BRI_Religion_Layer',

        }, 'state-label');
    });
    map.loadImage('https://brinfaithmap.space/img/ISLSH_S.png', function (error0, image0) {
        if (error0) throw error0;
        map.addImage("ISLSH_S", image0, {
        });

        map.addLayer({
            "id": "ISLSH_S",
            "type": "fill",
            "source": "Religious Demography",
            'filter': ['==', 'SecRelig', 'Muslims(Shia)'],
            'layout': { 'visibility': 'none' },
            'paint': {
                'fill-pattern': 'ISLSH_S',
                'fill-opacity': 0.7,
            },
            'source-layer': 'BRI_Religion_Layer',

        }, 'state-label');
    });
    map.loadImage('https://brinfaithmap.space/img/CATH_S.png', function (error0, image0) {
        if (error0) throw error0;
        map.addImage("CATH_S", image0, {
        });

        map.addLayer({
            "id": "CATH_S",
            "type": "fill",
            "source": "Religious Demography",
            'filter': ['==', 'SecRelig', 'Catholics'],
            'layout': { 'visibility': 'none' },
            'paint': {
                'fill-pattern': 'CATH_S',
                'fill-opacity': 0.7,
            },
            'source-layer': 'BRI_Religion_Layer',

        }, 'state-label');
    });
    map.loadImage('https://brinfaithmap.space/img/PRO_S.png', function (error0, image0) {
        if (error0) throw error0;
        map.addImage("PRO_S", image0, {
        });

        map.addLayer({
            "id": "PRO_S",
            "type": "fill",
            "source": "Religious Demography",
            'filter': ['==', 'SecRelig', 'Protestants'],
            'layout': { 'visibility': 'none' },
            'paint': {
                'fill-pattern': 'PRO_S',
                'fill-opacity': 0.7,
            },
            'source-layer': 'BRI_Religion_Layer',

        }, 'state-label');
    });
    map.loadImage('https://brinfaithmap.space/img/EO_S.png', function (error0, image0) {
        if (error0) throw error0;
        map.addImage("EO_S", image0, {
        });

        map.addLayer({
            "id": "EO_S",
            "type": "fill",
            "source": "Religious Demography",
            'filter': ['==', 'SecRelig', 'Eastern orthodox'],
            'layout': { 'visibility': 'none' },
            'paint': {
                'fill-pattern': 'EO_S',
                'fill-opacity': 0.7,
            },
            'source-layer': 'BRI_Religion_Layer',

        }, 'state-label');
    });
    map.loadImage('https://brinfaithmap.space/img/IR_S.png', function (error0, image0) {
        if (error0) throw error0;
        map.addImage("IR_S", image0, {
        });

        map.addLayer({
            "id": "IR_S",
            "type": "fill",
            "source": "Religious Demography",
            'filter': ['==', 'SecRelig', 'Irreligionists'],
            'layout': { 'visibility': 'none' },
            'paint': {
                'fill-pattern': 'IR_S',
                'fill-opacity': 0.7,
            },
            'source-layer': 'BRI_Religion_Layer',

        }, 'state-label');
    });
    map.loadImage('https://brinfaithmap.space/img/ETR_S.png', function (error0, image0) {
        if (error0) throw error0;
        map.addImage("ETR_S", image0, {
        });

        map.addLayer({
            "id": "ETR_S",
            "type": "fill",
            "source": "Religious Demography",
            'filter': [
                "all",
                [
                    "match",
                    ["get", "SecRelig"],
                    [
                        "Other",
                        "Mormon"
                    ],
                    true,
                    false
                ]
            ],
            'layout': { 'visibility': 'none' },
            'paint': {
                'fill-pattern': 'ETR_S',
                'fill-opacity': 0.7,
            },
            'source-layer': 'BRI_Religion_Layer',

        }, 'state-label');
    });
})