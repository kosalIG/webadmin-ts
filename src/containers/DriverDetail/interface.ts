export interface DriverData {
    avatar: string;
    fullName: string;
    firstName: string;
    lastName: string;
    dob: Date;
    gender: string;
    email: string;
    status: Status;
    verifyDriverLicense: 1 | 0;
    mobileDetail: MobileDetail;
    referral_code: string;
    driverInfo: DriverInfo;
}

export interface DriverInfo {
    IDCardImage: string;
    drivingLicenseImage: ImageType;
    nationIDImage: ImageType;
    vehicleIDCardImage: ImageType;
    familyImage: string;
    image4x6: string;
    drivingLicenseNo: string;
    vehicleType: string;
    plateNumber: string;
    modelName: string;
    myId: string;
    modelId: string;
    colorId: string;
    idCardType: string;
    idCardNo: string;
}

export interface ImageType {
    back: string;
    front: string;
}

export type Status = 'ACTIVE' | 'INACTIVE';

export interface MobileDetail {
    countryCode: string;
    localNumber: string;
}

export interface UseGetDriverDetail {
    driverDetail: DriverData | null;
    loading: boolean;
    verifyLoading: boolean;
    verifyDriver: () => void;
    requestWithDraw: RequestWithDrawProps;
    updateDriver: UpdateDriver;
    totalBalance: number;
    OnlineDriver: 'Online' | 'Offline';
    vehicleRecords: any[];
    vehicleModel: VehicleModel;
}

export interface RequestWithDrawProps {
    withDrawLoading: boolean;
    data: any;
    onWithDraw: (val: any) => void;
}

export interface UpdateDriver {
    updateLoading: boolean;
    updateData: any;
    vehicleRecords: any[];
    colorRecords: any[];
    onUpdateDriver: (val: any) => void;
}

export interface VehicleModel {
    getVehicleModel: (id: string) => void;
    modelRecords: any[];
}
