import { gql } from '@apollo/client';

const GET_RATING_DETAIL = gql`
    query GetRatingListByDriverID($driverID: String!, $limit: Int!, $offset: Int) {
        getRatingListByDriverID(filter: { driverID: $driverID, limit: $limit, offset: $offset }) {
            data {
                id
                customer {
                    myID
                    fullName
                    gender
                    mobileNumber
                    email
                }
                rating
                createdAt
            }
            metadata {
                total
                limit
                offset
            }
        }
    }
`;

export { GET_RATING_DETAIL };
