var count = 1;
var countEl = document.getElementById("count");

function plus() {
    count++;
    countEl.value = count;
}

function minus() {
    if (count > 1) {
        count--;
        countEl.value = count;
    }
}


mapboxgl.accessToken = 'pk.eyJ1Ijoic2ltb25oZWxnZSIsImEiOiJjamZqY3h0ZjE1OXpiMzJwbmcxcnB0a2tlIn0.amIGmp8oupjXrtgL4WaYjw';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/simonhelge/cjgnhghsw004f2rsb3t3j7jjc',
    center: [10.210373, 56.154118],
    zoom: 15,
    bearing: 27,
    pitch: 20
});


