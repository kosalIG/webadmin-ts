export interface GroupData {
    data: any[];
    metadata: Metadata | any;
}
export interface Metadata extends Pagin {
    total: number;
}
export interface Pagin {
    offset: number;
    limit: number;
}

export interface UseAddNewProps {
    form: any;
    data?: any;
    onSuccess?: () => void;
}
export interface UseAddNewReturn {
    visible: boolean;
    loading: boolean;
    imageFile: any;
    addGroup: (param: any) => void;
    updateGroup: (param: any) => void;
    setImageFile: (file: any) => void;
    onShow: () => any;
    onCancel: () => any;
    onOk: () => any;
}
export interface UseGetDriver {
    getDriver: (param: any) => void;
    onScroll: (e: any) => void;
    searchUser: (e: any) => void;
    records: any[];
    loading: boolean;
}
