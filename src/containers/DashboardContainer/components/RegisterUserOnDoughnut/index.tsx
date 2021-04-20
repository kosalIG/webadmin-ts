import React from 'react';
import { Card, Row } from 'antd';
import { Doughnut } from 'react-chartjs-2';
import useRegisterUser from './useRegisterUser';
import RegisterUserTable from './RegisterUserTable';
import { TotalRegisterUser } from '../../interface';

const Index: React.FC<{ totalRegisterUser: TotalRegisterUser }> = ({ totalRegisterUser }) => {
    const { options, doughnut } = useRegisterUser();

    return (
        <Card title="Register User" type="inner">
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 10 }}>
                <Doughnut options={options} data={doughnut} />
            </div>
            <Row justify="space-around" gutter={[12, 12]}>
                <RegisterUserTable
                    title="Android"
                    rider={totalRegisterUser.totalRiderAndroid}
                    driver={totalRegisterUser.totalDriverAndroid}
                    colors="danger"
                />
                <RegisterUserTable
                    title="IOS"
                    rider={totalRegisterUser.totalRiderIOS}
                    driver={totalRegisterUser.totalDriverIOS}
                    colors="primary"
                />
                <RegisterUserTable
                    title="Other"
                    rider={totalRegisterUser.totalRiderOther}
                    driver={totalRegisterUser.totalDriverOther}
                    colors="warning"
                />
            </Row>
        </Card>
    );
};

export default Index;
