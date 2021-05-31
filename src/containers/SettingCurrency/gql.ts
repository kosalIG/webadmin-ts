import { gql } from '@apollo/client';

export const GET_CURRENCY = gql`
    query GetCurrencies($limit: Int!, $offset: Int!) {
        getCurrencies(filter: { limit: $limit, offset: $offset }) {
            data {
                id
                name
                code
                decimal
                isDefault
                round
                status
            }
            metadata {
                total
                offset
                limit
            }
        }
    }
`;

export const ADD_CURRENCY = gql`
    mutation CreateCurrency($name: String!, $code: String!, $round: RoundType!, $decimal: Int!, $createdBy: String!) {
        upsertCurrency(input: { name: $name, code: $code, round: $round, decimal: $decimal, createdBy: $createdBy }) {
            id
            name
            code
            decimal
            isDefault
            status
            createdBy
        }
    }
`;

export const EDIT_CURRENCY = gql`
    mutation UpdateCurrency(
        $id: String!
        $status: StatusType!
        $name: String!
        $code: String!
        $round: RoundType!
        $decimal: Int!
        $createdBy: String!
    ) {
        upsertCurrency(
            input: {
                id: $id
                status: $status
                name: $name
                code: $code
                round: $round
                decimal: $decimal
                createdBy: $createdBy
            }
        ) {
            id
            name
            code
            decimal
            isDefault
            status
            createdBy
        }
    }
`;

export const DELETE_CURRENCY = gql`
    mutation DeleteCurrency($id: String!) {
        deleteCurrency(id: $id)
    }
`;
export const SET_DEFAULT = gql`
    mutation SetDefaultCurrency($id: String!) {
        setDefaultCurrency(id: $id)
    }
`;
