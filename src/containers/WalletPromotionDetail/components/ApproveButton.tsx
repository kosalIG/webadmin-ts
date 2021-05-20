import React from 'react';
import { Button } from 'antd';
import { useApproveButton } from '../api';
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
    const { visible, loading, onShowModal, onCancel, onOk } = useApproveButton({ onRefetch });
    return (
        <div>
            <Button disabled={disabled} onClick={onShowModal} type="primary">
                Approve
            </Button>
            <Modal
                visible={visible}
                title="Confirm - Multi approval"
                subTilte="approve"
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
