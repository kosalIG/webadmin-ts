import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { Metadata, Data } from './interface';
import { GET_LIST } from './gql';
import { serviceAdmin } from 'env';

interface Getlist {
    dataObj: Data;
    loading: boolean;
    onPagin: (pagin: Metadata) => void;
}

export function useGetList(): Getlist {
    const [qString, setQstring] = useState({ limit: 10, offset: 0 });
    const { data, loading } = useQuery(GET_LIST, {
        client: serviceAdmin,
        variables: { filter: { ...qString } },
    });
    const { reportActivityList } = data || {};
    const dataObj: Data = reportActivityList || {};

    function onPagin(pagin: Metadata) {
        setQstring({ ...qString, ...pagin });
    }
    return { dataObj, loading, onPagin };
}
