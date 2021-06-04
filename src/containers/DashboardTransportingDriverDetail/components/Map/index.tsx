import React from 'react';
import { Marker, useJsApiLoader } from '@react-google-maps/api';
import { googlekey, s3Url } from 'env';
import RenderMap from './RenderMap';
import { MapProps } from '../../interface';

import location from 'images/driver-location/location.png';
import defaultVehicleIcon from 'images/driver-location/vehicle-icon.png';

const libra: any = ['places', 'drawing', 'geometry'];

const Index: React.FC<MapProps> = ({ orderDropoffs, orderDetail, vehicleIcon }) => {
    const { pickupLat, pickupLng, dropoffLat, dropoffLng } = orderDetail || {};
    const windows: any = window;

    const { isLoaded, loadError } = useJsApiLoader({
        googleMapsApiKey: googlekey,
        libraries: libra,
    });

    if (loadError) return <div>Map cannot be loaded right now, sorry.</div>;

    return isLoaded ? (
        <RenderMap center={{ lat: pickupLat, lng: pickupLng }}>
            <Marker
                icon={{
                    url: vehicleIcon ? s3Url + vehicleIcon : defaultVehicleIcon,
                    scaledSize: new windows.google.maps.Size(30, 30),
                    anchor: new windows.google.maps.Point(0, 40),
                }}
                position={{ lat: pickupLat, lng: pickupLng }}
            />

            {/* DROP OFF POSITION */}
            {orderDropoffs.length ? (
                orderDropoffs?.map((item) => (
                    <Marker
                        key={item.sequence}
                        icon={{
                            url: location,
                            scaledSize: new windows.google.maps.Size(30, 40),
                            anchor: new windows.google.maps.Point(0, 30),
                        }}
                        position={{ lat: item.dropoffLat, lng: item.dropoffLng }}
                    />
                ))
            ) : (
                <Marker
                    icon={{
                        url: location,
                        scaledSize: new windows.google.maps.Size(30, 40),
                        anchor: new windows.google.maps.Point(0, 30),
                    }}
                    position={{ lat: dropoffLat, lng: dropoffLng }}
                />
            )}
        </RenderMap>
    ) : (
        <div>loading</div>
    );
};
export default Index;
