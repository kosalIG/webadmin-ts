import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_LIST_ORDER_REPORT } from './gql';
import { qwiqOrder, serviceOrder } from 'env';
import { Data, Metadata } from './interface';
import axios from 'axios';

interface GetTotalReport {
    dataObj: Data;
    loading: boolean;
    onPagin: (pagin: Metadata) => void;
    onChange: (filter: any) => void;
}
export function useGetTotalReport(): GetTotalReport {
    const [qString, setQstring] = useState({
        limit: 10,
        offset: 0,
        orderStatus: [],
        tripStatus: [],
    });

    const { data, loading } = useQuery(GET_LIST_ORDER_REPORT, {
        client: serviceOrder,
        variables: { ...qString },
    });

    const { getOrderList } = data || {};
    const dataObj: Data = getOrderList || {};

    function onPagin(pagin: Metadata) {
        setQstring({ ...qString, ...pagin });
    }

    function onChange(filter: any) {
        if (!filter.orderStatus) setQstring((qSt) => ({ ...qSt, orderStatus: [] }));
        if (filter.orderStatus)
            setQstring((qSt) => ({
                ...qSt,
                orderStatus: filter.orderStatus,
                limit: 10,
                offset: 0,
            }));

        if (!filter.tripStatus) setQstring((qSt) => ({ ...qSt, tripStatus: [] }));
        if (filter.tripStatus)
            setQstring((qSt) => ({
                ...qSt,
                tripStatus: filter.tripStatus,
                limit: 10,
                offset: 0,
            }));
    }

    return { dataObj, loading, onPagin, onChange };
}

export function useGetAllOrder(): { getList: (limit: number) => any; records: any[]; loading: boolean } {
    const [loading, setLoading] = useState(false);
    const [records, setRecords] = useState<any[]>([]);

    async function getList(limit: number) {
        setLoading(true);
        const data = await axios.post(qwiqOrder, {
            query: query,
            variables: {
                limit,
                offset: 0,
                tripStatus: [],
                orderStatus: [],
            },
        });
        setRecords(data?.data?.data?.getOrderList?.results || []);
        setLoading(false);
    }
    return { loading, records, getList };
}
const query = `
          query GetOrderList(
            $orderStatus: [OrderStatus!]
            $tripStatus: [TripStatus!]
            $limit: Int!
            $offset: Int!
          ) {
            getOrderList(
              filter: {
                orderStatus: $orderStatus
                limit: $limit
                offset: $offset
                tripStatus: $tripStatus
              }
            ) {
              results {
                id
                orderStatus
                tripStatus
                driver {
                  fullName
                  mobileNumber
                }
                rider {
                  fullName
                  gender
                  dob
                  mobileNumber
                }
                orderDetail {
                  createdAt
                  estimatedDistance
                  estimatedDuration
                  pickupAddressName
                  dropoffAddressName
                  totalDistance
                  totalDuration
                  discountAmount
                  collectionAmount
                }
              }
            }
          }
          `;
