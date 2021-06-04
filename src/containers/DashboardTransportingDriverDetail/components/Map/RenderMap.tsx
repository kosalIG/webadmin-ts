import React from 'react';
import { GoogleMap } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '638px',
};

const defaultOptions = {
    fullscreenControl: false,
    streetViewControl: false,
    mapTypeControl: false,
    getCurrentLocation: true,
};

const RenderMap: React.FC<{ center: any }> = ({ center, children }) => {
    return (
        <div>
            <GoogleMap center={center} options={defaultOptions} mapContainerStyle={containerStyle} zoom={13}>
                {children}
            </GoogleMap>
        </div>
    );
};

export default RenderMap;
