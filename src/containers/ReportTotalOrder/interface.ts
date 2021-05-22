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
