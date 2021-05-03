import React from 'react';
import Text from './Text';

const Index: React.FC<{ value: string }> = ({ value }) => {
    const text = { Online: 'ONLINE', Offline: 'OFFLINE' };
    const color = { Online: 'green', Offline: 'red' };

    return (
        <Text size="medium" color={color[value]} bold>
            {text[value]}
        </Text>
    );
};

export default Index;
