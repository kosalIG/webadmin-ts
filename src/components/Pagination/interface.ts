export interface MetaData {
    total: number;
    limit: number;
    offset: number;
}
export interface PaginProps {
    metadata: MetaData;
    onPagin: (offset: number, limit: number) => void;
}
