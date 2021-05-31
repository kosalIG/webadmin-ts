import { gql } from '@apollo/client';

export const GET_STORE_CONTROL = gql`
    query {
        storeControlList(filter: {}) {
            results {
                id
                appType
                deviceType
                storeVersionName
                isForceUpdate
                storeVersion
                storeURL
                status
            }
        }
    }
`;

// Create
export const ADD_STORE_CONTROL = gql`
    mutation(
        $storeVersionName: String!
        $isForceUpdate: Boolean!
        $appType: AppType!
        $deviceType: DeviceType!
        $storeVersion: Int!
        $storeURL: String!
        $createdBy: String!
    ) {
        createStoreControl(
            input: {
                storeVersionName: $storeVersionName
                isForceUpdate: $isForceUpdate
                appType: $appType
                deviceType: $deviceType
                storeVersion: $storeVersion
                storeURL: $storeURL
                createdBy: $createdBy
            }
        ) {
            id
        }
    }
`;

// Edit
export const UPDATE_STORE_CONTROL = gql`
    mutation(
        $storeVersionName: String!
        $id: String!
        $isForceUpdate: Boolean!
        $appType: AppType!
        $deviceType: DeviceType!
        $storeVersion: Int!
        $storeURL: String!
        $updatedBy: String!
    ) {
        updateStoreControl(
            input: {
                id: $id
                appType: $appType
                storeVersionName: $storeVersionName
                deviceType: $deviceType
                storeVersion: $storeVersion
                storeURL: $storeURL
                updatedBy: $updatedBy
                isForceUpdate: $isForceUpdate
            }
        ) {
            id
        }
    }
`;

export const DELETE_STORE_CONTROL = gql`
    mutation($id: String!) {
        deleteStoreControl(id: $id)
    }
`;
