import React from 'react';
import { Tag } from 'antd';
import dateFormat from 'dateformat';
import styled from 'styled-components';
import { View, Delete } from 'components/ActionIcons';
import Status, { StatusProps } from 'components/Status';

const Div = styled.div`
    display: flex;
    justify-content: center;
`;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function useColum(handleSearch: (indx: string) => any, onDelete: (userId: string) => void): { columns: any[] } {
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
            title: 'Email',
            dataIndex: 'email',
            render: (name: string) => name || '---',
        },
        {
            title: 'Registered Date',
            dataIndex: 'createdAt',
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
            render: function action(id: string) {
                return (
                    <Div>
                        <View to={`/rider/${id}`} navkey="WEB:RIDER:READ_DETAIL" />
                        <Delete navkey="WEB:RIDER:DELETE" onConfirm={() => onDelete(id)} />
                    </Div>
                );
            },
        },
    ];
    return { columns };
}
export default useColum;
