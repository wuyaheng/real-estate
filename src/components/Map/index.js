import React from "react";
import L from "leaflet";
import moment from "moment";


export default (props) => {
  console.log(props.pins.length)
  React.useEffect(() => {
    const MAP_CONTAINER = document.getElementById("map-container");

    if (props.lat && props.lon && props.pins) {
      const MAP_ID = document.createElement("div");
      MAP_ID.setAttribute("id", "mapid");
      MAP_CONTAINER.appendChild(MAP_ID);

      const mymap = L.map("mapid").setView([props.lat, props.lon], 12);

      L.tileLayer(
        "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
        {
          attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 18,
          id: "mapbox/streets-v11",
          tileSize: 512,
          zoomOffset: -1,
          accessToken: process.env.REACT_APP_MAP_API_KEY,
        }
      ).addTo(mymap);

      var convertUndefined = (a) => (typeof a !== 'undefined'? a : "Unknown") 
    
      props.pins.forEach((pin) =>
        L.marker([pin.latitude, pin.longitude]).addTo(mymap).bindTooltip('<b>Address: </b>'+ pin.formattedAddress + 
        '<br/><b>Days on Market: </b>' + pin.daysOnMarket + '<br/><b>Price: </b>' + (pin.price).toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        }) + '<br/><b>Property Type: </b>' + convertUndefined(pin.propertyType) + 
        '<br/><b>Square Footage: </b>' + convertUndefined(pin.squareFootage) + '<br/><b>Bedrooms: </b>' + convertUndefined(pin.bedrooms) + '<br/><b>Bathrooms: </b>' + convertUndefined(pin.bathrooms) +
        '<br/><b>Listed Date: </b>' + moment(pin.listedDate).format('l') + '<br/><b>LastSeen: </b>' + moment(pin.lastSeen).format('l')) 
      );
    }

    return () => (MAP_CONTAINER.innerHTML = "");
  }, [props.lat, props.lon, props.pins]);

  return <div id="map-container"></div>;
};

