import { useQuery } from '@apollo/client';
import { serviceWallet } from 'env';
import { useState } from 'react';
import { GET_WALLET_PROMOTION } from './gql';
import { Promotion, Data, Metadata } from './interface';

export function useGetPromotion(): Promotion {
    // Start Date
    const sDate = new Date();
    sDate.setHours(0);
    sDate.setMinutes(0);
    sDate.setSeconds(0);

    // End Date
    const eDate = new Date();
    eDate.setHours(23);
    eDate.setMinutes(59);
    eDate.setSeconds(59);

    // STATE
    const initialState = {
        qString: {
            filter: {
                status: ['PENDING'],
                startDate: sDate.toISOString(),
                endDate: eDate.toISOString(),
            },
            limit: 10,
            offset: 0,
        },
    };
    const [qString, setQstring] = useState<any>(initialState.qString);

    // GET DATA FROM SERVER
    const { data, loading, refetch } = useQuery(GET_WALLET_PROMOTION, {
        client: serviceWallet,
        variables: { ...qString },
    });
    const { savingTransactions } = data || {};
    const dataObj: Data = savingTransactions || {};

    const onRefetch = (meta?: Metadata) => {
        refetch({ filter: { ...qString.filter }, ...meta });
    };

    function handleDate(datetime: any) {
        setQstring({
            ...qString,
            filter: { ...qString.filter, ...datetime },
            limit: 10,
            offset: 0,
        });
    }

    // STATUS FILTER
    function handleChange(filter: any): void {
        if (!filter?.status) {
            setQstring({
                ...qString,
                filter: {
                    ...qString.filter,
                    status: ['PENDING'],
                },
                limit: 10,
                offset: 0,
            });
        }

        if (filter?.status) {
            setQstring({
                ...qString,
                filter: {
                    ...qString.filter,
                    status: filter?.status,
                },
                limit: 10,
                offset: 0,
            });
        }
    }
    return { dataObj, loading, qString, handleDate, onRefetch, handleChange };
}
