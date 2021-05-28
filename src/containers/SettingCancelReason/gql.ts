import { gql } from '@apollo/client';

export const GET_CANCEL_RIDER = gql`
    query GetOrderReasonList($filter: OrderReasonFilterInput!) {
        getOrderReasonList(filter: $filter) {
            results {
                id
                type
                ordering
                description
                status
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

// Create
export const CREAT_CANCEL_RIDER = gql`
    mutation CreateOrderReason($type: ReasonType!, $ordering: Int!, $description: String!, $createdBy: String!) {
        createOrderReason(
            input: { type: $type, ordering: $ordering, description: $description, createdBy: $createdBy }
        ) {
            id
        }
    }
`;

// Edit
export const EDIT_CANCEL_RIDER = gql`
    mutation UpdateOrderReason(
        $type: ReasonType!
        $ordering: Int!
        $description: String!
        $updatedBy: String!
        $status: StatusType!
        $id: String!
    ) {
        updateOrderReason(
            id: $id
            input: {
                type: $type
                ordering: $ordering
                description: $description
                status: $status
                updatedBy: $updatedBy
            }
        ) {
            id
        }
    }
`;

export const DELETE_CANCEL_RIDER = gql`
    mutation DeleteOrderReason($id: String!) {
        deleteOrderReason(id: $id)
    }
`;
