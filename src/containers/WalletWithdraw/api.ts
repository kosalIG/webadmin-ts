import { useMutation, useQuery } from '@apollo/client';
import { message } from 'antd';
import { serviceWallet } from 'env';
import { useState, useEffect } from 'react';
import { APPROVE_WALLET_WITHDRAW, GET_WALLET_WITHDRAW, REJECT_WALLET_WITHDRAW } from './gql';
import {
    Promotion,
    Data,
    Metadata,
    ApproveButtonProps,
    ApproveButton,
    ApprovalProps,
    Approval,
    Reject,
    RejectProps,
    IDS,
} from './interface';

const sDate = new Date();
sDate.setHours(0);
sDate.setMinutes(0);
sDate.setSeconds(0);

// End Date
const eDate = new Date();
eDate.setHours(23);
eDate.setMinutes(59);
eDate.setSeconds(59);

export function useGetPromotion(): Promotion {
    const [qString, setQstring] = useState<any>({
        filter: {
            status: ['PENDING'],
            startDate: sDate.toISOString(),
            endDate: eDate.toISOString(),
        },
        limit: 10,
        offset: 0,
    });

    // GET DATA FROM SERVER
    const { data, loading, refetch } = useQuery(GET_WALLET_WITHDRAW, {
        client: serviceWallet,
        variables: { ...qString },
    });

    const { walletWithdraws } = data || {};
    const dataObj: Data = walletWithdraws || {};

    const onRefetch = (meta?: Metadata) => {
        refetch({ filter: { ...qString.filter }, ...meta });
    };

    function handleDate(datetime: any) {
        setQstring({
            ...qString,
            filter: { ...qString.filter, ...datetime },
            limit: 10,
            offset: 0,
        });
    }

    // STATUS FILTER
    function handleChange(filter: any): void {
        if (!filter?.status) {
            setQstring({
                ...qString,
                filter: {
                    ...qString.filter,
                    status: ['PENDING'],
                },
                limit: 10,
                offset: 0,
            });
        }

        if (filter?.status) {
            setQstring({
                ...qString,
                filter: {
                    ...qString.filter,
                    status: filter?.status,
                },
                limit: 10,
                offset: 0,
            });
        }
    }
    return { dataObj, loading, qString, onRefetch, handleDate, handleChange };
}

export function useApproval({ onRefetch, onCancel }: ApprovalProps): Approval {
    const [approveWithdraw, { data, loading }] = useMutation(APPROVE_WALLET_WITHDRAW, {
        client: serviceWallet,
        onError: () => null,
    });

    function onApproval({ id, walletId }: IDS) {
        approveWithdraw({
            variables: {
                input: {
                    id,
                    walletId,
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

    function onOk({ id, walletId }: IDS) {
        onApproval({ id, walletId });
    }

    function onCancel() {
        setVisible(false);
    }
    return { visible, loading, onShowModal, onOk, onCancel };
}

// REJECTION
export function useReject({ onRefetch, onCancel }: RejectProps): Reject {
    const [rejectWithdraw, { data, loading }] = useMutation(REJECT_WALLET_WITHDRAW, {
        client: serviceWallet,
        onError: () => null,
    });

    function onReject({ id, walletId }: IDS) {
        rejectWithdraw({
            variables: {
                input: {
                    id,
                    walletId,
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

    function onOk({ id, walletId }: IDS) {
        onReject({ id, walletId });
    }

    function onCancel() {
        setVisible(false);
    }
    return { visible, loading, onShowModal, onOk, onCancel };
}
