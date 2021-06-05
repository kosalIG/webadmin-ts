import React from 'react';
import { Upload, Button } from 'antd';
import { useAppConsummer } from 'util/appContext';
import { s3Url } from 'env';
import { UploadOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { UploadProps } from './interface';
import useUpload from './useUpload';
const Img = styled.img`
    margin-top: 10px;
    width: 80px;
    height: 80px;
`;

const Index: React.FC<UploadProps> = ({ file, onUploadSuccess }) => {
    const { loading, imageFile, onSuccess, setloading } = useUpload({ file, onUploadSuccess });
    const { imageOption } = useAppConsummer();

    // IMAGE
    const propsImage = {
        showUploadList: false,
        ...imageOption,
    };
    return (
        <>
            <Upload
                {...propsImage}
                beforeUpload={() => {
                    setloading(true);
                }}
                onError={() => {
                    setloading(false);
                }}
                onSuccess={onSuccess}
            >
                <Button loading={loading}>
                    {!loading && <UploadOutlined />}
                    Upload
                </Button>
            </Upload>
            <br />
            {imageFile && <Img src={`${s3Url}${imageFile}`} alt="..." />}
        </>
    );
};

export default Index;
