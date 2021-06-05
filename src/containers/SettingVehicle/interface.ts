export interface GetVehicle {
    loading: boolean;
    vehicleRecords: any[];
    getVehicle: () => void;
}

export interface UseModalProps {
    form: any;
    dataObj?: any;
    callback?: () => void;
}

export interface UseModal {
    visible: boolean;
    onOk: () => void;
    onShowModal: () => void;
    onCancel: () => void;
}

export interface ImgObj {
    icon: string;
    image: string;
    mapIcon: string;
    busyMapIcon: string;
}

export interface Currency {
    id: string;
    name: string;
}

export interface VehicleApi {
    imgObj: ImgObj | null;
    loading: boolean;
    onUploadSuccess: (file: ImgObj) => void;
}

export interface AddNew extends VehicleApi {
    addVehicle: (value: any) => void;
}

export interface AddNewProps {
    visible: boolean;
    onSuccess: () => void;
}

export interface EditVehicle extends VehicleApi {
    editVehicle: (value: any) => void;
}

export interface EditProps extends AddNewProps {
    vehicleId: string;
}
