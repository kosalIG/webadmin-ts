import React, { useState, useEffect } from 'react';
import { Modal, message } from 'antd';
import styled from 'styled-components';
import { useMutation } from '@apollo/client';
import Currency from 'components/Currency';
import { color } from 'styles/constants';
import { TOPUP } from '../api';

interface TopupModalFormConfirmProps {
    data?: any;
    onHide: () => void;
    fullName: string;
    userId: string;
}

const Table = styled.table`
    width: 100%;
    margin: auto;
`;

const TopupModalFormConfirm: React.FC<TopupModalFormConfirmProps> = ({ data, fullName, userId, onHide }) => {
    const [visible, setvisible] = useState(false);
    const [qwiqTopUp, { loading, data: result }] = useMutation(TOPUP);

    useEffect(() => {
        if (data) {
            setvisible(true);
        }
    }, [data]);

    useEffect(() => {
        if (result) {
            setvisible(false);
            message.success('Topup successfully');
        }
    }, [result]);

    function onCancel() {
        setvisible(false);
        onHide();
    }

    function onOk() {
        qwiqTopUp({ variables: { input: { ...data, userId } } });
    }

    return (
        <Modal confirmLoading={loading} onOk={onOk} okText="Confirm" width={400} visible={visible} onCancel={onCancel}>
            <div>
                <div style={{ marginBottom: 5 }}>
                    Are you sure want to top up to <strong>{fullName}</strong>?
                </div>
                <Table>
                    <tbody>
                        <tr>
                            <td>Wallet ID:</td>
                            <td>
                                <div style={{ color: color.red }}>{data?.walletUId || 'n/a'}</div>
                            </td>
                        </tr>
                        <tr>
                            <td>Amount:</td>
                            <td>
                                <div style={{ color: color.green }}>
                                    <Currency value={data?.amount} type="KHR" />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </Modal>
    );
};

export default TopupModalFormConfirm;
