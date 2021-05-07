import { gql } from '@apollo/client';

const GET_REFERRAL = gql`
    query GetUserReferrals($filter: UserReferralFilter!) {
        getUserReferrals(filter: $filter) {
            data {
                receiverId
                TotalScanner
                receiverInfo {
                    firstName
                    lastName
                    mobileNumber
                    email
                    referralCode
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
export { GET_REFERRAL };
