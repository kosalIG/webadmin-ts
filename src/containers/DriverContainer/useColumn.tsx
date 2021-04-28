/* eslint-disable react/display-name */
import React from 'react';
import { Tag } from 'antd';
import dateFormat from 'dateformat';
import styled from 'styled-components';
import { View, Delete } from 'components/ActionIcons';
import VerifyDriver from 'components/VerifyDriver';
import Status, { StatusProps } from 'components/Status';
import TopDriver from './components/TopupDriver';

const Div = styled.div`
    display: flex;
    justify-content: center;
`;

function useColum(
    handleSearch: (indx: string) => any,
    onDelete: (userId: string) => void,
    driverGroup: any[],
): { columns: any[] } {
    const columns = [
        {
            title: '#',
            dataIndex: 'key',
            className: 'center',
            textWrap: 'word-break',
            width: 60,
        },
        {
            title: 'OTP',
            dataIndex: 'otp',
            render: function opt(name: string) {
                return name ? <Tag color="blue">{name}</Tag> : '---';
            },
        },
        {
            title: 'Driver Group',
            dataIndex: 'group',
            filters: driverGroup,
            filterMultiple: false,
            render: (name: string) => name || '---',
        },
        {
            title: 'Verify Driver',
            dataIndex: 'driverInfo',
            filters: [
                { text: 'Verified', value: 1 },
                { text: 'Pending', value: 0 },
            ],
            filterMultiple: false,
            render: (val: any) => <VerifyDriver value={val?.verifyDriverLicense} />,
        },
        {
            title: 'Driver Id',
            dataIndex: ['driverInfo', 'myId'],
            ...handleSearch('myId'),
            render: (name: string) => name || '---',
        },
        {
            title: 'Last Name',
            dataIndex: 'lastName',
            ...handleSearch('lastName'),
            render: (name: string) => name || '---',
        },
        {
            title: 'First Name',
            dataIndex: 'firstName',
            ...handleSearch('firstName'),
            render: (name: string) => name || '---',
        },
        {
            title: 'Mobile Number',
            dataIndex: 'mobileNumber',
            textWrap: 'word-break',
            width: 200,
            ...handleSearch('mobileNumber'),
            render: (name: string) => name || '---',
        },
        {
            title: 'Gender',
            dataIndex: 'gender',
            render: (item: string) => item || '---',
        },
        {
            title: 'DOB',
            dataIndex: 'dob',
            render: (date: Date) => (date ? dateFormat(new Date(date), 'dd - mmm - yyyy') : '---'),
        },
        {
            title: 'Status',
            dataIndex: 'status',
            className: 'center',
            // fixed: 'right',
            render: function status(item: StatusProps) {
                return <Status status={item} />;
            },
        },
        {
            title: 'Action',
            dataIndex: 'id',
            className: 'center',
            width: 100,
            fixed: 'right',
            render: function action(id: string, rec: any) {
                return (
                    <Div>
                        <View to={`/rider/${id}`} navkey="WEB:DRIVER:READ_DETAIL" />
                        <TopDriver useId={id} fullName={rec?.fullName} />
                        <Delete navkey="WEB:DRIVER:DELETE" onConfirm={() => onDelete(id)} />
                    </Div>
                );
            },
        },
    ];
    return { columns };
}
export default useColum;
