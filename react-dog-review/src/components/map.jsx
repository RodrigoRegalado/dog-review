import React from "react";

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -117.224121, lng: 39.876019 },
    zoom: 8,
  });
}

window.initMap = initMap;

export default map