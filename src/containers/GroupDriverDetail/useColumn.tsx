import React from 'react';
import DeleteUserList from './components/DeleteUserList';

export default function useColumn({
    handleSearch,
    getGroupUserList,
}: {
    handleSearch: any;
    getGroupUserList: () => void;
}): { column: any[] } {
    const column = [
        { dataIndex: 'key', title: '#', className: 'center' },
        {
            dataIndex: ['user', 'myId'],
            title: 'Driver Id',
            ...handleSearch('myId'),
            render: (item: string) => item || '---',
        },
        {
            dataIndex: ['user', 'firstName'],
            title: 'First Name',
            render: (item: string) => item || '---',
        },
        {
            dataIndex: ['user', 'lastName'],
            title: 'Last Name',
            render: (item: string) => item || '---',
        },
        {
            dataIndex: ['user', 'mobileNumber'],
            title: 'Mobile Number',
            ...handleSearch('mobileNumber'),
            render: (item: string) => item || '---',
        },
        {
            dataIndex: 'userId',
            title: 'Action',
            className: 'center',
            render: function action(id: string) {
                return <DeleteUserList id={id} onSuccess={getGroupUserList} />;
            },
        },
    ];
    return { column };
}
