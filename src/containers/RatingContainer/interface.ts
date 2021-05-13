export interface Metadata {
    limit: number;
    offset: number;
}
export interface Total {
    total: number;
}
export interface Pagination extends Metadata {
    total: number;
}
export interface Data {
    data: any[];
    metadata: Pagination;
}
