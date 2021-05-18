import { gql } from '@apollo/client';

//  ========= Query :: START =============
export const GET_ALL_PROMOTION_REFERRAL = gql`
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
                userType
                maxAmount
                amountPerUsed
                startedAt
                endedAt
                status
                promotionCoupon {
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
//  ========= Query :: END ===============

//  ========= MUTATION :: START ===========
export const ADD_PROMOTION_REFERRAL = gql`
    mutation CreatePromotion($input: PromotionInput!) {
        createPromotion(input: $input) {
            id
        }
    }
`;
//  ========= MUTATION :: END =================

//  ========= MUTATION :: START ==============
export const UPDATE_PROMOTION_REFERRAL = gql`
    mutation UpdatePromotion($input: PromotionUpdate!) {
        updatePromotion(input: $input) {
            id
        }
    }
`;
//  ========= MUTATION :: END =================

//  ========= DELETE :: START =================
export const DELETE_REFERRAL = gql`
    mutation DeletePromotion($id: Int!) {
        deletePromotion(id: $id)
    }
`;
//  ========= DELETE :: END =================
