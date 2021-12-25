var lyr_osm = new ol.layer.Tile({
    title: 'OSM',
    type: 'base',
    visible: true,
    source: new ol.source.OSM()
});
//afficher un rendu de la carte
var mapView = new ol.View({
    center: ol.proj.transform([0, 0], 'EPSG:4326', 'EPSG:3857'),//transformer un pt [0,0] dans le  4326 vers lesystème 3857.
    zoom: 3 });
//tableau layerList
var layersList = [lyr_osm];

//utiliser les objets et les reliers a un objet
var map = new ol.Map({
    target: 'map',
    layers: layersList,
    view: mapView });


