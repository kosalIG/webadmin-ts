import { useEffect, useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { message } from 'antd';
import { ADD_COUPON, GET_ALL_PROMOTION, UPDATE_COUPON, UPDATE_STATUS } from './gql';
import { Data, UseGetPromotion, Metadata } from './interface';
import { DELETE_ALL, DELETE_PROMOTION, DELETE_SINGLE, PUSH_NOTIFI } from './gql';

export function useGetPromotion(): UseGetPromotion {
    // STATE
    const initialState = {
        qString: { limit: 10, offset: 0, isGenerated: false, type: 'COUPON' },
    };
    const [qString, setQstring] = useState<any>(initialState.qString);

    // GET DATA FROM SERVER
    const { data, loading, refetch } = useQuery(GET_ALL_PROMOTION, {
        variables: { filter: { ...qString } },
    });
    const { getPromotions } = data || {};
    const dataObj: Data = getPromotions || {};

    const pagin = (pag: Metadata): void => {
        setQstring({ ...qString, ...pag });
    };

    // Handle filter
    function onFilter(_, filters: any) {
        const preQ: any = {};

        // Status filter
        if (filters?.status) {
            preQ.status = filters?.status[0];
        }
        if (!filters?.status) {
            delete preQ.status;
        }

        // user type filter
        if (filters?.userType) {
            preQ.userType = filters?.userType[0];
        }

        if (!filters?.userType) {
            delete preQ.userType;
        }

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { userType, status, ...newQString } = qString;
        setQstring({ ...newQString, ...preQ });
    }

    const onRefetch = (meta?: Metadata) => {
        refetch({ filter: { ...qString, ...meta } });
    };

    return { dataObj, loading, pagin, onFilter, onRefetch };
}

export function useAddCoupon(): { createPromotion: (data: any) => void; loading: boolean; data: any } {
    // Add Promotion
    const [createPromotion, { data, loading }] = useMutation(ADD_COUPON);
    return { createPromotion, loading, data };
}

export function useUpdateCoupon(): { updatePromotion: (data: any) => void; loading: boolean; data: any } {
    const [updatePromotion, { data, loading }] = useMutation(UPDATE_COUPON);
    return { updatePromotion, loading, data };
}

export function useDelete(): { deletePromotion: (variables: any) => void; data: any } {
    const [deletePromotion, { data, error }] = useMutation(DELETE_PROMOTION);
    useEffect(() => {
        if (error) {
            message.destroy();
        }
    }, [error]);

    return { data, deletePromotion };
}

export function usePushNotification(): { pushNotificationOfPromotion: (id: any) => void; data: any } {
    const [pushNotificationOfPromotion, { data, error }] = useMutation(PUSH_NOTIFI);
    useEffect(() => {
        if (error) {
            message.destroy();
        }
    }, [error]);

    return { data, pushNotificationOfPromotion };
}

export function useExpandCouponStatus(): { updatePromotionCouponStatus: (id: any) => void; data: any } {
    const [updatePromotionCouponStatus, { data, error }] = useMutation(UPDATE_STATUS);
    useEffect(() => {
        if (error) {
            message.destroy();
        }
    }, [error]);

    return { data, updatePromotionCouponStatus };
}
export function useDeleteWhitelist(): { deletePromotionWhitelist: (variables: any) => void; data: any } {
    const [deletePromotionWhitelist, { data, error }] = useMutation(DELETE_SINGLE);
    useEffect(() => {
        if (error) {
            message.destroy();
        }
    }, [error]);

    return { data, deletePromotionWhitelist };
}

export function useDeleteAllWhitelist(): { deleteAllPromotionWhitelists: (variables: any) => void; data: any } {
    const [deleteAllPromotionWhitelists, { data, error }] = useMutation(DELETE_ALL);
    useEffect(() => {
        if (error) {
            message.destroy();
        }
    }, [error]);

    return { data, deleteAllPromotionWhitelists };
}
