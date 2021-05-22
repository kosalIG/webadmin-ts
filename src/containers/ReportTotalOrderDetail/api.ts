import { useQuery } from '@apollo/client';

import { serviceOrder } from 'env';
import { useParams } from 'react-router-dom';
import { GET_ORDER_DETAIL } from './gql';
import { Data } from './interface';

interface GetList {
    dataObj: Data;
    loading: boolean;
}
export function useGetList(): GetList {
    const { id } = useParams<any>();
    const { data, loading } = useQuery(GET_ORDER_DETAIL, {
        client: serviceOrder,
        variables: { id },
    });

    const { getOrderDetail } = data || {};
    const dataObj: Data = getOrderDetail || {};

    return { dataObj, loading };
}
