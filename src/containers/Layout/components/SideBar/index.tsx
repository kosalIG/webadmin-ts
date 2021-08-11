import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { NavProps } from 'util/interface';
import { DashboardOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;
interface SideBarProps {
    nav: NavProps[];
    pathname: string;
}

const Index: React.FC<SideBarProps> = ({ nav, pathname }) => {
    const arrPathName = pathname.split('/')?.[1];
    return (
        <div style={{ height: `80vh`, overflow: 'auto' }}>
            <Menu
                theme="dark"
                mode="inline"
                selectedKeys={pathname === '/' ? ['/dashboard'] : [`/${arrPathName}`]}
                defaultSelectedKeys={['/']}
            >
                <Menu.Item key="/dashboard" icon={<DashboardOutlined />}>
                    <Link to="/dashboard">Dashboard </Link>
                </Menu.Item>
                {nav.map((n) =>
                    n.children ? (
                        <SubMenu key={n.path} icon={n.icon} title={n.name}>
                            {n.children.map((nChild) => (
                                <Menu.Item key={nChild.path} icon={nChild.icon}>
                                    <Link to={nChild.path}>{nChild.name} </Link>
                                </Menu.Item>
                            ))}
                        </SubMenu>
                    ) : (
                        <Menu.Item key={n.path} icon={n.icon}>
                            <Link to={n.path}>{n.name} </Link>
                        </Menu.Item>
                    ),
                )}
            </Menu>
        </div>
    );
};

export default Index;
