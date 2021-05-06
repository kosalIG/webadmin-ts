import React from 'react';
import styled from 'styled-components';
import { s3Url } from 'env';
import { Row, Col, Avatar } from 'antd';
import { PictureOutlined } from '@ant-design/icons';
import { Data } from '../interface';

const Div = styled.div`
    position: relative;
    top: 50%;
    transform: translate(0, -50%);
    max-width: 300px;
`;

const GroupProfile: React.FC<{ data?: Data; loading: boolean }> = ({ data, loading }) => {
    if (loading) return <div>loading ...</div>;
    return (
        <div>
            <Row gutter={[12, 16]}>
                <Col>
                    <Avatar icon={<PictureOutlined />} src={data?.image && s3Url + data?.image} size={100} />
                </Col>
                <Col>
                    <Div>
                        <div style={{ fontSize: 20, marginBottom: 5 }}>{data?.name || 'n/a'}</div>
                        <div>{data?.description || 'n/a'} </div>
                    </Div>
                </Col>
            </Row>
        </div>
    );
};

export default GroupProfile;
