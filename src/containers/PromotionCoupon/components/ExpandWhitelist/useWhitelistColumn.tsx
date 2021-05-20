import React from 'react';
import Delete from './DeleteWhitelist';
import Edit from './Edit';

export function useWhitelistColumn({ onRefetch }: { onRefetch: (val?: any) => void }): { columns: any[] } {
    function action(id: string, val: any) {
        return (
            <div>
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <Edit obj={val} onRefetch={onRefetch} />
                    <Delete id={id} onRefetch={onRefetch} />
                </div>
            </div>
        );
    }

    const columns = [
        { title: '#', dataIndex: 'key', className: 'center' },
        { title: 'Full name', dataIndex: 'fullName' },
        { title: 'Country code', dataIndex: 'countryCode' },
        { title: 'Local number', dataIndex: 'localNumber' },
        {
            title: 'Action',
            className: 'center',
            dataIndex: 'id',
            render: action,
        },
    ];
    return { columns };
}
