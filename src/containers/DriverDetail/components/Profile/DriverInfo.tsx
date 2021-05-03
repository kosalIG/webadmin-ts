import React from 'react';
import Currency from 'components/Currency';
import styled from 'styled-components';
import { CarFilled } from '@ant-design/icons';

import Text from './Text';
import Divider from './Divider';
import StatusVerify from './StatusVerify';
import StatusActive from './StatusActive';
import StatusOnline from './StatusOnline';
import { DriverData } from '../../interface';
interface DriverInfoProps {
    driverDetail: DriverData | null;
    totalBalance: number;
    OnlineDriver: any;
    vehicleRecords: any[];
}

const Dev = styled.div`
    margin-bottom: 20px;
`;

const DriverInfo: React.FC<DriverInfoProps> = ({ driverDetail, totalBalance, OnlineDriver, vehicleRecords }) => {
    const { driverInfo } = driverDetail || {};
    const vehicleName = vehicleRecords?.find((item: any) => item?.id === driverInfo?.vehicleType);
    return (
        <div>
            <Dev style={{ display: 'flex' }}>
                <Text size="large" bold>
                    {driverDetail?.fullName || 'n/a'}
                    <CarFilled style={{ margin: `0 3px`, fontSize: 12 }} />
                </Text>
                <div style={{ fontSize: 11, marginTop: 10 }}> {vehicleName?.name}</div>
            </Dev>
            <Dev>
                <Text size="small" bold color="mute">
                    BALANCE
                </Text>
                <Text size="large" color="green" bold>
                    <Currency value={totalBalance || 0} type="KHR" />
                </Text>
            </Dev>
            <Dev>
                <Text size="small" bold color="mute">
                    STATUS
                </Text>
                <div style={{ display: 'flex' }}>
                    <StatusVerify value={driverDetail?.verifyDriverLicense || 0} />
                    <Divider />
                    <StatusActive value={driverDetail?.status || 'INACTIVE'} />
                    <Divider />
                    <StatusOnline value={OnlineDriver} />
                </div>
            </Dev>
            <Dev>
                <Text size="small" bold color="mute">
                    TELL
                </Text>
                <Text size="medium" bold>
                    ({driverDetail?.mobileDetail?.countryCode}) {driverDetail?.mobileDetail?.localNumber}
                </Text>
            </Dev>
        </div>
    );
};

export default DriverInfo;
