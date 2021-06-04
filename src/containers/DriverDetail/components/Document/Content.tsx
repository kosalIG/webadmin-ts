import React from 'react';
import { Row, Col, Avatar } from 'antd';
import { IdcardOutlined } from '@ant-design/icons';
import UploadImage from 'util/useUpload';
import { s3Url } from 'env';

import { Text, TextBold } from './styled';

interface ContentProps {
    title: string;
    frontSrc: string;
    backSrc: string;
    onUpdateFront: (file: string) => void;
    onUpdateBack: (file: string) => void;
}
const Index: React.FC<ContentProps> = ({ title, frontSrc, backSrc, onUpdateFront, onUpdateBack }) => {
    return (
        <div style={{ marginTop: 20 }}>
            <Text>{title}</Text>
            <Row gutter={[36, 12]}>
                <Col xl={12} lg={24} md={24} sm={24} xs={24}>
                    <TextBold>Front Side</TextBold>
                    <UploadImage aspect={2} width={300} height={170} onUploadSuccess={onUpdateFront}>
                        <Avatar
                            style={{ minWidth: 300, minHeight: 170 }}
                            shape="square"
                            src={frontSrc && s3Url + frontSrc}
                            icon={
                                <div style={{ fontSize: 170 }}>
                                    <IdcardOutlined />
                                </div>
                            }
                        />
                    </UploadImage>
                </Col>
                <Col xl={12} lg={24} md={24} sm={24} xs={24}>
                    <TextBold>Back Side</TextBold>
                    <UploadImage aspect={2} width={300} height={170} onUploadSuccess={onUpdateBack}>
                        <Avatar
                            style={{ minWidth: 300, minHeight: 170 }}
                            shape="square"
                            src={backSrc && s3Url + backSrc}
                            icon={
                                <div style={{ fontSize: 170 }}>
                                    <IdcardOutlined />
                                </div>
                            }
                        />
                    </UploadImage>
                </Col>
            </Row>
        </div>
    );
};

export default Index;
