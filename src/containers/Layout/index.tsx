import React, { Suspense } from 'react';
import { useState } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import Loading from 'components/Loading';
import { Avatar } from 'antd';
import { useAppConsummer } from 'util/appContext';

import { Header, SideBar } from './components';
import { WrapSider, WrapContent, CustomLoading, Footer, Layout, Logo, SubLogo } from './style';
import logoImage from 'images/admin-logo/logo.jpg';
const DashboardContainer = React.lazy(() => import('containers/DashboardContainer'));

const Index: React.FC = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const { pathname } = useLocation();
    const { permissionRoute, permissionNav } = useAppConsummer();

    return (
        <Layout style={{ overflow: 'hidden' }}>
            <WrapSider collapsed={collapsed} onCollapse={() => setCollapsed(!collapsed)} breakpoint="sm" collapsible>
                <Logo>
                    <Avatar src={logoImage} />
                    <SubLogo>QWIQ ADMIN</SubLogo>
                </Logo>
                <SideBar pathname={pathname} nav={permissionNav} />
            </WrapSider>
            <Layout>
                <Header />
                <WrapContent>
                    <Suspense
                        fallback={
                            <CustomLoading>
                                <Loading />
                            </CustomLoading>
                        }
                    >
                        <Switch>
                            <React.Fragment>
                                <div style={{ minHeight: `82vh` }}>
                                    <Route exact path="/" component={DashboardContainer} />
                                    <Route exact path="/dashboard" component={DashboardContainer} />
                                    {permissionRoute.map((r) => (
                                        <Route key={r.id} exact={r.exact} path={r.path} component={r.component} />
                                    ))}
                                    {/* <Redirect from="/" to="/dashboard" /> */}
                                    {/* <Route render={() => <Test />} /> */}
                                </div>
                            </React.Fragment>
                        </Switch>
                    </Suspense>
                    <Footer style={{ textAlign: 'center' }}>PAGE ADMIN ©2021 Created by QWIQ Team</Footer>
                </WrapContent>
            </Layout>
        </Layout>
    );
};
export default Index;
