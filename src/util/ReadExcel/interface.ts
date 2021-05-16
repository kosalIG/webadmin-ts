export interface UseReadExcel {
    loading: boolean;
    customUpload: (file: any) => void;
    be4Upload: (file: any) => boolean;
}
