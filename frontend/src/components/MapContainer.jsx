import { Map, GoogleApiWrapper } from "google-maps-react";
import { useMemo } from "react";
import React from "react";
import "../styles/map.css";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const MapContainer = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBQLmnJ1dbQGdu4ulwskejtwUF8YEHL83Y",
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;

  function Map() {
    const center = useMemo(() => ({ lat: 44, lng: -80 }), []);

    //   function initMap() {
    //     map = new google.maps.Map(document.getElementById("map"), {
    //       center: { lat: -34.397, lng: 150.644 },
    //       zoom: 8,
    //     });
    //   }

    //   window.initMap = initMap;

    //   const loader = new Loader({
    //     apiKey: "AIzaSyBQLmnJ1dbQGdu4ulwskejtwUF8YEHL83Y",
    //     version: "weekly",
    //   });

    //   loader.load().then(() => {
    //     map = new Loader.maps.Map(document.getElementById("map"), {
    //       center: { lat: -34.397, lng: 150.644 },
    //       zoom: 8,
    //     });
    //   });

    // declare global {
    //   interface Window {
    //     initMap: () => void;
    //   }
    // }

    return (
      <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
        <Marker position={center} />
      </GoogleMap>

      // <html>
      //   <head>
      //     <title>Add Map</title>
      //     <script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>
      //     <style></style>

      //     <link rel="stylesheet" type="text/css" href="./style.css" />
      //     <script type="module" src="./index.js"></script>
      //   </head>
      //   <body className="body">
      //     <h3>My Google Maps Demo</h3>
      //     <div className="map"></div>

      //     <script
      //       src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBQLmnJ1dbQGdu4ulwskejtwUF8YEHL83Y=initMap&v=weekly"
      //       defer
      //     ></script>
      //   </body>
      // </html>
    );
  }
};

export default MapContainer;
