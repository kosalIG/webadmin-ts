import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { NavProps } from 'util/interface';
const { SubMenu } = Menu;
interface SideBarProps {
    nav: NavProps[];
    pathname: string;
}

const Index: React.FC<SideBarProps> = ({ nav, pathname }) => {
    return (
        <div style={{ height: `90vh`, overflow: 'auto' }}>
            <Menu theme="dark" mode="inline" selectedKeys={[pathname]} defaultSelectedKeys={['dashboard']}>
                {nav.map((n) => (
                    <>
                        <Menu.Item key={n.path} icon={n.icon}>
                            <Link to={n.path}>{n.name} </Link>
                        </Menu.Item>
                        {n.children && (
                            <SubMenu key={n.path} icon={n.icon} title={n.name}>
                                {n.children.map((nChild) => (
                                    <Menu.Item key={nChild.path} icon={nChild.icon}>
                                        <Link to={nChild.path}>{nChild.name} </Link>
                                    </Menu.Item>
                                ))}
                            </SubMenu>
                        )}
                    </>
                ))}
            </Menu>
        </div>
    );
};

export default Index;
