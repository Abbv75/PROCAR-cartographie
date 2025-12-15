export const COUCHE_DE_DONNEES_LISTE = [
    {
        name: "Côte d'Ivoire",
        filePath: require("../assets/leaflet.shapefile/IvoryCoast.zip"),
        bound: [
            [4.3, -8.6],   // Sud-Ouest
            [10.7, -2.5]   // Nord-Est
        ],
        coordonnee: [7.54, -5.55]
    },
    {
        name: 'Burkina Faso',
        filePath: require('../assets/leaflet.shapefile/BF.zip')
    },
    {
        name: 'Mali',
        filePath: require('../assets/leaflet.shapefile/Mali.zip')
    },
    {
        name: 'Cameroun',
        filePath: require('../assets/leaflet.shapefile/Cameroun.zip'),
        bound: [
            [1.6, 8.4],
            [13.1, 16.2]
        ],
        coordonnee: [7.3696495, 12.3445856]
    },
    {
        name: 'Bénin',
        filePath: require('../assets/leaflet.shapefile/Benin.zip'),
        bound: [
            [6.2, 0.8],
            [12.5, 3.9]
        ],
        coordonnee: [9.3077, 2.3158]
    }
];