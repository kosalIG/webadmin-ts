import React, { useState, useMemo, useEffect } from 'react';
import { Marker } from '@react-google-maps/api';
import defaultVehicleIcon from 'images/driver-location/vehicle-icon.png';
import { LatLng } from '../../interface';
import { s3Url } from 'env';

const Index: React.FC<{ latLng: LatLng; icon: string; id: string }> = ({ latLng, icon, id }) => {
    const windows: any = window;
    const [driverLatlng, setDriverLatlng] = useState(null);
    const [currentlatlng, setCurrentLatlng] = useState<any>([]);
    const [intervalId, setIntervalId] = useState<any>(null);
    // CP DIDMOUNT
    useMemo(() => {
        // FIND CURRENT LATLNG
        if (!currentlatlng.length) {
            return setCurrentLatlng([latLng]);
        } // SET VALUE AND END

        // ADD DESTINATION
        if (currentlatlng.length === 1) {
            const curr = currentlatlng.map((item: any) => ({ ...item }));
            curr.push(latLng);
            return setCurrentLatlng(curr); // SET VALUE AND END
        }

        // ADD NEW DESTINATION AND CHANGE OLD DESTINATION TO CURRENT LATLNG
        if (currentlatlng.length > 1) {
            const curr = currentlatlng.map((item: any) => ({ ...item }));
            curr.shift();
            curr.push(latLng);
            return setCurrentLatlng(curr); // SET VALUE AND END
        }

        return null;
    }, [latLng.lat, latLng.lng]);
    // MARKER MOVE WHEN START AND DESTINATION TRUE AND CHANGE
    useEffect(() => {
        goToPoint(currentlatlng);
    }, [currentlatlng[0], currentlatlng[1]]);
    // CLEAR INTERVAL WHEN LEAVE CP
    useEffect(
        () => () => {
            clearInterval(intervalId);
        },
        [intervalId],
    );
    // MARKER MOVE
    function goToPoint(latlng: any) {
        if (!latlng[1]) {
            setDriverLatlng(new windows.google.maps.LatLng(latlng[0]));
            return;
        }
        let { lat: currLat, lng: currLng } = latlng[0] || [];
        const { lat: distLat, lng: distLng } = latlng[1];

        const fromTo = new windows.google.maps.LatLng(currLat, currLng);
        const dest = new windows.google.maps.LatLng(distLat, distLng);
        const distance = windows.google.maps.geometry.spherical.computeDistanceBetween(fromTo, dest);

        const step = (35 * 1000 * distance) / 3600000; // in meters

        const angle = windows.google.maps.geometry.spherical.computeHeading(fromTo, dest);

        const numStep = distance / step;
        const deltaLat = (distLat - currLat) / numStep;
        const deltaLng = (distLng - currLng) / numStep;
        let i = 0;
        const marker: any = document.querySelector(`[src="${s3Url + icon}?id=${id}"]`);

        if (marker) {
            marker.style.transform = `rotate(${angle}deg)`;
        }

        const ids: any = setInterval(() => {
            currLat += deltaLat;
            currLng += deltaLng;
            i += step;
            setDriverLatlng(new windows.google.maps.LatLng(currLat, currLng));
            if (i > distance || !distance) {
                clearInterval(ids);
            }
        }, 100);
        setIntervalId(ids);
    }

    const icons = {
        url: icon ? `${s3Url + icon}?id=${id}` : defaultVehicleIcon,
        scaledSize: new windows.google.maps.Size(25, 25),
        anchor: { x: 10, y: 15 },
    };

    return <Marker icon={icons} position={driverLatlng} />;
};

export default Index;
