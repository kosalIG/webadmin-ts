import React from 'react';
import Text from './Text';

const Index: React.FC<{ value: string }> = ({ value }) => {
    const text = { ONLINE: 'ONLINE', INACTIVE: 'OFFLINE' };
    const color = { ONLINE: 'green', INACTIVE: 'red' };

    return (
        <Text size="medium" color={color[value]} bold>
            {text[value]}
        </Text>
    );
};

export default Index;
