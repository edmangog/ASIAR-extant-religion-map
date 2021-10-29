mapboxgl.accessToken = '';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/light-v10',
    zoom: 1.640,
    center: [19.7399, 10.3523],
    preserveDrawingBuffer: true,
    minzoom: 1.1088,
});
map.doubleClickZoom.disable()

function mobileitem() {
    try{} catch{}
}
function myFunction(x) {
    if (x.matches) { // If media lower than 961px
        map.flyTo({
            zoom: 1.5,
            center: [79.7914, 35.3193],
        })
        mobile = setInterval(mobileitem, 200)
        
    } else {
        map.flyTo({
            zoom: 1.640,
            center: [19.7399, 10.3523],
        })
    }
}
var x = window.matchMedia("(max-width: 961px)")
myFunction(x) // Call listener function at run time

map.once('idle', function () {
    $('#loading').remove()
    map.flyTo({
        zoom: 2.8911,
        center: [100.9818, 31.4651],
    })
})


function includeJs(jsFilePath) {
    var js = document.createElement("script");

    js.type = "text/javascript";
    js.src = jsFilePath;

    document.body.appendChild(js);
}
includeJs("./mapdata.js");
includeJs("./mapinteraction.js");
includeJs("./sidecontroller.js");