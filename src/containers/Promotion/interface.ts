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
    whitelistRecords: any[];
    onShowModal: () => void;
    onCancel: () => void;
    onOk: () => void;
    onFinish: (value: any) => void;
    setwhitelistRecords: (rec: any[]) => void;
    onAddNewWhitelist: () => void;
    addWhitelistByExcel: (rec: any[]) => void;
}

export interface UseGetWhitelistApi {
    loading: boolean;
    metadata: Pagination;
    records: any[];
    handlePagin: (pagin: Metadata) => void;
    onSearch: (val: any) => void;
    onRefetch: (val?: any) => void;
}

export interface EditWhitelist {
    whitelistAddnew: any[];
    whitelistEdit: any[];
    whitelistRemove: any[];
    whitelistRecords: any[];

    setWhitelistEdit: (val: any[]) => void;
    setWhitelistAddnew: (val: any[]) => void;
    setWhitelistRemove: (val: any[]) => void;
    setwhitelistRecords: (val: any[]) => void;
}

export interface EditForm {
    id: number;
    form: any | undefined;
    obj?: any;
    onRefetch: (val?: any) => void;
}
