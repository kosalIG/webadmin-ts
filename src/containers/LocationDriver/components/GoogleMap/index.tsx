import React from 'react';
import { GoogleMap, LoadScript, Marker, useLoadScript } from '@react-google-maps/api';
import googleMapHoc from './GoogleMapHOC';
import { googlekey } from 'env';
import { defaultOptions, containerStyle, libra } from './googleMapOption';
import AutoComplete from '../AutoComplete';
import LocationIcon from './LocationIcon';
import MarkerMove from '../MarkerMove';
import { MarkerMoveProps, VehicleTypeProps } from '../../interface';
import { useGetDriverNearby } from '../../api';

const index: React.FC<{ center: any; vehicleObj: VehicleTypeProps }> = ({ center, vehicleObj }) => {
    const {
        allNearbyDriver,
        latLng,
        isCurrentLocation,
        setAutocomplete,
        onLoad,
        onDragEnd,
        onPlacesChanged,
        onCurrentLocation,
    } = useGetDriverNearby(center);
    const { records, findIcon } = vehicleObj || {};

    const { isLoaded, loadError } = useLoadScript({
        id: '003',
        googleMapsApiKey: googlekey,
        libraries: libra,
    });

    if (loadError) return <div>Map cannot be loaded right now, sorry.</div>;

    return (
        <>
            {isLoaded ? (
                <GoogleMap
                    ref={onLoad}
                    mapContainerStyle={containerStyle}
                    onDragEnd={onDragEnd}
                    center={center}
                    zoom={14}
                    options={defaultOptions}
                >
                    {latLng ? <Marker position={{ ...latLng }} /> : null}
                    <AutoComplete onLoad={(autocomp) => setAutocomplete(autocomp)} onPlaceChanged={onPlacesChanged} />
                    <LocationIcon isCurrentLocation={isCurrentLocation} onCurrentLocation={onCurrentLocation} />
                    {allNearbyDriver?.map((latLngs: MarkerMoveProps) => {
                        const mapIcon = findIcon(latLngs.type || '', records);
                        return (
                            <MarkerMove
                                icon={mapIcon}
                                key={latLngs.id}
                                id={latLngs.id}
                                latLng={{ lat: latLngs?.latitude, lng: latLngs?.longitude }}
                            />
                        );
                    })}
                </GoogleMap>
            ) : (
                <div>Loading ...</div>
            )}
        </>
    );
};

export default googleMapHoc(index);
