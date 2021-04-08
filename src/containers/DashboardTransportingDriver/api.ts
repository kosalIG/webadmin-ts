import { gql } from '@apollo/client';

const GET_ORDER_TRIP = gql`
    query GetOrderList($tripStatus: [TripStatus!], $limit: Int!, $offset: Int!) {
        getOrderList(filter: { limit: $limit, offset: $offset, tripStatus: $tripStatus }) {
            results {
                id
                driverId
                tripStatus
                createdAt
                updatedAt
                rider {
                    fullName
                }
                driver {
                    fullName
                }
                orderDetail {
                    estimatedDuration
                    pickupAddressName
                    estimatedDistance
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
//  ========= Query :: END ===============
export { GET_ORDER_TRIP };
