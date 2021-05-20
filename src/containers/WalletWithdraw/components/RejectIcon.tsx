import React from 'react';
import { Reject } from 'components/ActionIcons';
import { useRejectButton } from '../api';
import Modal from './CustomModal';
import { Metadata } from '../interface';

interface ApproveButton {
    id: string;
    walletId: string;
    fullName?: string;
    amount?: number;
    disabled?: boolean;
    onRefetch: (meta?: Metadata) => void;
}

const Index: React.FC<ApproveButton> = ({ id, walletId, fullName, amount, onRefetch }) => {
    const { visible, loading, onShowModal, onCancel, onOk } = useRejectButton({ onRefetch });

    return (
        <div>
            <Reject onClick={onShowModal} />
            <Modal
                visible={visible}
                title="Confirm - Reject"
                subTilte="reject"
                fullName={fullName}
                amount={amount || 0}
                onOk={() => onOk({ id, walletId })}
                onCancel={onCancel}
                confirmLoading={loading}
            />
        </div>
    );
};

export default Index;
