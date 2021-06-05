import React from 'react';
import { Button } from 'antd';
import { useRejectButton } from '../api';
import Modal from './CustomModal';
import { Metadata } from '../interface';
import { useAppConsummer } from 'util/appContext';

interface ApproveButton {
    ids: string[];
    fullName: string;
    amount: number;
    disabled: boolean;
    onRefetch: (meta?: Metadata) => void;
}

const Index: React.FC<ApproveButton> = ({ ids, fullName, amount, disabled, onRefetch }) => {
    const { visible, loading, onShowModal, onCancel, onOk } = useRejectButton({ onRefetch });
    const { user } = useAppConsummer();
    const result = user?.permissions.find((p) => p === 'WEB:WALLET_PROMOTION:REJECT');

    return (
        <div>
            {result && (
                <Button disabled={disabled} onClick={onShowModal} type="ghost" danger>
                    Reject
                </Button>
            )}

            <Modal
                visible={visible}
                title=" Confirm - Multi rejects"
                subTilte="rejects"
                fullName={fullName}
                amount={amount}
                onOk={() => onOk(ids)}
                onCancel={onCancel}
                confirmLoading={loading}
            />
        </div>
    );
};

export default Index;
