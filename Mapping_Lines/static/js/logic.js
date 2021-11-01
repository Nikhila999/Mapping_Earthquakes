// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.7, -94.5], 5);

// Coordinates for each point to be used in the polyline.
let line = [
    [37.6213, -122.3790],
    [32.8998, -97.0403],
    [43.6777, -79.6248],
    [40.6413, -73.7781]
  ];

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
  weight: 3,
  opacity: 0.5,
  dashArray: '5, 10',
  lineCap: 'square', // Optional, just to avoid round borders.
  color: 'blue'
  }).addTo(map);

