import React, { useEffect } from 'react';
import { Table, Button } from 'antd';
import Pagination from 'components/Pagination';
import ReadExel from 'util/ReadExcel';
import useSearch from 'util/useSearch';
import useColumns from 'util/TableWhitelist/useColumns';
import useWhitelist from './helper';
import { useWhitelistConsummer } from '../WhitelistContex';
import { useGetWhitelistApi } from '../../../../api';

const Index: React.FC<{ id: string }> = ({ id }) => {
    const {
        onAddNewWhitelist,
        whitelistRecords,
        whitelistRemove,
        whitelistEdit,
        onReadExcelFinish,
        setTab,
        setwhitelistRecords,
    } = useWhitelistConsummer();
    const { returnDefaultVal, onChange, onRemove } = useWhitelist();
    const { records, metadata, loading, handlePagin, onSearch } = useGetWhitelistApi(id);

    // Search whitelist with Phone number
    const { handleSearch } = useSearch((e) => onSearch(e));

    const { column } = useColumns({ onChange, onRemove, handleSearch });

    // Set value to Table whiltelist
    useEffect(() => {
        // Find records != Edit record
        const preRecord =
            records?.filter((rec: any) => !whitelistEdit.find((fin: { id: string }) => fin.id === rec.id)) || [];

        // Find Edit  === Record
        const preEdit = whitelistEdit?.filter((rec: { id: any }) => records.find((fin) => fin.id === rec.id)) || [];
        setwhitelistRecords(returnDefaultVal([...preRecord, ...preEdit]));
    }, [records]);

    function handleAddNew() {
        const elm: any = document.getElementById('whitelist');
        elm.scrollIntoView();
        onAddNewWhitelist();
    }

    function filterRecords(filtRecords: any[], removeRcords: any[]) {
        if (!removeRcords.length) return filtRecords;
        const preRecord = filtRecords.filter((rec) => !removeRcords.find((fin) => fin.id === rec.id));
        return preRecord;
    }

    // Add new by Excel file
    function excelFinish(val: any) {
        setTab('addNew');
        const elm: any = document.getElementById('whitelist');
        elm.scrollIntoView();
        onReadExcelFinish(val);
    }

    return (
        <div>
            <div style={{ display: 'flex' }}>
                <Button onClick={handleAddNew} type="primary">
                    Add New
                </Button>
                <ReadExel onFinish={excelFinish} />
            </div>
            <Table
                size="small"
                loading={loading}
                bordered
                columns={column}
                dataSource={filterRecords(whitelistRecords, whitelistRemove)?.map((re, idx) => ({
                    ...re,
                    idx: idx + 1,
                }))}
                rowKey={(e) => e.id}
                pagination={false}
            />
            <Pagination
                metadata={metadata}
                onPagin={(offset: number, limit: number) => handlePagin({ offset, limit })}
            />
        </div>
    );
};

export default Index;
