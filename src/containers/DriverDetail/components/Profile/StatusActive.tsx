import React from 'react';
import Text from './Text';

const Index: React.FC<{ value: string }> = ({ value }) => {
    const text = { ACTIVE: 'ACTIVE', INACTIVE: 'INACTIVE' };
    const color = { ACTIVE: 'blue', INACTIVE: 'mute' };

    return (
        <Text size="medium" color={color[value]} bold>
            {text[value]}
        </Text>
    );
};

export default Index;
