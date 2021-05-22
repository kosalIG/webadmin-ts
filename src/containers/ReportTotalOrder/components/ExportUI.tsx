import React from 'react';
import Currency from 'components/Currency';
import Th from './Th';
import dateFormat from 'dateformat';
import moment from 'moment';

const ExportUI: React.FC<{ records: any[]; id: string }> = ({ records, id, children }) => {
    return (
        <>
            {children}
            <table
                data-cols-width="7,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20"
                style={{ display: 'none' }}
                id={id}
            >
                <thead>
                    <tr>
                        <Th>#</Th>
                        <Th>Order date</Th>
                        <Th>Order time</Th>
                        <Th>Order status</Th>
                        <Th>Trip status</Th>
                        <Th>Driver name</Th>
                        <Th>Driver mobile</Th>
                        <Th>Rider name</Th>
                        <Th>Rider mobile</Th>
                        <Th>Estimated distance</Th>
                        <Th>Estimated duration</Th>
                        <Th>Pickup address</Th>
                        <Th>Dropoff address</Th>
                        <Th>Total distance</Th>
                        <Th>Total duration</Th>
                        <Th>Discount</Th>
                        <Th>Amount</Th>
                    </tr>
                </thead>
                <tbody>
                    {records?.map((rec, idx) => (
                        <tr key={rec.id}>
                            <td data-a-wrap="true" data-a-v="top" data-b-a-s="thin">
                                {idx + 1}
                            </td>
                            <td data-a-wrap="true" data-a-v="top" data-b-a-s="thin">
                                {rec?.orderDetail?.createdAt
                                    ? dateFormat(new Date(rec?.orderDetail?.createdAt), 'dd - mmm - yyyy')
                                    : ''}
                            </td>
                            <td data-a-wrap="true" data-a-v="top" data-b-a-s="thin">
                                {rec?.orderDetail?.createdAt
                                    ? moment(new Date(rec?.orderDetail?.createdAt), 'YYYYMMDD').fromNow()
                                    : '--'}
                            </td>
                            <td data-a-wrap="true" data-a-v="top" data-b-a-s="thin">
                                {rec.orderStatus}
                            </td>
                            <td data-a-wrap="true" data-a-v="top" data-b-a-s="thin">
                                {rec.tripStatus}
                            </td>
                            <td data-a-wrap="true" data-a-v="top" data-b-a-s="thin">
                                {rec?.driver?.fullName}
                            </td>
                            <td data-a-wrap="true" data-a-v="top" data-b-a-s="thin">
                                {rec?.driver?.mobileNumber}
                            </td>
                            <td data-a-wrap="true" data-a-v="top" data-b-a-s="thin">
                                {rec?.rider?.fullName}
                            </td>
                            <td data-a-wrap="true" data-a-v="top" data-b-a-s="thin">
                                {rec?.rider?.mobileNumber}
                            </td>
                            <td data-a-wrap="true" data-a-v="top" data-b-a-s="thin">
                                {(parseFloat(rec?.orderDetail?.estimatedDistance) / 1000).toFixed(2)}
                                km(s)
                            </td>
                            <td data-a-wrap="true" data-a-v="top" data-b-a-s="thin">
                                {Math.ceil(rec?.orderDetail?.estimatedDuration / 60) || 0} mn
                            </td>
                            <td data-a-wrap="true" data-a-v="top" data-b-a-s="thin">
                                {rec?.orderDetail?.pickupAddressName || 'Any where'}
                            </td>
                            <td data-a-wrap="true" data-a-v="top" data-b-a-s="thin">
                                {rec?.orderDetail?.dropoffAddressName || 'Any where'}
                            </td>
                            <td data-a-wrap="true" data-a-v="top" data-b-a-s="thin">
                                {(parseFloat(rec?.orderDetail?.totalDistance) / 1000).toFixed(2)}
                                km(s)
                            </td>
                            <td data-a-wrap="true" data-a-v="top" data-b-a-s="thin">
                                {Math.ceil(rec?.orderDetail?.totalDuration / 60) || 0} mn
                            </td>
                            <td data-a-wrap="true" data-a-v="top" data-b-a-s="thin">
                                <Currency value={rec?.orderDetail?.discountAmount} type="KHR" />
                            </td>
                            <td data-a-wrap="true" data-a-v="top" data-b-a-s="thin">
                                <Currency value={rec?.orderDetail?.collectionAmount} type="KHR" />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default ExportUI;
