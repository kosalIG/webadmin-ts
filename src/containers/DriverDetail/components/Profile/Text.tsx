import React from 'react';
import styled from 'styled-components';
import { color } from 'styles/constants';

type Color = 'green' | 'warning' | 'red' | 'blue' | 'mute' | 'black' | 'gold' | 'darkGreen';
type Size = 'small' | 'medium' | 'large';
const size = { small: 11, medium: 15, large: 20 };

const Dev = styled.div<{ size?: Size; bold?: boolean; color?: Color }>`
    font-size: ${(props) => size[props.size || 'small']}px;
    font-weight: ${(props) => (props.bold ? 600 : 'unset')};
    color: ${(props) => color[props.color]};
`;

const Text: React.FC<{ bold?: boolean; size?: Size; color?: Color }> = ({ color, bold = false, size, children }) => {
    return (
        <Dev color={color} bold={bold} size={size}>
            {children || 'n/a'}
        </Dev>
    );
};

export default Text;
