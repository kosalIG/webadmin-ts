import React from 'react';
import { Button, ButtonProps } from 'antd';
import styled from 'styled-components';
import { useAppConsummer } from 'util/appContext';

const BtnDiv = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 10px;
`;

interface AddNewProps extends ButtonProps {
    navkey?: string;
    noStyle?: boolean;
}

const Index: React.FC<AddNewProps> = ({ children, noStyle, navkey, ...props }) => {
    const { user } = useAppConsummer();
    const result = user?.permissions.find((p) => p === navkey);

    if (result) {
        if (noStyle) {
            return <Button {...props}>{children}</Button>;
        } else {
            return (
                <BtnDiv>
                    <Button {...props}>{children}</Button>
                </BtnDiv>
            );
        }
    }
    return null;
};

export default Index;
