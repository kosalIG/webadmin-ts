import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { useAxios, AxiosProps } from 'util/useAxios';
import { GET_NEARBY } from './gql';
import { serviceLocation } from 'env';
import {
    UseGetDriverNearby,
    LatLng,
    VehicleType,
    VehicleTypeProps,
    UseGoogleMapProps,
    UseGoogleMap,
} from './interface';

const { instance } = useAxios();
export function useGetDriverNearby(center: LatLng): UseGetDriverNearby {
    const [defaultLatLng, setDefaultLatLng] = useState<LatLng>({ lat: 0, lng: 0 });
    const [intervalId, setIntervalId] = useState<any>(null);

    const {
        latLng,
        isCurrentLocation,
        setAutocomplete,
        onLoad,
        onDragEnd,
        onPlacesChanged,
        onCurrentLocation,
    } = useGoogleMap({ center });

    useEffect(() => {
        if (center) {
            setDefaultLatLng(center);
        }
    }, [center]);

    useEffect(() => {
        if (latLng) {
            refetch({ ...latLng });
            fetchDriver(latLng);
        }
    }, [latLng]);

    // CLEAR INTERVAL WHEN LEAVE CP
    useEffect(() => () => clearInterval(intervalId), [intervalId]);

    // GET ALL NEARBY DRIVER
    const { data, refetch } = useQuery(GET_NEARBY, {
        client: serviceLocation,
        variables: { ...defaultLatLng, radius: 2000 },
    });
    const { allNearbyDriver = [] } = data || {};

    const fetchDriver = (params: LatLng) => {
        clearInterval(intervalId);
        let id: any = null;
        try {
            id = setInterval(() => {
                refetch({ ...params });
            }, 10000);
            setIntervalId(id);
        } catch (error) {
            clearInterval(id);
        }
    };

    return {
        allNearbyDriver,
        isCurrentLocation,
        latLng,
        onLoad,
        onDragEnd,
        onPlacesChanged,
        setAutocomplete,
        onCurrentLocation,
    };
}

export function useGetVehicleType(): VehicleTypeProps {
    const [records, setRecords] = useState<VehicleType[]>([]);

    useEffect(() => {
        getVehicleType();
    }, []);

    async function getVehicleType() {
        const config: AxiosProps = { url: '/vehicle' };
        const { result } = await instance({ config });
        if (result) {
            setRecords(result);
        }
    }

    function findIcon(id: string, arr: VehicleType[]): string {
        const vehicleData: any = arr?.find((item: VehicleType) => item.id === id);
        const mapIcon = vehicleData?.attributes?.mapIcon;
        return mapIcon;
    }
    return { findIcon, records };
}

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
