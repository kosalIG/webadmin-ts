import { useEffect, useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import {
    ADD_PROMOTION,
    ADD_WHITELIST,
    DELETE_ALL,
    DELETE_PROMOTION,
    DELETE_SINGLE,
    GET_ALL_PROMOTION,
    GET_WHITELIST_BY_PROMOTION,
    PUSH_NOTIFI,
    UPDATE_PROMOTION,
} from './gql';
import { Data, UseGetPromotion, Metadata, UseGetWhitelistApi } from './interface';
import message from 'antd/lib/message';

export function useGetPromotion(): UseGetPromotion {
    // STATE
    const initialState = {
        qString: { limit: 10, offset: 0, isGenerated: false, type: 'NORMAL' },
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

export function useAddPromotion(): { createPromotion: (data: any) => void; loading: boolean; data: any } {
    // Add Promotion
    const [createPromotion, { data, loading }] = useMutation(ADD_PROMOTION, { onError: () => null });
    return { createPromotion, loading, data };
}

export function useEditPromotion(): { updatePromotion: (data: any) => void; loading: boolean; data: any } {
    // Edit Promotion
    const [updatePromotion, { data, loading }] = useMutation(UPDATE_PROMOTION, { onError: () => null });
    return { updatePromotion, loading, data };
}

export function useAddWhitelist(): { addPromotionWhitelist: (data: any) => void } {
    const [addPromotionWhitelist] = useMutation(ADD_WHITELIST, { onError: () => null });
    return { addPromotionWhitelist };
}

export function useDelete(): { deletePromotion: (variables: any) => void; data: any } {
    const [deletePromotion, { data, error }] = useMutation(DELETE_PROMOTION, { onError: () => null });
    useEffect(() => {
        if (error) {
            message.destroy();
        }
    }, [error]);

    return { data, deletePromotion };
}

export function usePushNotification(): { pushNotificationOfPromotion: (id: any) => void; data: any } {
    const [pushNotificationOfPromotion, { data, error }] = useMutation(PUSH_NOTIFI, { onError: () => null });
    useEffect(() => {
        if (error) {
            message.destroy();
        }
    }, [error]);

    return { data, pushNotificationOfPromotion };
}

// Get whitelist By Promotion ID
function useGetWhitelistApi(id: string | number): UseGetWhitelistApi {
    const [qString, setQstring] = useState({
        limit: 10,
        offset: 0,
        filter: { promotionId: id },
    });

    const { loading, data, refetch } = useQuery(GET_WHITELIST_BY_PROMOTION, {
        variables: { ...qString },
    });

    const { metadata, data: records } = data?.promotionWhitelistByPromotionId || {};

    // Handle pagin
    function handlePagin(pagin: Metadata) {
        setQstring({ ...qString, ...pagin });
    }

    // Handle Search
    function onSearch(val: any) {
        setQstring({ filter: { ...qString.filter, ...val }, limit: 10, offset: 0 });
    }

    const onRefetch = (meta?: Metadata) => {
        refetch({ ...qString, ...meta });
    };
    return { loading, metadata, records, handlePagin, onSearch, onRefetch };
}
export { useGetWhitelistApi };

export function useDeleteWhitelist(): { deletePromotionWhitelist: (variables: any) => void; data: any } {
    const [deletePromotionWhitelist, { data, error }] = useMutation(DELETE_SINGLE, { onError: () => null });
    useEffect(() => {
        if (error) {
            message.destroy();
        }
    }, [error]);

    return { data, deletePromotionWhitelist };
}

export function useDeleteAllWhitelist(): { deleteAllPromotionWhitelists: (variables: any) => void; data: any } {
    const [deleteAllPromotionWhitelists, { data, error }] = useMutation(DELETE_ALL, { onError: () => null });
    useEffect(() => {
        if (error) {
            message.destroy();
        }
    }, [error]);

    return { data, deleteAllPromotionWhitelists };
}
