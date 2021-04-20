import React from 'react';
import { Divider } from 'antd';
import styled from 'styled-components';
import { Col } from 'antd';
import { themeColor } from 'styles/constants';

import { BackgrouColor } from '../../interface';

const Title = styled.div<{ colors?: BackgrouColor }>`
    color: ${(prop) => themeColor[prop.colors]};
    font-size: 18px;
    font-weight: 600;
    text-align: center;
`;

const Flex = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Index: React.FC<{ title: string; rider: number; driver: number; colors: BackgrouColor }> = ({
    title,
    rider,
    driver,
    colors,
}) => (
    <Col sm={7}>
        <div>
            <div>
                <Title colors={colors}>{title}</Title>
                <Divider style={{ margin: `5px 0` }} />
            </div>
            <div>
                <Flex>
                    <div>Drivers</div>
                    <strong>{driver || 0}</strong>
                </Flex>
                <Divider style={{ margin: `4.8px 0` }} />
            </div>
            <div>
                <Flex>
                    <div>Riders</div>
                    <strong>{rider || 0}</strong>
                </Flex>
                <Divider style={{ margin: `5px 0` }} />
            </div>
            <div>
                <Flex>
                    <div>Total</div>
                    <strong>{rider + driver || 0}</strong>
                </Flex>
            </div>
        </div>
    </Col>
);

export default Index;
