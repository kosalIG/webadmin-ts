import React from 'react';
import Text from './Text';

const Index: React.FC<{ value: number }> = ({ value }) => {
    const text = { 1: 'VERIFIED', 0: 'PENDING' };
    const color = { 1: 'darkGreen', 0: 'gold' };

    return (
        <Text size="medium" color={color[value]} bold>
            {text[value]}
        </Text>
    );
};

export default Index;
