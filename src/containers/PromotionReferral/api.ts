import { useEffect, useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { UseGetReferral, Metadata, Data, AddNew } from './interface';
import { ADD_PROMOTION_REFERRAL, DELETE_REFERRAL, GET_ALL_PROMOTION_REFERRAL, UPDATE_PROMOTION_REFERRAL } from './gql';
import { message } from 'antd';

export function useGetPromotion(): UseGetReferral {
    // STATE
    const initialState = {
        qString: { limit: 10, offset: 0, isGenerated: false, type: 'REFERRAL' },
    };
    const [qString] = useState<any>(initialState.qString);

    // GET DATA FROM SERVER
    const { data, loading, refetch } = useQuery(GET_ALL_PROMOTION_REFERRAL, {
        variables: { filter: { ...qString } },
    });
    const { getPromotions } = data || {};
    const dataObj: Data = getPromotions || {};

    const onRefetch = (meta?: Metadata) => {
        refetch({ filter: { ...qString, ...meta } });
    };

    return { dataObj, loading, onRefetch };
}

export function useAddNew({ form, onRefetch }: { form: any; onRefetch: (val: any) => void }): AddNew {
    // Start Date
    const startedAt = new Date();
    startedAt.setHours(0);
    startedAt.setMinutes(0);
    startedAt.setSeconds(0);

    // End Date
    const endedAt = new Date();
    endedAt.setHours(23);
    endedAt.setMinutes(59);
    endedAt.setSeconds(59);

    const [visible, setVisible] = useState(false);

    // APPROVAL
    const [createPromotion, { data, loading }] = useMutation(ADD_PROMOTION_REFERRAL);

    useEffect(() => {
        if (data) {
            onRefetch({ limit: 10, offset: 0 });
            onCancel();
        }
    }, [data]);

    // ON SHOW
    function onShow() {
        setVisible(true);
    }

    // ON HIDE
    function onCancel() {
        setVisible(false);
        form.resetFields();
    }

    // ON FINISH
    function onFinish(val: any) {
        const { maxAmount, ...newVal } = val || {};
        createPromotion({
            variables: {
                input: {
                    ...newVal,
                    maxAmount: maxAmount || 0,
                    startedAt,
                    endedAt,
                    totalUsed: 0,
                    totalUsedPerUser: 0,
                    expiredDays: 0,
                    type: 'REFERRAL',
                    isGenerated: false,
                    valueType: 'PERCENTAGE',
                    totalGenerated: 0,
                    value: 100,
                    coupon: [],
                    createdBy: '123',
                },
            },
        });
    }
    return { visible, loading, onCancel, onShow, onFinish };
}

export function useEdit({
    form,
    dataObj,
    onRefetch,
}: {
    form: any;
    dataObj: any;
    onRefetch: (val?: any) => void;
}): AddNew {
    const [visible, setVisible] = useState(false);

    // APPROVAL
    const [updatePromotion, { data, loading }] = useMutation(UPDATE_PROMOTION_REFERRAL);

    useEffect(() => {
        if (data) {
            onRefetch();
            onCancel();
        }
    }, [data]);

    // ON SHOW
    function onShow() {
        setVisible(true);
        form.setFieldsValue({
            ...dataObj,
            totalUsedPerUserPerDay: dataObj?.promotionCoupon?.totalUsedPerUserPerDay,
        });
    }

    // ON HIDE
    function onCancel() {
        setVisible(false);
        form.resetFields();
    }

    // ON FINISH
    function onFinish(val: any) {
        const { startedAt, endedAt } = dataObj || {};
        const { maxAmount, ...newVal } = val || {};
        updatePromotion({
            variables: {
                input: {
                    ...newVal,
                    id: dataObj?.id,
                    maxAmount: maxAmount || 0,
                    startedAt,
                    endedAt,
                    totalUsed: 0,
                    totalUsedPerUser: 0,
                    expiredDays: 0,
                    valueType: 'PERCENTAGE',
                    value: 100,
                    updatedBy: '123',
                },
            },
        });
    }
    return { visible, loading, onCancel, onShow, onFinish };
}

export function useDelete(): { deletePromotion: (variables: any) => void; data: any } {
    const [deletePromotion, { data, error }] = useMutation(DELETE_REFERRAL);
    useEffect(() => {
        if (error) {
            message.destroy();
        }
    }, [error]);

    return { data, deletePromotion };
}
