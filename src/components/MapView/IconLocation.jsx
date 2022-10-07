import React from 'react'
import L from 'leaflet';

 const IconLocation = L.icon({

    iconUrl: require('../../images/Hotel_icon.png'),
    iconRetinaUrl: require('../../images/Hotel_icon.png'),
    iconSize: [50,50],
    iconAnchor: [30,60],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    className: "leaflet-venue-icon"
 })
export default IconLocation;