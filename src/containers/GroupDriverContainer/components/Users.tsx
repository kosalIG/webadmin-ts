import React from 'react';
import { Divider } from 'antd';

export interface DataObj {
    fullName: string;
    mobileNumber: string;
}
const Users: React.FC<{ dataObj: DataObj }> = ({ dataObj }) => (
    <div>
        <div>{dataObj?.fullName}</div>
        <div style={{ fontSize: 12 }}>{`(${dataObj?.mobileNumber})`}</div>
        <Divider style={{ margin: 0 }} />
    </div>
);
export default Users;
