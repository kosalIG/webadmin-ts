import { gql } from '@apollo/client';

export const GET_NOTIFICATION = gql`
    query($limit: Int, $offset: Int) {
        notificationList(filter: { limit: $limit, offset: $offset }) {
            results {
                id
                sendType
                sendTo
                sendDeviceType
                title
                body
                mediaType
                mediaURL
                sendDate
                pushingType
                description {
                    kh
                }
                sendStatus
            }
            metadata {
                total
                limit
                offset
            }
        }
    }
`;

export const ADD_NOTIFICATION = gql`
    mutation CreateNotification(
        $sendType: SendType
        $sendTo: SendTo
        $sendDeviceType: DeviceType
        $title: String!
        $body: String!
        $mediaType: MediaType!
        $mediaURL: String!
        $sendDate: DateTime
        $pushingType: PushingType!
        $description: NotificationDescriptionInput!
        $sendStatus: SendStatus
        $createdBy: String
    ) {
        createNotification(
            input: {
                sendType: $sendType
                sendTo: $sendTo
                sendDeviceType: $sendDeviceType
                title: $title
                body: $body
                mediaType: $mediaType
                mediaURL: $mediaURL
                sendDate: $sendDate
                pushingType: $pushingType
                description: $description
                sendStatus: $sendStatus
                createdBy: $createdBy
            }
        ) {
            id
        }
    }
`;

export const UPDATE_NOTIFICATION = gql`
    mutation UpdateNotification(
        $id: String!
        $sendType: SendType
        $sendTo: SendTo
        $sendDeviceType: DeviceType
        $title: String!
        $body: String!
        $mediaType: MediaType!
        $mediaURL: String!
        $sendDate: DateTime
        $pushingType: PushingType!
        $description: NotificationDescriptionInput!
        $sendStatus: SendStatus
        $updatedBy: String
    ) {
        updateNotification(
            input: {
                id: $id
                sendType: $sendType
                sendTo: $sendTo
                sendDeviceType: $sendDeviceType
                title: $title
                body: $body
                mediaType: $mediaType
                mediaURL: $mediaURL
                sendDate: $sendDate
                pushingType: $pushingType
                description: $description
                sendStatus: $sendStatus
                updatedBy: $updatedBy
            }
        ) {
            id
        }
    }
`;

export const PUSH_NOTIFICATION = gql`
    mutation($id: String!) {
        pushNotification(id: $id) {
            id
        }
    }
`;

export const DELETE_NOTIFICATION = gql`
    mutation($id: String!) {
        deleteNotification(id: $id)
    }
`;
