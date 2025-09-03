import React, { useState, useEffect } from 'react';
import type { JSX } from "react";
import type { LatLng } from "../context/GlobalContext"

import GoogleMapReact from "google-map-react";


interface AddressMapProps {
    apiKey: string;
    address: string;
    iconMap: JSX.Element;
    centerMap: LatLng;
}

interface MarkerProps extends LatLng {
    icon: JSX.Element;
}

const Marker: React.FC<MarkerProps> = ({ icon }) => (
    <div className="text-green-500 size-[40px]">{icon}</div>
);

const MapGoogle: React.FC<AddressMapProps> = ({ apiKey, address, iconMap, centerMap }) => {
    const [center, setCenter] = useState<LatLng>(centerMap);
    const [zoom, setZoom] = useState<number>(12);

    useEffect(() => {
        const geocode = async () => {
            try {
                const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;
                const res = await fetch(url);
                const data = await res.json();
                if (data.status === "OK" && data.results && data.results.length > 0) {
                    const loc = data.results[0].geometry.location;
                    setCenter({ lat: loc.lat, lng: loc.lng });
                    setZoom(13);
                } else {
                    console.warn("Geocoding failed:", data.status, data.error_message);
                }
            } catch (err) {
                console.error("Geocode error:", err);
            }
        };

        if (apiKey) geocode();
    }, [address, apiKey]);

    return (
        <GoogleMapReact
            bootstrapURLKeys={{ key: apiKey }}
            defaultCenter={center}
            defaultZoom={zoom}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={({ map, maps }: { map: google.maps.Map; maps: typeof google.maps }) => {
                map.setOptions({
                    mapTypeControl: true,
                    mapTypeControlOptions: {
                        style: maps.MapTypeControlStyle.HORIZONTAL_BAR,
                        position: maps.ControlPosition.TOP_RIGHT,
                        mapTypeIds: ["roadmap", "satellite", "hybrid", "terrain"],
                    },
                });
            }}
        >
            <Marker lat={center.lat} lng={center.lng} icon={iconMap} />
        </GoogleMapReact>
    );
}

export default MapGoogle