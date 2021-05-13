import React from 'react';
import styled from 'styled-components';
import { AimOutlined } from '@ant-design/icons';
import { CurrentLocationIconProps } from '../../interface';
import { color } from 'styles/constants';
// CSS
const Container = styled.div<{ isActive?: boolean }>`
    position: absolute;
    right: 9px;
    bottom: 110px;
    font-size: 25px;
    cursor: pointer;
    z-index: 9999px;
    color: ${(props) => (props.isActive ? color.blue : '')};
    &: hover {
        color: ${color.blue};
    }
`;
const Div = styled.div`
    background-color: ${color.white};
    text-align: center;
    width: 40px;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px -1px;
`;

// Location UI
const Index: React.FC<CurrentLocationIconProps> = ({ isCurrentLocation, onCurrentLocation }) => {
    return (
        <Container isActive={isCurrentLocation} onClick={onCurrentLocation}>
            <Div>
                <AimOutlined />
            </Div>
        </Container>
    );
};

export default Index;
