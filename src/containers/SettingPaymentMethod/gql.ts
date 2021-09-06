import { gql } from '@apollo/client';

export const GET_PAYMENT_TYPE = gql`
    query GetPaymentType($filter: PaymentMethodFilter!) {
        getPaymentTypes(filter: $filter) {
            data {
                id
                name
                icon
                type
                status
                description
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
export const UPSERT_PAYMENT_TYPE = gql`
    mutation UpsertPaymentType($input: PaymentMethodInput!) {
        upsertPaymentType(input: $input) {
            id
        }
    }
`;

export const DELETE_PAYMENT = gql`
    mutation DeletePaymentType($id: String!) {
        deletePaymentType(id: $id)
    }
`;

export const GET_PAYMENT_TYPE_ENUM = gql`
    query GetPaymentTypeEnums {
        getPaymentTypeEnums
    }
`;
