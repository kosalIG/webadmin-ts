export interface DataObj {
    metadata: Total;
    results: any[];
}

export interface Total extends MetaData {
    total: number;
}
export interface MetaData {
    offset: number;
    limit: number;
}

export interface UseModalProps {
    form: any;
    dataObj?: any;
}

export interface UseModal {
    visible: boolean;
    onOk: () => void;
    onShowModal: () => void;
    onCancel: () => void;
}

export interface GetList {
    loading: boolean;
    dataObj: DataObj;
    onFilters: (filter: any) => void;
    onRefetch: (pagin?: MetaData) => void;
}
