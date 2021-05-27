import React from 'react';
import { Table, Card } from 'antd';
import useModelColumn from './useModelColumn';
import ModelAddNew from './ModelAddNew';
import { useGetModel } from './modelApi';

interface ModelProps {
    vehicleId: any;
}
const Index: React.FC<ModelProps> = ({ vehicleId }) => {
    const { records, loading, getModel } = useGetModel(vehicleId);
    const { column } = useModelColumn({ getModel, vehicleId });

    return (
        <Card title="Vehicle - Model" type="inner" style={{ width: 600, margin: `10px 15px 0 0` }}>
            <Table
                loading={loading}
                columns={column}
                bordered
                dataSource={records?.map((item: any, idx) => ({ ...item, idx: idx + 1 }))}
                rowKey={(item: any) => item.id}
                pagination={false}
                locale={{
                    emptyText: 'No Data',
                }}
                size="small"
            />
            <ModelAddNew vehicleId={vehicleId} getModel={getModel} />
        </Card>
    );
};

export default Index;
