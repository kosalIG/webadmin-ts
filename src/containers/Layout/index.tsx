import React, { Suspense } from 'react';
import { useState } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import Loading from 'components/Loading';

import route from '_route';
import nav from '_nav';
import { Header, SideBar } from './components';
import { WrapSider, WrapContent, CustomLoading, Footer, Layout, Logo, SubLogo } from './style';
const Index: React.FC = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const { pathname } = useLocation();

    return (
        <Layout style={{ overflow: 'hidden' }}>
            <WrapSider collapsed={collapsed} onCollapse={() => setCollapsed(!collapsed)} breakpoint="sm" collapsible>
                <Logo>
                    <SubLogo>QWIQ ADMIN</SubLogo>
                </Logo>
                <SideBar pathname={pathname} nav={nav} />
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
                                    {route.map((r) => (
                                        <Route key={r.id} exact={r.exact} path={r.path} component={r.component} />
                                    ))}
                                    {/* <Redirect from="/" to="/dashboard" /> */}
                                </div>
                            </React.Fragment>
                        </Switch>
                    </Suspense>
                    <Footer style={{ textAlign: 'center' }}>PAGE ADMIN CORE ©2020 Created by KOSAL</Footer>
                </WrapContent>
            </Layout>
        </Layout>
    );
};
export default Index;
