import React from 'react';
import { Steps } from 'antd';
import { AddressProps } from '../../interface';
const { Step } = Steps;

const Address: React.FC<AddressProps> = ({ orderDetail, orderDropoffs }) => {
    return (
        <div>
            <div>
                <strong> Pickup :</strong>
                <Steps progressDot current={2} direction="vertical">
                    <Step title={orderDetail?.pickupAddressName || 'n/a'} />
                </Steps>
            </div>
            <div>
                <strong> Drop off :</strong>
                <Steps progressDot current={2} direction="vertical">
                    {orderDropoffs?.length ? (
                        orderDropoffs?.map((item) => (
                            <Step key={item.sequence} title={item?.dropoffAddressName || 'n/a'} />
                        ))
                    ) : (
                        <Step title={orderDetail?.dropoffAddressName || 'n/a'} />
                    )}
                </Steps>
            </div>
        </div>
    );
};

export default Address;
