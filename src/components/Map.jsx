import React from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

const Map = ({ data }) => {
    const { lat, lon } = data;

    let mapPosition = [lat, lon];

    return (
        <div className="map">
            <MapContainer
                className="map__container"
                center={mapPosition}
                zoom={10}
                scrollWheelZoom={false}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
                />
                <Marker position={mapPosition}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
                <ChangeCenter position={mapPosition} />
            </MapContainer>
        </div>
    );
};

function ChangeCenter({ position }) {
    const map = useMap();
    map.setView(position);
    return null;
}

export default Map;
