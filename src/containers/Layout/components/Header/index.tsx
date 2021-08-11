import React from 'react';
import styled from 'styled-components';
import { Layout, Avatar, Dropdown } from 'antd';
import { useAppConsummer } from 'util/appContext';
import Menu from './Menu';
import { s3Url } from 'env';
const { Header } = Layout;

const WrapHeader = styled(Header)`
    padding: 0;
    background-color: #fff;
    position: fixed;
    right: 0;
    width: 100%;
    z-index: 9;
`;

const HeaderAvatar = styled.div`
    position: absolute;
    right: 0;
    bottom: 4px;
    margin-right: 20px;
    cursor: pointer;
`;

const Index: React.FC = () => {
    const { user } = useAppConsummer();
    return (
        <WrapHeader>
            <Dropdown overlay={<Menu />}>
                <HeaderAvatar>
                    <Avatar src={user?.avatar && s3Url + user?.avatar} size={40}>
                        {user?.firstName?.charAt(0)?.toUpperCase()}
                    </Avatar>
                </HeaderAvatar>
            </Dropdown>
        </WrapHeader>
    );
};

export default Index;
