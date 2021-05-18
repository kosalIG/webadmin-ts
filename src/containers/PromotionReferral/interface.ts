export interface Metadata {
    limit: number;
    offset: number;
}

export interface Pagination extends Metadata {
    total: number;
}

export interface Data {
    data: any[];
    metadata: Pagination;
}

export interface UseGetReferral {
    dataObj: Data;
    loading: boolean;
    onRefetch: (meta?: Metadata) => void;
}
export interface AddNew {
    visible: boolean;
    loading: boolean;
    onShow: () => void;
    onCancel: () => void;
    onFinish: (val: any) => void;
}
