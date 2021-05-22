export interface Metadata {
    limit: number;
    offset: number;
}

export interface Pagination extends Metadata {
    total: number;
}

export interface Data {
    rider: Rider;
    orderLogs: any[];
    vehicleTypeInfo: VehicleTypeInfo;
}

export interface Rider {
    fullName: string;
    gender: string;
    mobileNumber: string;
}

export interface VehicleTypeInfo {
    name: string;
}
