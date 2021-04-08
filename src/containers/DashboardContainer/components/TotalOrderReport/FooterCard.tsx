import React from 'react';
import { Progress } from 'antd';
import styled from 'styled-components';
import { themeColor } from 'styles/constants';
import { BackgrouColor, FooterCardProps } from '../../interface';

const Title = styled.div``;

const VatValue = styled.div`
    font-weight: bold !important;
`;

const ProgressBar = styled(Progress)<{ background: BackgrouColor }>`
    & div.ant-progress-bg {
        background-color: ${(prop) => themeColor[prop.background]};
    }
`;

const FooterCard: React.FC<FooterCardProps> = ({ title, value, vatValue, background }) => {
    return (
        <div style={{ textAlign: 'center' }}>
            <Title>{title}</Title>
            <VatValue>
                {value || 0} times ({Math.ceil(vatValue || 0).toFixed(2)}%)
            </VatValue>
            <ProgressBar background={background || 'primary'} percent={10} showInfo={false} size="small" />
        </div>
    );
};

export default FooterCard;
