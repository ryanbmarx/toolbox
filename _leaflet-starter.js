/*
    SOME HELPFUL BOUNDING BOXES:
    Chicago: [42.029693, -87.969885],[41.603010, -87.466239]
    Cook County: [42.155799,-88.3121067],[41.402917,-87.4080117]

*/



module.exports = function drawVictimsMap(container, data){
    // draw the map.
    let map = L.map(container,
        {
            zoom: 10,
            center: [41.862013, -87.680716],
            scrollWheelZoom: false,
            minZoom: 10,
            maxZoom: 16,
            renderer: L.canvas({padding:.05}), // You'll thank me for this when we start plotting dots
            maxBounds:L.latLngBounds([42.029693, -87.969885],[41.603010, -87.466239]) // Limit map to, roughly, the Cook County boundary. No getting lost on the map here.
        }
    );

    L.tileLayer.provider('Stamen.TonerLite').addTo(map);

    // ADDS CITY MASK
    L.tileLayer( "http://media.apps.chicagotribune.com/maptiles/chicago-mask/{z}/{x}/{y}.png", { 
        maxZoom: 16, 
        minZoom: 10, 
        opacity: 0.5 
    }).addTo(map);

}