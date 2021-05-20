import { gql } from '@apollo/client';

const GET_WALLET_PROMOTION = gql`
    query SavingTransactions($filter: SavingTransactionsFilter, $limit: Int, $offset: Int) {
        savingTransactions(filter: $filter, limit: $limit, offset: $offset) {
            results {
                id
                userId
                referenceId
                referenceType
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

export { GET_WALLET_PROMOTION };
