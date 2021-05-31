import { gql } from '@apollo/client';

export const GET_LIST = gql`
    query adminConfigList($filter: AdminConfigFilter!) {
        adminConfigList(filter: $filter) {
            results {
                id
                type
                status
                startedAt
                endedAt
                description
                createdAt
            }
            metadata {
                total
                limit
                offset
            }
        }
    }
`;

// Create
export const ADD_NEW = gql`
    mutation CreateAdminConfig($input: AdminConfigInput!) {
        createAdminConfig(input: $input) {
            id
        }
    }
`;

export const EDIT = gql`
    mutation UpdateAdminConfig($input: UpdateAdminConfigInput!) {
        updateAdminConfig(input: $input) {
            id
        }
    }
`;

export const DELETE = gql`
    mutation DeleteAdminConfig($id: String!) {
        deleteAdminConfig(id: $id)
    }
`;
