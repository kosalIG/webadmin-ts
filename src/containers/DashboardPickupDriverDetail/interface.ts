export interface Data {
    id: string;
    vehicleTypeId: string;
    rider: User;
    driver: User;
    orderDetail: OrderDetail;
    orderDropoffs: OrderDropoffs[];
}

export interface UserDetailProps {
    orderDetail: OrderDetail;
    rider: User;
    driver: User;
    orderDropoffs: OrderDropoffs[];
}

export interface AddressProps {
    orderDropoffs?: OrderDropoffs[];
    orderDetail?: OrderDetail;
}

export interface OrderDropoffs {
    sequence: number;
    dropoffAddressName: string;
    dropoffLng: number;
    dropoffLat: number;
}

export interface PickupDetailProps {
    orderDetail?: OrderDetail;
}

export interface User {
    id: string;
    fullName: string;
    mobileNumber: string;
}

export interface UserProps {
    label: string;
    userData: User;
}

export interface OrderDetail {
    createdAt: Date;
    estimatedDuration: number;
    estimatedDistance: number;
    estimatedCost: number;
    discountAmount: number;
    collectionAmount: number;
    totalAmount: number;
    pickupAddressName: string;
    dropoffAddressName: string;
    pickupLat: number;
    pickupLng: number;
    dropoffLat: number;
    dropoffLng: number;
}

export interface MapProps {
    orderDetail: MapOrderDetail;
    orderDropoffs: OrderDropoffs[];
    vehicleIcon: VehicleIcon;
}

export interface MapOrderDetail {
    pickupLat: number;
    pickupLng: number;
    dropoffLat: number;
    dropoffLng: number;
}

export type VehicleIcon = string | null;
