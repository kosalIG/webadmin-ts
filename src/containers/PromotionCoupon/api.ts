import { useEffect, useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { ADD_COUPON, GET_ALL_PROMOTION } from './gql';
import { Data, UseGetPromotion, Metadata } from './interface';
import { message } from 'antd';

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
