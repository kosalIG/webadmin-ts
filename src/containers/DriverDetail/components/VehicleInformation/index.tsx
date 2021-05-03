import React from 'react';
import { Divider } from 'antd';
import styled from 'styled-components';
import { color } from 'styles/constants';
import Table from './Table';
import { DriverData, UpdateDriver, VehicleModel } from '../../interface';
import VehicleUpdate from './VehicleModal';
interface VehicleProps {
    driverDetail: DriverData | null;
    updateDriver: UpdateDriver;
    vehicleModel: VehicleModel;
}
const Vehicle = styled.div`
    font-size: 11px;
    font-weight: bold;
    color: ${color.mute};
`;
const Personal = styled.div`
    font-size: 15px;
    font-weight: 600;
`;
const Flex = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
`;

const Index: React.FC<VehicleProps> = ({ driverDetail, updateDriver, vehicleModel }) => {
    const colorName =
        updateDriver?.colorRecords?.find((item: any) => item.id === driverDetail?.driverInfo?.colorId) || {};
    return (
        <div>
            <Divider style={{ margin: 0 }} plain orientation="left">
                <Vehicle>Vehicle </Vehicle>
            </Divider>
            <Flex>
                <Personal>Vehicle Information</Personal>
                <VehicleUpdate driverDetail={driverDetail} updateDriver={updateDriver} vehicleModel={vehicleModel} />
            </Flex>
            <div>
                <Table colorName={colorName} driverObj={driverDetail} />
            </div>
        </div>
    );
};

export default Index;
