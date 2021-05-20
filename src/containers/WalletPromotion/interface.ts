export interface Metadata {
    limit: number;
    offset: number;
}

export interface Pagination extends Metadata {
    total: number;
}

export interface Data {
    results: any[];
    metadata: Pagination;
}

export interface Promotion {
    dataObj: Data;
    qString: any;
    loading: boolean;
    onRefetch: (meta?: Metadata) => void;
    handleDate: (date: any) => void;
    handleChange: (filter: any) => void;
}
