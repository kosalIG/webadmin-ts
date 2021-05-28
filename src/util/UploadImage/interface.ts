export interface UploadProps {
    file?: any;
    onUploadSuccess: (file: any) => void;
}

export interface Uploads {
    loading: boolean;
    imageFile: any;
    setloading: (val: boolean) => void;
    onSuccess: (file: any) => void;
}
