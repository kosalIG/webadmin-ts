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

export const ADD_COUPON = gql`
    mutation CreatePromotion(
        $coupon: [String!]!
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
        $status: StatusType!
        $createdBy: String!
    ) {
        createPromotion(
            input: {
                isGenerated: false
                name: $name
                title: $title
                label: $label
                coupon: $coupon
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
                type: COUPON
                status: $status
                createdBy: $createdBy
            }
        ) {
            id
        }
    }
`;
