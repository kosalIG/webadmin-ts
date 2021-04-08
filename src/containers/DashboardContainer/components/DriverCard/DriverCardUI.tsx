import React from 'react';
import { Card, Col } from 'antd';
import styled from 'styled-components';
import { themeColor, color } from 'styles/constants';
import { BackgrouColor, DriverCardUI } from '../../interface';

const CardContainer = styled(Card)<{ background: BackgrouColor }>`
    cursor: unset;
    max-height: 140px;
    background-color: ${(prop) => themeColor[prop.background]};
    color: ${color.white};
    border-radius: 0.3rem;
`;

const TopText = styled.div`
    text-align: right;
`;
const ContentText = styled.div`
    font-size: 24px;
    font-weight: 500px;
    padding: 5px 0;
`;

const BottomText = styled.div``;

const Index: React.FC<DriverCardUI> = ({ background = 'primary', topText, contentText, bottomText }) => {
    return (
        <Col xl={6} lg={6} md={12} xs={12}>
            <CardContainer background={background} hoverable>
                <div>
                    <TopText>{topText}</TopText>
                    <ContentText>{contentText}</ContentText>
                    <BottomText>{bottomText}</BottomText>
                </div>
            </CardContainer>
        </Col>
    );
};

export default Index;
