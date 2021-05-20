import React from 'react';
import { Button } from 'antd';
import { useRejectButton } from '../api';
import Modal from './CustomModal';
import { Metadata } from '../interface';

interface ApproveButton {
    ids: string[];
    fullName: string;
    amount: number;
    disabled?: boolean;
    onRefetch: (meta?: Metadata) => void;
}

const Index: React.FC<ApproveButton> = ({ ids, fullName, amount, disabled, onRefetch }) => {
    const { visible, loading, onShowModal, onCancel, onOk } = useRejectButton({ onRefetch });
    return (
        <div>
            <Button disabled={disabled} onClick={onShowModal} type="ghost" danger>
                Reject
            </Button>
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
