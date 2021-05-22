import { gql } from '@apollo/client';

export const GET_LIST_ORDER_REPORT = gql`
    query GetOrderList($orderStatus: [OrderStatus!], $tripStatus: [TripStatus!], $limit: Int!, $offset: Int!) {
        getOrderList(filter: { orderStatus: $orderStatus, tripStatus: $tripStatus, limit: $limit, offset: $offset }) {
            results {
                id
                orderStatus
                tripStatus
                driver {
                    fullName
                    mobileNumber
                }
                rider {
                    fullName
                    gender
                    dob
                    mobileNumber
                }
                orderDetail {
                    createdAt
                    estimatedDistance
                    estimatedDuration
                    pickupAddressName
                    dropoffAddressName
                    totalDistance
                    totalDuration
                    discountAmount
                    collectionAmount
                    pickupLng
                    pickupLat
                    dropoffLng
                    dropoffLat
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
