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
    loading: boolean;
    tags: string[];
    onShowModal: () => void;
    onCancel: () => void;
    onOk: () => void;
    onFinish: (value: any) => void;
    setTags: (value: string[]) => void;
}
export interface EditForm {
    id: number;
    form: any | undefined;
    obj?: any;
    onRefetch: (val?: any) => void;
}
