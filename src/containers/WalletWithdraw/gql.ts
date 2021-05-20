import { gql } from '@apollo/client';

export const GET_WALLET_WITHDRAW = gql`
    query GetWalletWithdrawList($filter: WalletWithdrawFilter!, $limit: Int, $offset: Int) {
        walletWithdraws(filter: $filter, limit: $limit, offset: $offset) {
            results {
                id
                walletId
                walletTransactionId
                accountId
                accountType
                amount
                status
                createdAt
                wallet {
                    id
                    user {
                        id
                        fullName
                        mobileNumber
                    }
                }
            }
            metadata {
                total
                limit
                offset
            }
        }
    }
`;

export const APPROVE_WALLET_WITHDRAW = gql`
    mutation ApproveWithdraw($input: ApproveWithdrawInput!) {
        approveWithdraw(input: $input) {
            id
        }
    }
`;

export const REJECT_WALLET_WITHDRAW = gql`
    mutation RejectWithdraw($input: ApproveWithdrawInput!) {
        rejectWithdraw(input: $input) {
            id
        }
    }
`;
