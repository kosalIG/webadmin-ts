import React, { useEffect } from 'react';
import TableToExcel from '@linways/table-to-excel';
import dateFormat from 'dateformat';
import { Button } from 'antd';
import ExportUI from './ExportUI';
import { useGetListAll } from '../api';

const Index: React.FC<{ limit: number }> = ({ limit }) => {
    const { loading, records, getList } = useGetListAll();
    const tbId = document.getElementById('paymentreportAll');
    useEffect(() => {
        if (records) onExport();
    }, [records]);

    function onExport() {
        if (tbId) {
            TableToExcel.convert(tbId, {
                name: `Payment report ${dateFormat(new Date(), 'dd - mmm - yyyy_HHMMss')}.xlsx`,
                sheet: {
                    name: 'sheet1',
                },
            });
        }
    }

    return (
        <ExportUI id="paymentreportAll" records={records}>
            <Button loading={loading} type="primary" onClick={() => getList(limit)}>
                Export All
            </Button>
        </ExportUI>
    );
};

export default Index;
