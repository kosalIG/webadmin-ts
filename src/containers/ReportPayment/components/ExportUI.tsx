import React from 'react';
import Currency from 'components/Currency';
import Th from './Th';

const ExportUI: React.FC<{ records: any[]; id: string }> = ({ records, id, children }) => {
    return (
        <>
            {children}
            <table data-cols-width="7,20,20,20,20,20,20,20" style={{ display: 'none' }} id={id}>
                <tbody>
                    <tr>
                        <Th>#</Th>
                        <Th>Order id</Th>
                        <Th>Full name</Th>
                        <Th>Mobile number</Th>
                        <Th>Pickup address</Th>
                        <Th>Dropoff address</Th>
                        <Th>Promotion amount</Th>
                        <Th>Discount</Th>
                        <Th>Amount</Th>
                    </tr>
                    {records?.map((rec, idx) => (
                        <tr key={rec.id}>
                            <td data-a-wrap="true" data-a-v="top" data-b-a-s="thin">
                                {idx + 1}
                            </td>
                            <td data-a-wrap="true" data-a-v="top" data-b-a-s="thin">
                                {rec.orderID}
                            </td>
                            <td data-a-wrap="true" data-a-v="top" data-b-a-s="thin">
                                {rec?.driver?.fullName}
                            </td>
                            <td data-a-wrap="true" data-a-v="top" data-b-a-s="thin">
                                {rec?.driver?.mobileNumber}
                            </td>
                            <td data-a-wrap="true" data-a-v="top" data-b-a-s="thin">
                                {rec?.order?.orderDetail?.pickupAddressName}
                            </td>
                            <td data-a-wrap="true" data-a-v="top" data-b-a-s="thin">
                                {rec?.order?.orderDetail?.dropoffAddressName}
                            </td>
                            <td data-a-wrap="true" data-a-v="top" data-b-a-s="thin">
                                <Currency value={rec.commissionFee} type="KHR" />
                            </td>
                            <td data-a-wrap="true" data-a-v="top" data-b-a-s="thin">
                                <Currency value={rec.discountAmount} type="KHR" />
                            </td>
                            <td data-a-wrap="true" data-a-v="top" data-b-a-s="thin">
                                <Currency value={rec.totalAmount} type="KHR" />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default ExportUI;
