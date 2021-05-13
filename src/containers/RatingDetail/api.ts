import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { useParams, useLocation } from 'react-router-dom';

import { GET_RATING_DETAIL } from './gql';
import { serviceFeedback } from 'env';
import { Data, Metadata, ProfileProps } from './interface';

export function useGetRating(): {
    state: ProfileProps | any;
    dataObj: Data;
    loading: boolean;
    setPagin: (pagin: Metadata) => void;
} {
    const { id } = useParams<{ id: string }>() || {};
    const { state } = useLocation<{ state: ProfileProps }>() || {};
    console.log(useLocation());
    const [pagin, setPagin] = useState<Metadata>({ limit: 10, offset: 0 });

    // GET DATA FROM SERVER
    const { data, loading } = useQuery(GET_RATING_DETAIL, {
        client: serviceFeedback,
        variables: { driverID: id, ...pagin },
    });
    const { getRatingListByDriverID } = data || {};
    const dataObj: Data = { ...getRatingListByDriverID };

    return { dataObj, loading, state, setPagin };
}
