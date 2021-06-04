import React from 'react';
import { Divider } from 'antd';
import Currency from 'components/Currency';
import moment from 'moment';
import Tr from './Tr';
import { PickupDetailProps } from '../../interface';

const PickupDetail: React.FC<PickupDetailProps> = ({ orderDetail }) => {
    const { estimatedDuration, estimatedDistance, estimatedCost, discountAmount, collectionAmount, totalAmount } =
        orderDetail || {};

    function onCeil(value?: number) {
        if (value) {
            return Math.ceil(value / 60);
        } else {
            return 0;
        }
    }

    function distance(value?: number) {
        if (value) {
            return (value / 1000).toFixed(2);
        } else {
            return `0.00`;
        }
    }

    return (
        <>
            <table style={{ width: `100%` }}>
                <tbody>
                    <Tr text="Time:">
                        {orderDetail?.createdAt
                            ? moment(orderDetail?.createdAt).format('DD- MMM -YYYY hh:mm:ss​ a')
                            : 'n/a'}
                    </Tr>
                    <Tr text="Estimats Duration:">{onCeil(estimatedDuration)} mn</Tr>
                    <Tr text="Estimats Distance:">{distance(estimatedDistance)} km</Tr>
                    <Tr text="Estimats Cost:">
                        <Currency value={estimatedCost || 0} type="KHR" />
                    </Tr>
                    <Tr text="Discount:">
                        <Currency value={discountAmount || 0} type="KHR" />
                    </Tr>
                    <Tr text="Amount:">
                        <Currency value={collectionAmount || 0} type="KHR" />
                    </Tr>
                    <Tr text="Total Amount:">
                        <Currency value={totalAmount || 0} type="KHR" />
                    </Tr>
                </tbody>
            </table>
            <Divider />
        </>
    );
};

export default PickupDetail;
