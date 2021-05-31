import { gql } from '@apollo/client';

export const GET_REFERRAL = gql`
    query GetReferrals {
        getReferrals(filter: {}) {
            id
            referenceType
            referenceId
            referenceValue
            userType
            status
            promotion {
                title
            }
        }
    }
`;

export const GET_ACTIVE_PROMOTION = gql`
    query GetActivePromotions {
        getActivePromotions(filter: { type: REFERRAL }) {
            id
            type
            name
            title
            label
            description
            terms
            valueType
            value
            userType
            amountPerUsed
            maxAmount
            status
        }
    }
`;

export const UPDATE_REFERRAL = gql`
    mutation UpdateReferral($input: ReferralInput!) {
        updateReferral(input: $input) {
            id
        }
    }
`;
