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