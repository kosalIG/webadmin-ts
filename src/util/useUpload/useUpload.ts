import { useState } from 'react';
import { appCons } from 'util/appContext';
import { UseUploadProps, UseUpload } from './interface';

export function useUpload({ onUploadSuccess }: UseUploadProps): UseUpload {
    const [loading, setLoading] = useState(false);
    const { imageOption } = appCons();

    async function onSuccess(item: any) {
        const { originalfilename } = item[0];
        setLoading(false);
        onUploadSuccess(originalfilename);
    }

    const onPreview = async (file: any) => {
        let src = file.url;
        if (!src) {
            src = await new Promise((resolve) => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);
                reader.onload = () => resolve(reader.result);
            });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow?.document.write(image.outerHTML);
    };

    const propsImage = {
        beforeUpload: () => {
            setLoading(true);
            return true;
        },
        onSuccess,
        onError: () => setLoading(false),
        ...imageOption,
    };
    return { loading, propsImage, onPreview };
}
