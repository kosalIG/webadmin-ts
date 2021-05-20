import { gql } from '@apollo/client';

export const GET_ALL_PROMOTION = gql`
    query GetPromotions($filter: PromotionFilter!) {
        getPromotions(filter: $filter) {
            data {
                id
                type
                name
                title
                label
                description
                terms
                sms
                valueType
                value
                startedAt
                endedAt
                expiredDays
                userType
                maxAmount
                amountPerUsed
                status
                promotionCoupon {
                    totalUsed
                    totalUsedPerUser
                    totalUsedPerUserPerDay
                }
            }
            metadata {
                total
                offset
                limit
            }
        }
    }
`;

export const ADD_PROMOTION = gql`
    mutation CreatePromotion(
        $name: String!
        $title: String!
        $label: String!
        $value: Float!
        $terms: String!
        $description: String!
        $sms: String!
        $valueType: ValueType!
        $startedAt: DateTime!
        $endedAt: DateTime!
        $totalUsed: Int!
        $totalUsedPerUser: Int!
        $totalUsedPerUserPerDay: Int!
        $expiredDays: Int!
        $maxAmount: Float!
        $amountPerUsed: Float!
        $promotionWhitelists: [NewPromotionWhitelist!]
        $userType: PromotionUserType!
        $createdBy: String!
        $status: StatusType!
    ) {
        createPromotion(
            input: {
                isGenerated: false
                name: $name
                title: $title
                label: $label
                coupon: []
                value: $value
                totalGenerated: 0
                terms: $terms
                description: $description
                sms: $sms
                valueType: $valueType
                startedAt: $startedAt
                endedAt: $endedAt
                totalUsed: $totalUsed
                totalUsedPerUser: $totalUsedPerUser
                totalUsedPerUserPerDay: $totalUsedPerUserPerDay
                expiredDays: $expiredDays
                maxAmount: $maxAmount
                amountPerUsed: $amountPerUsed
                promotionWhitelists: $promotionWhitelists
                userType: $userType
                type: NORMAL
                status: $status
                createdBy: $createdBy
            }
        ) {
            id
        }
    }
`;

// UPDATE PROMOTION
export const UPDATE_PROMOTION = gql`
    mutation UpdatePromotion($input: PromotionUpdate!) {
        updatePromotion(input: $input) {
            id
        }
    }
`;

export const DELETE_PROMOTION = gql`
    mutation DeletePromotion($id: Int!) {
        deletePromotion(id: $id)
    }
`;
export const PUSH_NOTIFI = gql`
    mutation PushNotificationOfPromotion($id: Int!) {
        pushNotificationOfPromotion(id: $id)
    }
`;

// GET WHITELIST BY PROMOTION ID
export const GET_WHITELIST_BY_PROMOTION = gql`
    query GetPromotionWhitelistByPromotionId($filter: PromotionWhitelistFilter!, $limit: Int!, $offset: Int!) {
        promotionWhitelistByPromotionId(filter: $filter, limit: $limit, offset: $offset) {
            data {
                id
                fullName
                countryCode
                localNumber
            }
            metadata {
                total
                limit
                offset
            }
        }
    }
`;

// ADD WHITE LIST
export const ADD_WHITELIST = gql`
    mutation AddPromotionWhitelist($id: Int!, $whitelist: [NewPromotionWhitelist!]!) {
        addPromotionWhitelist(promotionID: $id, whitelist: $whitelist) {
            id
        }
    }
`;

// UPDATE WHITE LIST
export const UPDATE_WHITELIST = gql`
    mutation UpdatePromotionWhitelist($input: NewPromotionWhitelist!) {
        updatePromotionWhitelist(input: $input) {
            id
        }
    }
`;

// DELETE SINGLE WHITE LIST
export const DELETE_SINGLE = gql`
    mutation DeletePromotionWhitelist($id: Int!) {
        deletePromotionWhitelist(id: $id)
    }
`;

// DELETE ALL WHITE LIST
export const DELETE_ALL = gql`
    mutation DeletePromotionWhitelists($proId: Int!) {
        deleteAllPromotionWhitelists(promotionID: $proId)
    }
`;
