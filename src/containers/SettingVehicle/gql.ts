import { gql } from '@apollo/client';

// GET
export const GET_PRICE = gql`
    query GetItemPriceByVehicelIDs($vehicleIds: [ID!]!) {
        getItemPriceListByVehicleIds(vehicleIds: $vehicleIds) {
            vehicleId
            currencyCode
            minimumFare
            costPerKm
            costPerMinute
            cost
        }
    }
`;

// ADD
export const ADD_PRICE = gql`
    mutation CreateItemPrice($itemPrices: [ItemPriceInput!], $vehicleId: String!) {
        createItemPrice(vehicleId: $vehicleId, itemPrices: $itemPrices) {
            id
        }
    }
`;

// UPDATE
export const UPDATE_PRICE = gql`
    mutation UpdateItemPrice($itemPrices: [ItemPriceInput!], $vehicleId: String!) {
        updateItemPrice(vehicleId: $vehicleId, itemPrices: $itemPrices) {
            id
        }
    }
`;

export const GET_CURRENCY = gql`
    query GetCurrencies {
        getCurrencies(filter: {}) {
            data {
                id
                code
            }
        }
    }
`;
