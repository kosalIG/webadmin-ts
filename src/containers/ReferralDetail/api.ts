import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_REFERRAL_DETAIL } from './gql';

function useGetUserReferral(status: string): { totalAmount: number; records: any[]; loading: boolean } {
    const { id } = useParams<any>();

    // GET DATA FROM SERVER
    const { data, loading } = useQuery(GET_REFERRAL_DETAIL, {
        variables: { status, userId: id },
    });

    // DATA RESPONSE
    const { getUserReferralByUserId } = data || {};

    const totalAmount = useMemo(
        () =>
            getUserReferralByUserId?.map((ref: any) => ref.referenceValue)?.reduce((a: number, b: number) => a + b, 0),
        [getUserReferralByUserId],
    );

    const records = getUserReferralByUserId?.map((ref: any, idx: number) => ({
        ...ref,
        idx: idx + 1,
        key: ref.id,
    }));
    return { totalAmount, records, loading };
}

export default useGetUserReferral;
