import React from 'react';
import styled from 'styled-components';

const na = <div style={{ color: 'gray' }}>n/a</div>;
const TextRight = styled.td`
    text-align: right;
`;
const Table: React.FC<{ driverObj: any }> = ({ driverObj }) => {
    return (
        <table style={{ width: '100%', marginTop: 10 }}>
            <tbody>
                <tr>
                    <td>Driver Id: </td>
                    <TextRight>{driverObj?.driverInfo?.myId || na}</TextRight>
                </tr>
                <tr>
                    <td>Driver License No : </td>
                    <TextRight>{driverObj?.driverInfo?.drivingLicenseNo || na}</TextRight>
                </tr>
                <tr>
                    <td>Plate Number: </td>
                    <TextRight>{driverObj?.driverInfo?.plateNumber || na} </TextRight>
                </tr>
                <tr>
                    <td>Model: </td>
                    <TextRight>{driverObj?.driverInfo?.modelName || na}</TextRight>
                </tr>
                <tr>
                    <td>Color: </td>
                    <TextRight>{driverObj?.color || na}</TextRight>
                </tr>
            </tbody>
        </table>
    );
};

export default Table;
