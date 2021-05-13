import React, { useState, useEffect } from 'react';
import { useGetVehicleType } from 'containers/LocationDriver/api';

import { LatLng, VehicleTypeProps } from '../../interface';

export default function wrapComponent(
    Components: React.FC<{ center: LatLng; vehicleObj: VehicleTypeProps }>,
): React.FC {
    const childComponent = () => {
        const initialState = {
            center: { lat: 11.55762, lng: 104.8981623 },
        };
        const [center, setCenter] = useState<LatLng | any>(null);
        const { records, findIcon } = useGetVehicleType();

        // COMPONENT WILLMOUNT
        useEffect(() => {
            getLocation();
        }, []);

        // GET LOCATION
        function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(getLocationSuccess, getLocationError);
            } else {
                setCenter({ ...initialState.center });
                // eslint-disable-next-line no-console
                console.error('Geolocation is not supported by this browser.');
            }
        }
        // When the user allow the lcation
        function getLocationSuccess(position: any) {
            const {
                coords: { latitude: lat, longitude: lng },
            } = position;
            setCenter({ lat, lng });
        }

        // When the user Block the lcation
        function getLocationError() {
            setCenter({ ...initialState.center });
        }

        const vehicleObj: VehicleTypeProps = { records, findIcon };
        return <Components vehicleObj={vehicleObj} center={center} />;
    };
    return childComponent;
}
