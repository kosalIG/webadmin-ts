import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_REFERRAL } from './gql';

export function useGetReferral(): {
    records: any[];
    metadata: any;
    loading: boolean;
    onTabs: (referenceType: string) => void;
    onPagin: (param: any) => void;
} {
    const initialState = {
        filter: { offset: 0, limit: 10, referenceType: 'WALLET' },
    };
    const [filter, setFilter] = useState(initialState.filter);

    // FETCH
    const { data, loading } = useQuery(GET_REFERRAL, {
        variables: { filter },
    });
    const { getUserReferrals } = data || {};
    const { data: records, metadata } = getUserReferrals || {};

    // ON TAB
    function onTabs(referenceType: string) {
        setFilter({ ...filter, referenceType });
    }

    // ON TAB
    function onPagin(param: any) {
        setFilter({ ...filter, ...param });
    }
    return { records, metadata, loading, onTabs, onPagin };
}
