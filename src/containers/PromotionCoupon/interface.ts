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

export interface UseGetPromotion {
    dataObj: Data;
    loading: boolean;
    pagin: (pag: Metadata) => void;
    onFilter: (_: any, filter: any) => void;
    onRefetch: (meta?: Metadata) => void;
}

export interface Modals {
    visible: boolean;
    onShowModal: () => void;
    onCancel: () => void;
    onOk: () => void;
    onFinish: (value: any) => void;
}
