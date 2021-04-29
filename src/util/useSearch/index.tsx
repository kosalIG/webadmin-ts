/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import Input from './FilterInput';

function useSearch(onSearch: (val: any) => void): { handleSearch: (index: string) => void } {
    const [search, setSearch] = useState({});

    const handleSearch = (dataIndex: string) => ({
        filterDropdown: () => filterDropDown(dataIndex),
        filterIcon: () => filterIcon(dataIndex),
    });

    const filterDropDown = (dataIndex: string) => (
        <div style={{ padding: 8 }}>
            <Input
                name={dataIndex}
                value={search[dataIndex]}
                onSearch={() => onSearch(search)}
                onChange={(e) => setSearch({ [dataIndex]: e.target.value })}
                placeholder={dataIndex === 'mobilenumber' ? 'Ex: 92 xxx xxx' : dataIndex}
                style={{ marginBottom: 0, marginTop: 5 }}
                addonAfter={<SearchOutlined />}
            />
        </div>
    );

    const filterIcon = (dataIndex: string) => (
        <SearchOutlined style={{ color: search[dataIndex] ? '#1890ff' : undefined }} />
    );
    return { handleSearch };
}
export default useSearch;
