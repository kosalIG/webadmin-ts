import React from 'react';
import { Card, Divider } from 'antd';
import Pagination from 'components/Pagination';
import DnDTable from 'util/DnDTable';
import useColumn, { groupColumn } from './useColumn';
import { useGetList } from './api';
import SingleExport from './components/SingleExport';
import ExportAll from './components/ExportAll';

const Index: React.FC = () => {
    const { dataObj, loading, onPagin } = useGetList();
    const { columns } = useColumn();

    return (
        <Card title="Report Payment" type="inner">
            <DnDTable
                name="payment"
                loading={loading}
                size="middle"
                bordered
                pagination={false}
                columns={columns}
                rowKey={(data: any) => data.id}
                scroll={{ x: 1300 }}
                groupColumn={groupColumn}
                dataSource={dataObj?.data?.map((item: any, idx: number) => ({ ...item, idx: idx + 1 }))}
            >
                <SingleExport records={dataObj?.data} />
                <Divider type="vertical" />
                <ExportAll limit={dataObj?.metadata?.total} />
            </DnDTable>
            <Pagination metadata={dataObj?.metadata} onPagin={(offset, limit) => onPagin({ limit, offset })} />
        </Card>
    );
};

export default Index;
