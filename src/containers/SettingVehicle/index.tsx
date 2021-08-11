import React from 'react';
import { Card, Table } from 'antd';
import useColumn from './useColumn';
import { useGetVehicle } from './api';
import VehicleAddNew from './components/VehicleAddNew';
import VehicleModel from './components/VehicleModel';
import Breadcrumbs from 'components/Breadcrumbs';

const index: React.FC = () => {
    const { loading, vehicleRecords, getVehicle } = useGetVehicle();
    const { column } = useColumn({ getVehicle });
    return (
        <Card title="Setting - Vehicle" type="inner">
            <Breadcrumbs propRoutes={['WEB:VEHICLE:READ']} />

            <VehicleAddNew getVehicle={getVehicle} />
            <Table
                loading={loading}
                pagination={false}
                bordered
                size="middle"
                dataSource={vehicleRecords}
                columns={column}
                scroll={{ x: 1700 }}
                expandable={{
                    expandedRowRender: function expand(vehicleData: any) {
                        return <VehicleModel vehicleId={vehicleData?.id} />;
                    },
                }}
            />
        </Card>
    );
};

export default index;
