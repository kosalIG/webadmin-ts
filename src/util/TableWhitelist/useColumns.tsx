import React from 'react';
import { Delete } from 'components/ActionIcons';
import TextInput from './TextInput';
import SelectInput from './SelectInput';

function useColumns({
    handleSearch = () => null,
    onChange,
    onRemove,
}: {
    handleSearch?: any;
    onChange: (id: string, key: string, e: any) => void;
    onRemove: (id: string) => void;
}): { column: any[] } {
    const column = [
        { title: '#', dataIndex: 'idx', className: 'center', width: 80 },
        {
            title: 'Full Name',
            dataIndex: 'fullName',
            render: function render(item: string, rec: any) {
                return (
                    <TextInput
                        placeholder="Full Name"
                        onChange={(e) => onChange(rec.id, 'fullName', e.target.value)}
                        value={item}
                    />
                );
            },
        },
        {
            title: 'Country Code',
            dataIndex: 'countryCode',
            render: function render(item: string, rec: any) {
                return <SelectInput onChange={(e) => onChange(rec.id, 'countryCode', e)} value={item} />;
            },
        },
        {
            title: 'Mobile Number',
            dataIndex: 'localNumber',
            ...handleSearch('mobileNumber'),
            render: function render(item: string, rec: any) {
                return (
                    <TextInput
                        placeholder="Mobile Number"
                        onChange={(e) => onChange(rec.id, 'localNumber', e.target.value)}
                        value={item}
                    />
                );
            },
        },
        {
            title: 'Action',
            dataIndex: 'id',
            className: 'center',
            width: 100,
            render: function action(id: string) {
                return <Delete onConfirm={() => onRemove(id)} />;
            },
        },
    ];
    return { column };
}
export default useColumns;
