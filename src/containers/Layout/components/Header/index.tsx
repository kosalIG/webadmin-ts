import React from 'react';
import styled from 'styled-components';
import { Layout, Avatar, Dropdown } from 'antd';
import Menu from './Menu';
const { Header } = Layout;

const WrapHeader = styled(Header)`
    padding: 0;
    background-color: #fff;
    position: fixed;
    right: 0;
    width: 100%;
    z-index: 10;
`;

const HeaderAvatar = styled.div`
    position: absolute;
    right: 0;
    bottom: 4px;
    margin-right: 20px;
    cursor: pointer;
`;

const Index: React.FC = () => {
    return (
        <WrapHeader>
            <Dropdown overlay={<Menu />}>
                <HeaderAvatar>
                    <Avatar size={40}>A</Avatar>
                </HeaderAvatar>
            </Dropdown>
        </WrapHeader>
    );
};

export default Index;
