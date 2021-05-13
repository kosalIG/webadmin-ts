import { gql } from '@apollo/client';

export const GET_NEARBY = gql`
    query GetallUserNearby($lat: Float!, $lng: Float!, $radius: Float!) {
        allNearbyDriver(latitude: $lat, longitude: $lng, radius: $radius) {
            latitude
            longitude
            type
            id
        }
    }
`;
