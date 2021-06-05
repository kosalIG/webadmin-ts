import React from 'react';
import { Divider } from 'antd';
import styled from 'styled-components';
import { color } from 'styles/constants';
import Table from './Table';
import { DriverData, UpdateDriver } from '../../interface';

import Edit from './PersonalModal';
import { useAppConsummer } from 'util/appContext';
interface PersonalProps {
    driverDetail: DriverData | null;
    updateDriver: UpdateDriver;
}

const About = styled.div`
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

const Index: React.FC<PersonalProps> = ({ driverDetail, updateDriver }) => {
    const { user } = useAppConsummer();
    const isUpdate = user?.permissions.find((p) => p === 'WEB:DRIVER:UPDATE');

    return (
        <div style={{ marginTop: 36 }}>
            <Divider style={{ margin: 0 }} plain orientation="left">
                <About>About</About>
            </Divider>
            <Flex>
                <Personal>Personal Information</Personal>
                {isUpdate && <Edit driverDetail={driverDetail} updateDriver={updateDriver} />}
            </Flex>
            <div>
                <Table driverObj={driverDetail} />
            </div>
        </div>
    );
};

export default Index;
