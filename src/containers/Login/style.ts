import styled from 'styled-components';
import Card from 'antd/lib/card';

export const WrapCard = styled(Card)`
    width: 350px;
    height: 350px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 5px;
`;
export const CardLogo = styled.h2`
    text-align: center;
    color: #1890ff;
`;
