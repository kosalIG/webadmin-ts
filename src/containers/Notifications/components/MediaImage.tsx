import React, { useState } from 'react';
import { Modal, Avatar } from 'antd';
import { FileImageOutlined } from '@ant-design/icons';
import { s3Url } from 'env';

const MediaModal: React.FC<{ link: string }> = ({ link }) => {
    const [visible, setVisible] = useState(false);

    return (
        <>
            <div onClick={() => setVisible(true)}>
                <Avatar src={s3Url && s3Url + link} icon={<FileImageOutlined />} />
            </div>
            <Modal width={600} title="Image" visible={visible} onCancel={() => setVisible(false)} footer={null}>
                {link ? <img style={{ width: '100%' }} src={s3Url + link} alt="image error" /> : 'no image'}
            </Modal>
        </>
    );
};

export default MediaModal;
