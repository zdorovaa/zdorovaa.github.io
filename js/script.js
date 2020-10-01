// Creating map options
var mapOptions = {
    center: [44.954901, 34.101592],
    zoom: 12
}

// Creating a map object
var map = new L.map('map', mapOptions);

// Creating a Layer object
var layer = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');

// Adding layer to the map
map.addLayer(layer);

// Creating a Marker
var markerOptions = {
    title: "Нажмите, чтобы узнать что это за место",
    clickable: true,
    draggable: false
 }

// Creating a marker
var cfu = L.marker([44.9364, 34.1342], markerOptions);
var cheel = L.marker([44.946384, 34.098083], markerOptions);
var shava = L.marker([44.973431, 34.134666], markerOptions);
var rectal = L.marker([45.006412, 34.055088], markerOptions);

var vodohranka = L.polygon([    
    [44.933542, 34.138455],
    [44.937141, 34.148344],
    [44.910520, 34.170367],
    [44.904755, 34.162045]
]);

// Adding marker to the map
cfu.addTo(map);
shava.addTo(map);
cheel.addTo(map);
rectal.addTo(map);
vodohranka.addTo(map);

// Adding pop-up to the marker
cheel.bindPopup('Какой-то пакр');
cfu.bindPopup('КФУ им. В.И. Вернадского');
shava.bindPopup('Вкусная шава');
rectal.bindPopup('Военная кафедра');
vodohranka.bindPopup('Водохранка, но ее скоро не будет');