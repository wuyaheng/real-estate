import React from "react";
import Map from "./../Map/index";


function MapBox(props) {

    let lat = props.results.reduce((t, r) => t + parseFloat(r.latitude), 0) / props.results.length;

    let lon = props.results.reduce((t, r) => t + parseFloat(r.longitude), 0) / props.results.length;

    if(!lat) {
        lat = 40.725017
    }

    if(!lon) {
        lon = -74.062952
    }

    return (
        <>
            <Map lat={lat} lon={lon} pins={props.results} />
        </>
    )
}

export default MapBox;