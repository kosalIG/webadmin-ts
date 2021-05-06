export interface UseUploadProps {
    onUploadSuccess: (file: any) => void;
}

export interface UseUpload {
    onPreview: (file: any) => void;
    propsImage: any;
    loading: boolean;
}
