import { gql } from '@apollo/client';

export const GET_PAYMENT = gql`
    query GetPaymentTransactionHistories($filter: PaymentHistoryFilter!) {
        getPaymentTransactionHistories(filter: $filter) {
            data {
                id
                orderID
                commissionFee
                discountAmount
                totalAmount
                driver {
                    fullName
                    mobileNumber
                }
                order {
                    id
                    orderDetail {
                        pickupAddressName
                        dropoffAddressName
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
