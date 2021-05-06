import React from 'react';
import { View } from 'components/ActionIcons';
import Edit from './components/Edit';
import Delete from './components/Delete';

export function useColumn({ getGroup }: { getGroup: () => void }): { columns: any[] } {
    const columns = [
        { dataIndex: 'idx', title: '#', width: 70, className: 'center' },
        { dataIndex: 'name', title: 'Group name', width: 350 },
        { dataIndex: 'description', title: 'Description' },
        {
            dataIndex: 'id',
            title: 'Action',
            width: 100,
            className: 'center',
            render: function action(id: string, data: any) {
                return (
                    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <View to={`group/${id}`} navkey="WEB:GROUP:READ_DETAIL" />
                        <Edit onSuccess={getGroup} data={data} />
                        <Delete onSuccess={getGroup} id={id} />
                    </div>
                );
            },
        },
    ];
    return { columns };
}
