export interface VehicleModelAddNewProps {
    vehicleId: string;
    dataObj?: any;
    getModel: () => void;
}

export interface UseGetModel {
    records: any[];
    loading: boolean;
    getModel: () => void;
}

export interface AddNewProps {
    visible: boolean;
    vehicleId: string;
    onSuccess: () => void;
}

export interface AddNew {
    file: string | null;
    loading: boolean;
    onUploadSuccess: (file: string | null) => void;
    addVehicleModel: (value: any) => void;
}

export interface EditProps {
    visible: boolean;
    modelId: string;
    vehicleId: string;
    onSuccess: () => void;
}
export interface EditModel {
    file: string | null;
    loading: boolean;
    onUploadSuccess: (file: string | null) => void;
    editVehicleModel: (value: any) => void;
}
