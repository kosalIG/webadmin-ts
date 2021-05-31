import { gql } from '@apollo/client';

export const GET_COMMISSION_CHARGE = gql`
    query GetCommissionCharges($filter: CommissionChargeFilter!) {
        getCommissionCharges(filter: $filter) {
            data {
                id
                type
                name
                amount
                maxChargePerDay
                description
                isDefault
                status
                createdAt
            }
            metadata {
                total
                offset
                limit
            }
        }
    }
`;

// Create
export const UPSERT_COMMISSION = gql`
    mutation UpsertCommissionCharge($input: CommissionChargeInput!) {
        upsertCommissionCharge(input: $input) {
            id
        }
    }
`;

export const DELETE_COMMISSION = gql`
    mutation DeleteCommissionCharge($id: String!) {
        deleteCommissionCharge(id: $id)
    }
`;

export const SET_DEFAULT_COMMISSION = gql`
    mutation SetDefaultCommissionCharge($id: String!) {
        setDefaultCommissionCharge(id: $id)
    }
`;
