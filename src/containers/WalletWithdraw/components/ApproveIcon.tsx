import React from 'react';
import { Approval } from 'components/ActionIcons';
import { useApproveButton } from '../api';
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
    const { visible, loading, onShowModal, onCancel, onOk } = useApproveButton({ onRefetch });

    return (
        <div>
            <Approval navkey="WEB:WALLET_WITHDRAW:APPROVE" onClick={onShowModal} />
            <Modal
                visible={visible}
                title="Confirm - Approval"
                subTilte="approve"
                fullName={fullName || ''}
                amount={amount || 0}
                onOk={() => onOk({ id, walletId })}
                onCancel={onCancel}
                confirmLoading={loading}
            />
        </div>
    );
};

export default Index;
