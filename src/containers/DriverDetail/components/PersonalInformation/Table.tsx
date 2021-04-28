import React from 'react';
import dateFormat from 'dateformat';
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
                    <td>Refferal code: </td>
                    <TextRight>{driverObj?.referral_code || na}</TextRight>
                </tr>
                <tr>
                    <td>Email : </td>
                    <TextRight>{driverObj?.email || na}</TextRight>
                </tr>
                <tr>
                    <td>Gender: </td>
                    <TextRight>{driverObj?.gender || na} </TextRight>
                </tr>
                <tr>
                    <td>Date of birth: </td>
                    <TextRight>{driverObj?.dob ? dateFormat(new Date(driverObj?.dob), 'dd- mmm- yyyy') : na}</TextRight>
                </tr>
                <tr>
                    <td>ID card Type: </td>
                    <TextRight>{driverObj?.driverInfo?.idCardType || na}</TextRight>
                </tr>
                <tr>
                    <td>ID Card No: </td>
                    <TextRight>{driverObj?.driverInfo?.idCardNo || na}</TextRight>
                </tr>
            </tbody>
        </table>
    );
};

export default Table;
