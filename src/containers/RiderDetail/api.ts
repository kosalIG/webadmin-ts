import { useEffect, useState } from 'react';
import { gql } from '@apollo/client';
import { useAxios, AxiosProps } from 'util/useAxios';
import { Data } from './interface';

// API
export function useGetRiderDetail(id: string): { loading: boolean; data: Data | null } {
    const { instance } = useAxios();
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<Data | null>(null);

    useEffect(() => {
        getRiderDetail(id);
    }, []);

    async function getRiderDetail(id: string) {
        setLoading(true);
        const config: AxiosProps = { url: '/user/' + id };
        const { result } = await instance({ config });
        if (result) {
            setData(result);
        }
        setLoading(false);
    }
    return { data, loading };
}

// gql
export const GET_TRIP_HISTORY = gql`
    query GetPaymentTransactionHistories($customerID: String!, $limit: Int!, $offset: Int!) {
        getPaymentTransactionHistories(filter: { customerID: $customerID, limit: $limit, offset: $offset }) {
            data {
                id
                receiptNo
                order {
                    orderDetail {
                        pickupAt
                        dropoffAt
                    }
                }
                driver {
                    fullName
                    mobileNumber
                }
                totalDistance
                totalDuration
                discountAmount
                totalAmount
            }
            metadata {
                total
                limit
                offset
            }
        }
    }
`;
