import React from 'react';
import { Approval } from 'components/ActionIcons';
import { useApproveButton } from '../api';
import Modal from './CustomModal';
import { Metadata } from '../interface';

interface ApproveButton {
    id: string;
    fullName?: string;
    amount?: number;
    disabled?: boolean;
    onRefetch: (meta?: Metadata) => void;
}

const Index: React.FC<ApproveButton> = ({ id, fullName, amount, onRefetch }) => {
    const ids = [id];
    const { visible, loading, onShowModal, onCancel, onOk } = useApproveButton({ onRefetch });

    return (
        <div>
            <Approval onClick={onShowModal} />
            <Modal
                visible={visible}
                title="Confirm - Approval"
                subTilte="approve"
                fullName={fullName}
                amount={amount || 0}
                onOk={() => onOk(ids)}
                onCancel={onCancel}
                confirmLoading={loading}
            />
        </div>
    );
};

export default Index;
