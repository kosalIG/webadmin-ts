import React from 'react';
import { Divider, Button } from 'antd';
import styled from 'styled-components';
import { EditFilled } from '@ant-design/icons';
import { color } from 'styles/constants';
import Table from './Table';

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
const Index: React.FC = () => {
    return (
        <div>
            <Divider style={{ margin: 0 }} plain orientation="left">
                <About>Vehicle </About>
            </Divider>
            <Flex>
                <Personal>Vehicle Information</Personal>
                <div>
                    <Button icon={<EditFilled />} type="primary" size="small">
                        Edit
                    </Button>
                </div>
            </Flex>
            <div>
                <Table driverObj={{}} />
            </div>
        </div>
    );
};

export default Index;
