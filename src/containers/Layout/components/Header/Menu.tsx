import React from 'react';
import styled from 'styled-components';
import { Divider, Button, Avatar, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useAppConsummer } from 'util/appContext';
import { s3Url } from 'env';

const Container = styled.div`
    background-color: #fff;
    background: #fff;
    border: 1px solid #ccc;
    border-color: rgba(0, 0, 0, 0.2);
    color: #000;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    width: 300px;
    margin-right: 20px;
`;
const Padding = styled.div`
    padding: 15px;
`;
const H3 = styled.h2`
    margin-bottom: -3px !important;
`;

const MenuDropDown: React.FC = () => {
    const { logout, user } = useAppConsummer();
    return (
        <Container>
            <Padding style={{ textAlign: 'center' }}>
                <div style={{ padding: 10 }}>
                    <Avatar src={user?.avatar && s3Url + user?.avatar} size={75}>
                        {user?.firstName?.charAt(0)?.toUpperCase()}
                    </Avatar>
                </div>
                <H3>{user?.fullName || 'n/a'}</H3>
                <div>{user?.email || 'n/a'}</div>
            </Padding>
            <Divider style={{ margin: `0px 0px` }} />
            <Menu>
                <Menu.Item key="1">
                    <UserOutlined /> View Profile
                </Menu.Item>
            </Menu>
            <Divider style={{ margin: `0px 0px` }} />
            <Padding style={{ display: 'flex', justifyContent: 'center' }}>
                <Button onClick={logout}>Log out</Button>
            </Padding>
        </Container>
    );
};

export default MenuDropDown;
