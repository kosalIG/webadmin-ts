import React from 'react';
import styled from 'styled-components';
import GoogleMap from './components/GoogleMap';
const WrapCard = styled.div`
    background-color: #fff;
    padding: 8px;
`;
const Index: React.FC = () => {
    return (
        <WrapCard>
            <GoogleMap />
        </WrapCard>
    );
};

export default Index;
