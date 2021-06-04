import { gql } from '@apollo/client';

export const GET_ORDER_DETAIL = gql`
    query GetOrder($id: String!) {
        getOrder(filter: { id: $id }) {
            id
            vehicleTypeId
            orderDropoffs {
                sequence
                dropoffAddressName
                dropoffLng
                dropoffLat
            }
            orderDetail {
                id
                createdAt #acceptedAt
                pickupLat
                pickupLng
                dropoffLat
                dropoffLng

                pickupAddressName
                dropoffAddressName

                estimatedDistance
                estimatedDuration
                estimatedCost
                collectionAmount #amount -> collectionAmount
                discountAmount #totalDiscount -> discountAmount
                totalAmount #total -> totalAmount
            }
            driver {
                id
                fullName
                mobileNumber
            }
            rider {
                id
                fullName
                mobileNumber
            }
        }
    }
`;

export const GET_CANCEL_REASON = gql`
    query GetOrderReasonList($filter: OrderReasonFilterInput!) {
        getOrderReasonList(filter: $filter) {
            results {
                id
                description
            }
        }
    }
`;

export // CANCEL_TRIP
const CANCEL_TRIP = gql`
    mutation CancelTripBySystem($input: ParamSystemInput!) {
        cancelTripBySystem(input: $input)
    }
`;
