import React from 'react';
import Delete from './DeleteWhitelist';
import Edit from './Edit';

function useColumns({
    handleSearch = () => null,
    onRefetch,
}: {
    handleSearch?: any;
    onRefetch: (val?: any) => void;
}): { column: any[] } {
    const column = [
        { title: '#', dataIndex: 'idx', className: 'center', width: 80 },
        {
            title: 'Full Name',
            dataIndex: 'fullName',
        },
        {
            title: 'Country Code',
            dataIndex: 'countryCode',
        },
        {
            title: 'Mobile Number',
            dataIndex: 'localNumber',
            ...handleSearch('mobileNumber'),
        },
        {
            title: 'Action',
            dataIndex: 'id',
            className: 'center',
            width: 100,
            render: function action(id: string, data: any) {
                return (
                    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <Edit obj={data} onRefetch={onRefetch} />
                        <Delete id={id} onRefetch={onRefetch} />
                    </div>
                );
            },
        },
    ];
    return { column };
}
export default useColumns;
