import { useEffect, useState } from 'react';
import { UploadProps, Uploads } from './interface';

export default function useUpload({ file, onUploadSuccess }: UploadProps): Uploads {
    const initialState = {
        imageFile: null,
        loading: false,
    };
    const [imageFile, setimageFile] = useState(initialState.imageFile);
    const [loading, setloading] = useState(initialState.loading);

    // Clear image file
    useEffect(() => {
        setimageFile(file);
    }, [file]);

    // call back file
    useEffect(() => {
        if (imageFile) {
            onUploadSuccess(imageFile);
        }
    }, [imageFile]);

    function onSuccess(item: any) {
        setloading(false);
        setimageFile(item[0].originalfilename);
    }

    return { loading, imageFile, setloading, onSuccess };
}
