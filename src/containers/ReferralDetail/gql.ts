import { gql } from '@apollo/client';

const GET_REFERRAL_DETAIL = gql`
    query GetUserReferralByUserId($userId: String!, $status: UserReferralStatusEnum!) {
        getUserReferralByUserId(userId: $userId, status: $status) {
            id
            referenceValue
            approvedAt
            status
            scannerInfo {
                id
                firstName
                lastName
                mobileNumber
                referralCode
            }
        }
    }
`;

export { GET_REFERRAL_DETAIL };
