export interface Total extends MetaData {
    total: number;
}
export interface MetaData {
    offset: number;
    limit: number;
}

export interface GetReferral {
    records: any[];
    loading: boolean;
    refetch: () => void;
}
