import { gql } from '@apollo/client';

export const GET_ORDER_DETAIL = gql`
    query GetOrderDetail($id: String!) {
        getOrderDetail(id: $id) {
            id
            rider {
                fullName
                gender
                mobileNumber
            }
            vehicleTypeInfo {
                name
            }
            orderLogs {
                status
                createdAt
                driver {
                    fullName
                    mobileNumber
                    modelName
                    driverRating {
                        rating
                    }
                }
            }
        }
    }
`;
