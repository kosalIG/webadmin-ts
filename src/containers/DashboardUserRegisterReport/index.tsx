import React, { useState, useEffect } from 'react';
import { Card, Spin, Tabs } from 'antd';
import NavBar from './components/NavBar';
import { Qstring } from './interface';
import { useGetUserRegister } from './api';
import Users from './components/Users';
const { TabPane } = Tabs;

const Index: React.FC = () => {
    const [qString, setqString] = useState<Qstring>({
        type: 'VENDOR',
        dateType: 'DAY',
        startedAt: new Date(new Date().setDate(1)),
        endedAt: new Date(),
    });

    const { getUser, loading, lineLabel, lineData } = useGetUserRegister({ dateType: qString.dateType });

    useEffect(() => {
        getUser(qString);
    }, [qString]);
    console.log(lineData);
    return (
        <Card style={{ cursor: 'default' }} hoverable title="User Register report" type="inner">
            <Spin spinning={loading}>
                <Tabs
                    defaultActiveKey="VENDOR"
                    onChange={(e) => setqString({ ...qString, type: e })}
                    tabBarExtraContent={
                        <NavBar
                            qString={qString}
                            onClick={({ dateType, startedAt, endedAt }) =>
                                setqString({ ...qString, dateType, startedAt, endedAt })
                            }
                        />
                    }
                >
                    <TabPane tab="Driver" key="VENDOR">
                        <Users
                            lineText="Driver"
                            lineLabel={lineLabel}
                            lineData={lineData}
                            maxValue={Math.max(...lineData)}
                        />
                    </TabPane>
                    <TabPane tab="Rider" key="USER">
                        <Users
                            lineText="Rider"
                            lineLabel={lineLabel}
                            lineData={lineData}
                            maxValue={Math.max(...lineData)}
                        />
                    </TabPane>
                </Tabs>
            </Spin>
        </Card>
    );
};

export default Index;
