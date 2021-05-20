import { useEffect, useState } from 'react';
import { LatLng, UseGoogleMapProps, UseGoogleMap } from '../../interface';

const useGoogleMap = ({ center }: UseGoogleMapProps): UseGoogleMap => {
    const [autocomplete, setAutocomplete] = useState<any>(null);
    const [latLng, setLatLng] = useState<LatLng>({ lat: 0, lng: 0 });
    const [isCurrentLocation, setIsCurrentLocation] = useState<boolean>(false);
    const refs: any = {};
    const windows: any = window;

    useEffect(() => {
        setLatLng({ ...center });
    }, [center]);

    const onLoad = (ref: any) => {
        const preRef = { ...ref };
        refs.map = preRef?.state?.map;
    };

    const onPlacesChanged = () => {
        const places = autocomplete.getPlace();
        const bounds = new windows.google.maps.LatLngBounds();
        if (places.geometry.viewport) {
            bounds.union(places.geometry.viewport);
        } else {
            bounds.extend(places.geometry.location);
        }
        refs?.map?.fitBounds(bounds);
        const lat = refs?.map?.getCenter().lat();
        const lng = refs?.map?.getCenter().lng();
        setLatLng({ lat, lng });
        setIsCurrentLocation(false);
    };

    const onDragEnd = () => {
        const lat = refs?.map?.getCenter().lat();
        const lng = refs?.map?.getCenter().lng();
        setLatLng({ lat, lng });
        setIsCurrentLocation(false);
    };

    const onCurrentLocation = () => {
        const latlng = new windows.google.maps.LatLng(center);
        refs?.map?.panTo(latlng);
        setLatLng({ ...center });
        setIsCurrentLocation(true);
    };
    return { latLng, isCurrentLocation, onLoad, onDragEnd, onPlacesChanged, setAutocomplete, onCurrentLocation };
};
export default useGoogleMap;
