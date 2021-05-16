import React from 'react';
import { Card, Table } from 'antd';
import useColum from './useColumn';
import { useGetPromotion } from './api';
import Pagination from 'components/Pagination';

const index: React.FC = () => {
    const { dataObj, loading, pagin, onFilter, onRefetch } = useGetPromotion();
    const { columns } = useColum({ onRefetch });

    return (
        <Card title="Promotion" type="inner">
            {/* <AddNew onRefetch={onRefetch} /> */}
            <Table
                size="middle"
                bordered
                loading={loading}
                pagination={false}
                onChange={onFilter}
                rowKey={(e: any) => e.id}
                dataSource={dataObj?.data?.map((item: any, idx) => ({ ...item, idx: idx + 1 }))}
                columns={columns}
                // expandable={{
                //     expandedRowRender: function expand(val: any) {
                //         return <PromotionWhitelist id={val?.id} />;
                //     },
                // }}
                scroll={{ x: 3000 }}
            />
            <Pagination metadata={dataObj?.metadata} onPagin={(offset, limit) => pagin({ offset, limit })} />
        </Card>
    );
};

export default index;
