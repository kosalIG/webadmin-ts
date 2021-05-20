export interface LatLng {
    lat: number;
    lng: number;
}

export interface UseGoogleMap extends CurrentLocationIconProps {
    latLng: LatLng;
    onLoad: (ref: any) => void;
    setAutocomplete: (autocomp: any) => void;
    onPlacesChanged: () => void;
    onDragEnd: () => void;
}

export interface AutoCompleteProps {
    onLoad: (ref: any) => void;
    onPlaceChanged: () => void;
}

export interface UseGoogleMapProps {
    center: LatLng;
}
export interface CurrentLocationIconProps {
    isCurrentLocation: boolean;
    onCurrentLocation: () => void;
}

export interface MarkerMoveProps {
    type: string;
    id: string;
    latitude: number;
    longitude: number;
}

export interface UseGetDriverNearby extends UseGoogleMap {
    allNearbyDriver: MarkerMoveProps[];
}

export interface VehicleType {
    id: string;
    name: string;
    attributes: Attributes;
}

export interface Attributes {
    busyMapIcon: string;
    icon: string;
    image: string;
    mapIcon: string;
    orderNo: string;
    totalSeat: string;
}

export interface VehicleTypeProps {
    findIcon: (id: string, arr: VehicleType[]) => string;
    records: VehicleType[];
}
