import { gql } from '@apollo/client';

export const GET_FEEDBACK_CATEGORY = gql`
    query GetFeedbackCategories($status: StatusType!, $limit: Int!, $offset: Int!) {
        getFeedbackCategories(filter: { status: $status, limit: $limit, offset: $offset }) {
            data {
                id
                name
                description
                ordering
                status
                icon
                createdBy
                updatedBy
                createdAt
                updatedAt
            }
            metadata {
                total
                limit
                offset
            }
        }
    }
`;

export const ADD_FEEDBACK_CATEGORY = gql`
    mutation UpsertFeedbackCategoy(
        $name: String!
        $description: String!
        $ordering: Int!
        $icon: String!
        $createdBy: String!
    ) {
        upsertFeedbackCategory(
            input: { name: $name, description: $description, ordering: $ordering, icon: $icon, createdBy: $createdBy }
        ) {
            id
        }
    }
`;
export const EDIT_FEEDBACK_CATEGORY = gql`
    mutation UpsertFeedbackCategoy(
        $name: String!
        $description: String!
        $ordering: Int!
        $id: String!
        $icon: String!
        $updatedBy: String!
    ) {
        upsertFeedbackCategory(
            input: {
                id: $id
                name: $name
                description: $description
                ordering: $ordering
                icon: $icon
                updatedBy: $updatedBy
            }
        ) {
            id
        }
    }
`;
export const DELETE_FEEDBACK_CATEGORY = gql`
    mutation DeleteFeedbackCategory($id: String!) {
        deleteFeedbackCategory(id: $id)
    }
`;
