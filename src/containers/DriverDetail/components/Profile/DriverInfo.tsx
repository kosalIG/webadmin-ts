import React from 'react';
import Currency from 'components/Currency';
import styled from 'styled-components';

import Text from './Text';
import Divider from './Divider';
import StatusVerify from './StatusVerify';
import StatusActive from './StatusActive';
import StatusOnline from './StatusOnline';

const Dev = styled.div`
    margin-bottom: 20px;
`;

const DriverInfo: React.FC = () => {
    return (
        <div>
            <Dev>
                <Text size="large" bold>
                    Driver Name
                </Text>
            </Dev>
            <Dev>
                <Text size="small" bold color="mute">
                    BALANCE
                </Text>
                <Text size="large" color="green" bold>
                    <Currency value={0} type="KHR" />
                </Text>
            </Dev>
            <Dev>
                <Text size="small" bold color="mute">
                    STATUS
                </Text>
                <div style={{ display: 'flex' }}>
                    <StatusVerify value={0} />
                    <Divider />
                    <StatusActive value="ACTIVE" />
                    <Divider />
                    <StatusOnline value="ONLINE" />
                </div>
            </Dev>
            <Dev>
                <Text size="small" bold color="mute">
                    TELL
                </Text>
                <Text size="medium" bold>
                    (+855) 707236189
                </Text>
            </Dev>
        </div>
    );
};

export default DriverInfo;
