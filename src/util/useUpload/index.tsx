import React from 'react';
import { Upload } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import ImgCrop from 'antd-img-crop';
import { DevIcons, Icon } from './styled';
import { UseUploadProps } from './interface';
import { useUpload } from './useUpload';

const Index: React.FC<UseUploadProps> = ({ onUploadSuccess, children, width, height, aspect }) => {
    const { loading, propsImage, onPreview } = useUpload({ onUploadSuccess });
    return (
        <div>
            <div style={{ position: 'relative', maxWidth: width || 100, height: height }}>
                {children}
                <ImgCrop aspect={aspect || 1} rotate>
                    <Upload
                        {...propsImage}
                        className="avatar-uploader"
                        multiple={false}
                        showUploadList={false}
                        onPreview={onPreview}
                    >
                        <DevIcons>
                            {loading ? <LoadingOutlined style={{ color: 'white', fontSize: 10 }} spin /> : <Icon />}
                        </DevIcons>
                    </Upload>
                </ImgCrop>
            </div>
        </div>
    );
};

export default Index;
