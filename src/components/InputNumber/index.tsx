import React, { ReactNode } from 'react';
import { InputNumber, InputNumberProps } from 'antd';
import styled from 'styled-components';
const InputNumbers = styled(InputNumber)`
    width: 100% !important;
`;

interface NumberProps extends InputNumberProps {
    addonAfter?: ReactNode;
}
const Index: React.FC<NumberProps> = ({ addonAfter, ...props }) => {
    return (
        <div className="ant-input-group-wrapper">
            <div className="ant-form-item-control-input">
                <div className="ant-form-item-control-input-content">
                    <span className="ant-input-group-wrapper">
                        <span className="ant-input-wrapper ant-input-group">
                            <InputNumbers {...props} className="ant-input-group" />
                            {addonAfter && (
                                <span className="ant-input-group-addon">
                                    <div>{addonAfter}</div>
                                </span>
                            )}
                        </span>
                    </span>
                </div>
            </div>
        </div>
    );
};
export default Index;
