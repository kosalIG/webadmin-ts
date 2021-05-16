import React from 'react';
import styled from 'styled-components';
import { Tag } from 'antd';
import DateFormat from 'components/DataFormat';
import Status, { StatusProps } from 'components/Status';
import Currency from 'components/Currency';
// import Copy from './components/Copy';
// import Edit from './components/Edit';
// import Delete from './components/DeletePromotion';
// import Push from './components/PushPromotion';

const Div = styled.div`
    display: flex;
    justify-content: space-around;
`;

// Handle userTypes
const userTypes = {
    ALL: <Tag color="processing">All users</Tag>,
    NEW: <Tag color="success">New users</Tag>,
    OLD: <Tag color="warning">Existed users</Tag>,
};

function useColum({ onRefetch }: { onRefetch: () => void }): { columns: any[] } {
    const columns = [
        { title: '#', width: 80, dataIndex: 'idx', className: 'center' },
        {
            title: 'User Type',
            dataIndex: 'userType',
            className: 'center',
            filterMultiple: false,
            filters: [
                { text: 'All user', value: 'ALL' },
                { text: 'New user', value: 'NEW' },
                { text: 'Existed user', value: 'OLD' },
            ],
            width: 130,
            render: (item: any) => userTypes[item],
        },
        { title: 'Group name', width: 200, dataIndex: 'name' },
        { title: 'Title', width: 200, dataIndex: 'title' },
        {
            title: 'Value Type',
            dataIndex: 'value',
        },
        { title: 'Total Use', dataIndex: ['promotionCoupon', 'totalUsed'] },
        {
            title: 'Total Use /User',
            dataIndex: ['promotionCoupon', 'totalUsedPerUser'],
            render: (item: number) => (item ? item : 'unlimited'),
        },
        {
            title: 'Total Use /User /Day',
            width: 170,
            dataIndex: ['promotionCoupon', 'totalUsedPerUserPerDay'],
            render: (item: number) => (item ? item : 'unlimited'),
        },
        {
            title: 'Amount /Use',
            dataIndex: 'amountPerUsed',
            render: function currency(item: number) {
                return item ? <Currency value={item} type="KHR" /> : 'unlimited';
            },
        },
        {
            title: 'Max Amount /User',
            dataIndex: 'maxAmount',
            render: function currency(item: number) {
                return item ? <Currency value={item} type="KHR" /> : 'unlimited';
            },
        },
        {
            title: 'Expired days',
            dataIndex: 'expiredDays',
            render: (item: number) => (item ? item + ' days' : 'unlimited'),
        },
        {
            title: 'Started At',
            dataIndex: 'startedAt',
            render: function date(date: Date) {
                return <DateFormat value={date} />;
            },
        },
        {
            title: 'Ended At',
            dataIndex: 'endedAt',
            render: function date(date: Date) {
                return <DateFormat value={date} />;
            },
        },
        { title: 'Terms', width: 200, dataIndex: 'terms' },
        { title: 'Description', width: 200, dataIndex: 'description' },
        { title: 'Label', width: 200, dataIndex: 'label' },
        { title: 'SMS', width: 200, dataIndex: 'sms' },
        {
            title: 'Status',
            width: 100,
            dataIndex: 'status',
            filterMultiple: false,
            filters: [
                { text: 'Active', value: 'ACTIVE' },
                { text: 'Inactive', value: 'INACTIVE' },
            ],
            className: 'center',
            fixed: 'right',
            render: function status(st: StatusProps) {
                return <Status status={st} />;
            },
        },
        {
            title: 'Action',
            width: 150,
            dataIndex: 'id',
            fixed: 'right',
            className: 'center',
            render: function act(id: string, data: any) {
                return (
                    <Div>
                        {/* <Copy dataObj={data} onRefetch={() => onRefetch()} />
                        <Edit dataObj={data} onRefetch={() => onRefetch()} />
                        <Push id={id} />
                        <Delete id={id} onRefetch={() => onRefetch()} /> */}
                    </Div>
                );
            },
        },
    ];
    return { columns };
}
export default useColum;
