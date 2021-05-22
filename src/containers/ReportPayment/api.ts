import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { Metadata, Data } from './interface';
import { GET_PAYMENT } from './gql';
import axios from 'axios';
import { qwiqPayment } from 'env';

interface Getlist {
    dataObj: Data;
    loading: boolean;
    onPagin: (pagin: Metadata) => void;
}

export function useGetList(): Getlist {
    const [qString, setQstring] = useState({ limit: 10, offset: 0 });
    const { data, loading } = useQuery(GET_PAYMENT, {
        variables: { filter: { ...qString } },
    });
    const { getPaymentTransactionHistories } = data || {};
    const dataObj: Data = getPaymentTransactionHistories || {};

    function onPagin(pagin: Metadata) {
        setQstring({ ...qString, ...pagin });
    }
    return { dataObj, loading, onPagin };
}
export function useGetListAll(): { getList: (limit: number) => any; records: any[]; loading: boolean } {
    const [loading, setLoading] = useState(false);
    const [records, setRecords] = useState<any[]>([]);

    async function getList(limit: number) {
        setLoading(true);
        const data = await axios.post(qwiqPayment, {
            query: query,
            variables: {
                filter: { limit, offset: 0 },
            },
        });
        setRecords(data?.data?.data?.getPaymentTransactionHistories?.data || []);
        setLoading(false);
    }
    return { loading, records, getList };
}
const query = `query GetPaymentTransactionHistories($filter: PaymentHistoryFilter!) {
    getPaymentTransactionHistories(filter: $filter) {
      data {
        driver {
          fullName
          mobileNumber
        }
        order {
          id
          orderDetail {
            pickupAddressName
            dropoffAddressName
          }
        }
        id
        orderID
        commissionFee
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
