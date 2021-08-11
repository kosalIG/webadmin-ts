import React from 'react';
import { Card, Divider } from 'antd';
import Pagination from 'components/Pagination';
import DnDTable from 'util/DnDTable';
import useColumn, { groupColumn } from './useColumn';
import { useGetTotalReport } from './api';
import SingleExport from './components/SingleExport';
import ExportAll from './components/ExportAll';
import Breadcrumbs from 'components/Breadcrumbs';

const index: React.FC = () => {
    const { dataObj, loading, onPagin, onChange } = useGetTotalReport();
    const { columns } = useColumn();
    return (
        <Card title="Total Order" type="inner">
            <Breadcrumbs propRoutes={['WEB:ORDER_REASON:READ']} />

            <DnDTable
                bordered
                name="totalOrder"
                size="middle"
                pagination={false}
                loading={loading}
                columns={columns}
                groupColumn={groupColumn}
                rowKey={(data: any) => data.id}
                onChange={(_, filter) => onChange(filter)}
                dataSource={dataObj?.results?.map((item: any, idx: number) => ({
                    ...item,
                    orderTime: item?.orderDetail?.createdAt,
                    idx: idx + 1,
                }))}
                scroll={{ x: 2000 }}
            >
                <SingleExport records={dataObj?.results} />
                <Divider type="vertical" />
                <ExportAll limit={dataObj?.metadata?.total} />
            </DnDTable>
            <Pagination metadata={dataObj?.metadata} onPagin={(offset, limit) => onPagin({ limit, offset })} />
        </Card>
    );
};

export default index;
