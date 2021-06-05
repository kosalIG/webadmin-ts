import React from 'react';
import { Row, Button, Space } from 'antd';
import { useHistory } from 'react-router-dom';
import { DriverData, RequestWithDrawProps } from '../../interface';
import VerifyButton from './VerifyButton';
import WithDraw from './WithDraw';
import { useAppConsummer } from 'util/appContext';

const Index: React.FC<{
    driverDetail: DriverData | null;
    verifyDriver: () => any;
    verifyLoading: boolean;
    requestWithDraw: RequestWithDrawProps;
}> = ({ driverDetail, verifyLoading, requestWithDraw, verifyDriver }) => {
    const { push } = useHistory();

    const { user } = useAppConsummer();
    const isUpdate = user?.permissions.find((p) => p === 'WEB:DRIVER:UPDATE');

    return (
        <div style={{ marginBottom: 10 }}>
            <Row justify="space-between">
                <div>
                    <Button onClick={() => push('/driver')}>Back</Button>
                </div>
                <Space>
                    {isUpdate && (
                        <>
                            <VerifyButton
                                onVerify={verifyDriver}
                                loading={verifyLoading}
                                verify={driverDetail?.verifyDriverLicense}
                            />
                            <WithDraw requestWithDraw={requestWithDraw} />
                        </>
                    )}
                </Space>
            </Row>
        </div>
    );
};

export default Index;
