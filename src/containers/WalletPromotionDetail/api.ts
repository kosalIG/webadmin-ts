import { useMutation, useQuery } from '@apollo/client';
import { message } from 'antd';
import { serviceWallet } from 'env';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { APPROVE_WALLET_PROMOTION, GET_PROMOTION_BY_USER, REJECT_WALLET_PROMOTION } from './gql';
import {
    Promotion,
    Data,
    Metadata,
    Selection,
    ApproveButtonProps,
    ApproveButton,
    ApprovalProps,
    Approval,
    Reject,
    RejectProps,
} from './interface';

export function useGetPromotion(): Promotion {
    const { id, status } = useParams<any>();
    const [selectedRowKeys, setSelectedRowKeys] = useState<any>([]);
    const [fullName, setfullName] = useState<string>('');
    const [idSelected, setIdSelected] = useState<string[]>([]);
    const [totalAmount, settotalAmount] = useState<number>(0);
    const [qString] = useState<any>({ filter: { userId: id, status: [status] }, limit: 10, offset: 0 });

    // GET DATA FROM SERVER
    const { data, loading, refetch } = useQuery(GET_PROMOTION_BY_USER, {
        client: serviceWallet,
        variables: { ...qString },
    });
    const { savingTransactions } = data || {};
    const dataObj: Data = savingTransactions || {};

    const onRefetch = (meta?: Metadata) => {
        setSelectedRowKeys([]);
        setIdSelected([]);
        setfullName('');
        settotalAmount(0);
        refetch({ filter: { ...qString.filter }, ...meta });
    };

    // ON SELECT
    function onSelectChange(selected: any, selectRecord: any[]) {
        setSelectedRowKeys(selected);

        const amount = selectRecord?.map((re) => re.amount)?.reduce((a, b) => a + b, 0);
        settotalAmount(amount);

        const ids = selectRecord?.map((re) => re.id);
        setIdSelected(ids);

        setfullName(selectRecord[0]?.wallet?.user?.fullName || '');
    }

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };

    const selection: Selection = {
        fullName,
        rowSelection,
        totalAmount,
        idSelected,
        selectedRowKeys,
    };
    return { dataObj, loading, qString, selection, onRefetch };
}

export function useApproval({ onRefetch, onCancel }: ApprovalProps): Approval {
    const { id } = useParams<any>();
    const [approveSavingToWallet, { data, loading }] = useMutation(APPROVE_WALLET_PROMOTION, {
        client: serviceWallet,
        onError: () => null,
    });

    function onApproval(ids: string[]) {
        approveSavingToWallet({
            variables: {
                input: {
                    ids,
                    userId: id,
                    approvedBy: '123',
                },
            },
        });
    }

    useEffect(() => {
        if (data) {
            onRefetch();
            onCancel();
            message.success('Approve request successfully');
        }
    }, [data]);
    return { onApproval, loading };
}

export function useApproveButton({ onRefetch }: ApproveButtonProps): ApproveButton {
    const [visible, setVisible] = useState(false);
    const { onApproval, loading } = useApproval({ onRefetch, onCancel });

    function onShowModal() {
        setVisible(true);
    }

    function onOk(ids: string[]) {
        onApproval(ids);
    }

    function onCancel() {
        setVisible(false);
    }
    return { visible, loading, onShowModal, onOk, onCancel };
}

// REJECTION
export function useReject({ onRefetch, onCancel }: RejectProps): Reject {
    const { id } = useParams<any>();
    const [rejectSavingToWallet, { data, loading }] = useMutation(REJECT_WALLET_PROMOTION, {
        client: serviceWallet,
        onError: () => null,
    });

    function onReject(ids: string[]) {
        rejectSavingToWallet({
            variables: {
                input: {
                    ids,
                    userId: id,
                    approvedBy: '123',
                },
            },
        });
    }

    useEffect(() => {
        if (data) {
            onRefetch();
            onCancel();
            message.success('Reject request successfully');
        }
    }, [data]);
    return { onReject, loading };
}

export function useRejectButton({ onRefetch }: ApproveButtonProps): ApproveButton {
    const [visible, setVisible] = useState(false);
    const { onReject, loading } = useReject({ onRefetch, onCancel });

    function onShowModal() {
        setVisible(true);
    }

    function onOk(ids: string[]) {
        onReject(ids);
    }

    function onCancel() {
        setVisible(false);
    }
    return { visible, loading, onShowModal, onOk, onCancel };
}
