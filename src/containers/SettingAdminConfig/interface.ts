export interface DataObj {
    results: any[];
    metadata: Total;
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
    onShowModal?: () => void;
    onCancel: () => void;
}

export interface GetList {
    loading: boolean;
    dataObj: DataObj;
    onPagin: (pagin: MetaData) => void;
    onRefetch: (pagin?: MetaData) => void;
    handleFilter: (filter: any) => void;
}
