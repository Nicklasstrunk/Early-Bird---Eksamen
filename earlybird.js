/* Nedenstående JS definerer de to tællere, der tæller antal personer og antal menuer */
var count = 1;
var countEl = document.getElementById("count");

function plus() {
    console.log('der klikkes paa plus, værdi af count = ' + count)
    count++;
    countEl.value = count;
}

function minus() {
    console.log('der klikkes paa minus, værdi af count = ' + count)
    if (count > 1) {
        count--;
        countEl.value = count;
    }
}


/* Nedenstående JS definerer de to tællere, der tæller antal personer og antal menuer */
var count1 = 1;
var countEl1 = document.getElementById("count1");

function plus1() {
    count1++; // count1 = count1 + 1
    console.log('der klikkes paa plus1: ' + count1)
    countEl1.value = count1;
}

function minus1() {
    console.log('der klikkes paa minus1: ' + count1)
    if (count1 > 1) {
        count1--; // count1 = count1 - 1
        countEl1.value = count1;
    }
}


/* Nedenstående JS definerer det interaktive map */
mapboxgl.accessToken = 'pk.eyJ1Ijoic2ltb25oZWxnZSIsImEiOiJjamZqY3h0ZjE1OXpiMzJwbmcxcnB0a2tlIn0.amIGmp8oupjXrtgL4WaYjw';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/simonhelge/cjgnhghsw004f2rsb3t3j7jjc',
    center: [10.210373, 56.154118],
    zoom: 15,
    bearing: 27,
    pitch: 20
});



