import React from 'react';
import { Col, Row } from 'antd';
import { ProfileProps } from '../interface';

const Profile: React.FC<{ profile: ProfileProps }> = ({ profile }) => {
    return (
        <div style={{ marginBottom: 10 }}>
            <Col md={12}>
                <Row gutter={[16, 16]}>
                    <Col>
                        <span>Driver ID:</span>&nbsp;
                        <b>{profile?.myID || 'n/a'}</b>
                    </Col>
                    <Col>
                        <span>Driver Name:</span>&nbsp;
                        <b>{profile?.fullName || 'n/a'}</b>
                    </Col>
                    <Col>
                        <span>Mobile Number:</span>&nbsp;
                        <b>{profile?.mobileNumber || 'n/a'}</b>
                    </Col>
                </Row>
            </Col>
        </div>
    );
};

export default Profile;
