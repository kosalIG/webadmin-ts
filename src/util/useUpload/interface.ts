export interface UseUploadProps {
    width?: number;
    height?: number;
    aspect?: number;
    onUploadSuccess: (file: any) => void;
}

export interface UseUpload {
    propsImage: any;
    loading: boolean;
    onPreview: (file: any) => void;
}
