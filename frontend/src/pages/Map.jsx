import GoogleMapReact from "google-map-react";
import "./map.css";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker";

const Map = () => {
  const location = {
    address: "1600 Amphitheatre Parkway, Mountain View, california.",
    lat: 37.42216,
    lng: -122.08427,
  };
  const LocationPin = ({ text }) => (
    <div className="pin">
      <Icon icon={locationIcon} className="pin-icon" />
      <p className="pin-text">{text}</p>
    </div>
  );

  const Map = ({ location, zoomLevel }) => (
    <div className="map">
      <h2 className="map-h2">Come Visit Us At Our Campus</h2>

      <div className="google-map">
        <GoogleMapReact bootstrapURLKeys={{ key: "" }} defaultCenter={location} defaultZoom={zoomLevel}>
          <LocationPin lat={location.lat} lng={location.lng} text={location.address} />
        </GoogleMapReact>
      </div>
    </div>
  );
  return <div>Map</div>;
};

export default Map;