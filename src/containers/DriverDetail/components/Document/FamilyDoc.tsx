import React from 'react';
import { Row, Col, Avatar } from 'antd';
import { IdcardOutlined, SolutionOutlined } from '@ant-design/icons';
import UploadImage from 'util/useUpload';
import { s3Url } from 'env';

import { Text, TextBold } from './styled';

interface FamilyDocProps {
    familySrc: string;
    photoSrc: string;
    onUpdateDriver: (file: any) => void;
}

const FamilyDoc: React.FC<FamilyDocProps> = ({ familySrc, photoSrc, onUpdateDriver }) => {
    return (
        <div>
            <Text>Personal Document</Text>

            <Row gutter={[12, 12]}>
                <Col lg={12} md={24} sm={12} xs={23}>
                    <TextBold>Family Book</TextBold>

                    <UploadImage width={170} onUploadSuccess={(file: string) => onUpdateDriver({ familyImage: file })}>
                        <Avatar
                            src={familySrc && s3Url + familySrc}
                            shape="square"
                            size={170}
                            icon={<SolutionOutlined />}
                        />
                    </UploadImage>
                </Col>

                <Col lg={12} md={24} sm={12} xs={23}>
                    <TextBold>Photo 4x6</TextBold>

                    <UploadImage width={170} onUploadSuccess={(file: string) => onUpdateDriver({ image4x6: file })}>
                        <Avatar
                            src={photoSrc && s3Url + photoSrc}
                            shape="square"
                            size={170}
                            icon={<IdcardOutlined />}
                        />
                    </UploadImage>
                </Col>
            </Row>
        </div>
    );
};

export default FamilyDoc;
