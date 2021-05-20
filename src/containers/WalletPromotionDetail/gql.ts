import { gql } from '@apollo/client';

export const GET_PROMOTION_BY_USER = gql`
    query GetSavingTransferByUser($filter: SavingTransactionsFilter, $limit: Int, $offset: Int) {
        savingTransactions(filter: $filter, limit: $limit, offset: $offset) {
            results {
                id
                userId
                amount
                status
                requestedAt
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
                limit
                offset
                total
            }
        }
    }
`;

export const APPROVE_WALLET_PROMOTION = gql`
    mutation ApproveSavingToWallet($input: ApproveSavingToWalletInput!) {
        approveSavingToWallet(input: $input) {
            id
        }
    }
`;

// Mutation
export const REJECT_WALLET_PROMOTION = gql`
    mutation RejectSavingToWallet($input: RejectSavingToWalletInput!) {
        rejectSavingToWallet(input: $input) {
            id
        }
    }
`;
