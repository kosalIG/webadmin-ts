import React from 'react';
import TableToExcel from '@linways/table-to-excel';
import dateFormat from 'dateformat';
import { Button } from 'antd';
import ExportUI from './ExportUI';

const Index: React.FC<{ records: any[] }> = ({ records }) => {
    const tbId = document.getElementById('paymentreportSingle');
    function onExport() {
        TableToExcel.convert(tbId, {
            name: `Payment report ${dateFormat(new Date(), 'dd - mmm - yyyy_HHMMss')}.xlsx`,
            sheet: {
                name: 'sheet1',
            },
        });
    }

    return (
        <ExportUI id="paymentreportSingle" records={records}>
            <Button onClick={onExport}>Export</Button>
        </ExportUI>
    );
};

export default Index;
