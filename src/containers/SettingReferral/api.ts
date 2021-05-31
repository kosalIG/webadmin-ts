import { useMutation, useQuery } from '@apollo/client';
import { message } from 'antd';
import { useEffect } from 'react';
import { GET_REFERRAL, GET_ACTIVE_PROMOTION, UPDATE_REFERRAL } from './gql';
import { GetReferral } from './interface';

export function useGetReferral(): GetReferral {
    const { data, loading, refetch } = useQuery(GET_REFERRAL);
    const { getReferrals } = data || {};

    return { records: getReferrals, loading, refetch };
}

export function useGetActivePromotion(): { records: any[] } {
    const { data } = useQuery(GET_ACTIVE_PROMOTION);
    const { getActivePromotions } = data || {};

    return { records: getActivePromotions };
}

interface Edit {
    loading: boolean;
    onEdit: (value: any) => void;
}

export function useEdit({ callback }: { callback: () => void }): Edit {
    const [updateReferral, { data, loading }] = useMutation(UPDATE_REFERRAL);

    function onEdit(value: any) {
        updateReferral({ variables: { input: { ...value } } });
    }

    useEffect(() => {
        if (data) {
            callback();
            message.success('Edit successfully');
        }
    }, [data]);

    return { loading, onEdit };
}
