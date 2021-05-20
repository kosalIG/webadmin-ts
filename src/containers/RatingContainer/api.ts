import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_RATING } from './gql';
import { serviceFeedback } from 'env';
import { Data, Metadata } from './interface';

export function useGetRating(): { dataObj: Data; loading: boolean; setPagin: (pagin: Metadata) => void } {
    const [pagin, setPagin] = useState<Metadata>({ limit: 10, offset: 0 });

    // GET DATA FROM SERVER
    const { data, loading } = useQuery(GET_RATING, {
        client: serviceFeedback,
        variables: { type: [], ...pagin },
    });
    const { getRatingList } = data || {};

    const dataObj: Data = { ...getRatingList };

    return { dataObj, loading, setPagin };
}
