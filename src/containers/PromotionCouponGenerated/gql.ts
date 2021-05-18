import { gql } from '@apollo/client';

export const GET_ALL_COUPON = gql`
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
                promotionCoupons {
                    id
                    coupon
                    status
                }
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

export const ADD_COUPON = gql`
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
        $totalGenerated: Int!
        $expiredDays: Int!
        $maxAmount: Float!
        $amountPerUsed: Float!
        $promotionWhitelists: [NewPromotionWhitelist!]
        $userType: PromotionUserType!
        $status: StatusType!
        $createdBy: String!
    ) {
        createPromotion(
            input: {
                isGenerated: true
                name: $name
                title: $title
                label: $label
                coupon: []
                value: $value
                totalGenerated: $totalGenerated
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
                type: COUPON
                status: $status
                createdBy: $createdBy
            }
        ) {
            id
        }
    }
`;

export const UPDATE_COUPON = gql`
    mutation UpdatePromotion(
        $id: Int!
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
        $updatedBy: String!
        $status: StatusType!
    ) {
        updatePromotion(
            input: {
                id: $id
                name: $name
                title: $title
                label: $label
                value: $value
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
                updatedBy: $updatedBy
                status: $status
            }
        ) {
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

export const UPDATE_STATUS = gql`
    mutation UpdatePromotionCouponStatus($id: Int!) {
        updatePromotionCouponStatus(id: $id) {
            id
        }
    }
`;
