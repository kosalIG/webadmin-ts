import React from 'react';
import Star from 'components/Star';
import dateFormat from 'dateformat';

function useColum(): { columns: any[] } {
    const columns = [
        { title: '#', dataIndex: 'idx', className: 'center' },
        {
            title: 'Rider Id',
            dataIndex: ['customer', 'myID'],
            render: (item: string) => item || '--',
        },
        {
            title: 'Rider Name',
            dataIndex: ['customer', 'fullName'] || '--',
            render: (item: string) => item || '--',
        },
        {
            title: 'Gender',
            dataIndex: ['customer', 'gender'],
            render: (item: string) => item || '--',
        },
        {
            title: 'Mobile Number',
            dataIndex: ['customer', 'mobileNumber'],
            render: (item: string) => item || '--',
        },
        {
            title: 'Email',
            dataIndex: ['customer', 'email'],
            render: (item: string) => item || '--',
        },
        {
            title: 'Date and Time',
            dataIndex: 'createdAt',
            render: (item: Date) => (item ? dateFormat(item, 'dd-mmm-yyyy') : '--'),
        },
        {
            title: 'Rating',
            dataIndex: 'rating',
            render: function rating(item: number) {
                return <Star value={item} />;
            },
        },
    ];
    return { columns };
}
export default useColum;
