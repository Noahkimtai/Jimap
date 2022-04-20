let map =L.map('map').setView([-1.2802, 36.8346],17); // to innitialize the map on our page

//add a tile laye openstreetmap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:'&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors' +
    ', Tiles courtesy of <a href="https://geo6.be/">GEO-6</a>',
    maxZoom:18
}).addTo(map)


//create a marker on Nairobi
let marker= L.marker([-1.2802, 36.8346]).addTo(map);


let drawnItems = L.featureGroup().addTo(map); // to add editable layer
// the shapes in the editable layer are the ones we can edit
//drawn item, the editable layer is a feature group

// to initialize the drawing control and place it on the top-left corner
new L.Control.Draw({
    edit:{
        featureGroup: drawnItems
    }
}).addTo(map) 
// new keyword is a way to create a new object in javascript
// You can also create a new object by calling a constructor function eg. L.map, L.marker
// L.control.Draw function accep an options boject where we can alter the structure and behavior of the drawing control

//with the above code the shape disapear after editing
// to make the shape persist, draw control fires events we can listen and respond to e.g. draw:created which has a property layer which has the shape created.
// when the event fires we can capture the edited layer e.layer
// add elayer to the drawnItems group
// it is then editable
map.adIventListener('draw:created', function(e){
    e.layer.addTo(drawnItems);
    drawnItems.eachLayer(function(layer){
        let geoJson = JSON.stringify(layer.toGeoJSON().geometry)
        console.log(geoJson);
    });
});

/* save the  shapes stored in the drawnItems to a GeoJson file
drawnItems.eachLayer(function(layer){
    let geoJson = JSON.stringify(layer.toGeoJSON().geometry)
    console.log(geoJson);
}) */
//.eachLayer method is used for applying something to each layer in the group object
//it takes one parameter layer
// it is similar to .foreach array method

// set such that the user can edit only one shape at a time
// this does the reverse of the previous code, instead of creating shapes and converting them to GEOJSON string
new L.Control.Draw({
    edit: false
}).addTo(map)

//to display GEOJSON of drawn shapes listen to event
function showText(e){
    layer.clearLayers();
    let layer = e.layer
    layer.addTo(layers);
    let geoJson = JSON.stringify 
}