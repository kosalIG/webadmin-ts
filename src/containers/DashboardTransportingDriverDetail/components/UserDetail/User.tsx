import React from 'react';
import { Row, Divider } from 'antd';
import { UserProps } from '../../interface';

const UserDetail: React.FC<UserProps> = ({ label, userData }) => {
    const { fullName, mobileNumber } = userData || {};

    return (
        <div>
            <Row justify="space-between">
                <div>{label} :</div>
                <div style={{ fontSize: 17 }}>{fullName || 'n/a'}</div>
            </Row>
            <Row justify="space-between">
                <div>Mobile</div>
                <div style={{ fontSize: 17 }}>{mobileNumber || 'n/a'}</div>
            </Row>
            <Divider />
        </div>
    );
};

export default UserDetail;
