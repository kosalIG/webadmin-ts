import { gql } from '@apollo/client';

const GET_RATING = gql`
    query GetRatingList($limit: Int!, $offset: Int!) {
        getRatingList(filter: { limit: $limit, offset: $offset }) {
            data {
                driverID
                driver {
                    fullName
                    mobileNumber
                    myID
                }
                rating
                description
            }
            metadata {
                total
                limit
                offset
            }
        }
    }
`;

export { GET_RATING };
