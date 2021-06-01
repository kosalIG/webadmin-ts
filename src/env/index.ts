import { ApolloClient, HttpLink, ApolloLink, InMemoryCache, from } from '@apollo/client';
import ApolloLinkTimeout from 'apollo-link-timeout';
import { onError } from '@apollo/client/link/error';
import message from 'antd/lib/message';

// AUTH KEY
const authKey =
    process.env.NODE_ENV === 'development'
        ? 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRJZCI6ImFuZHJvaWQiLCJ1ZGlkIjoiIiwidGltZXN0YW1wIjoxNjEwMjUxOTM4MjIzLCJpYXQiOjE2MTAyNTE5Mzh9.Hg8KCIb55y9uxlBkCkvfUKwIDiK4xplbEmLNfydKpJo'
        : 'P9qLsaAmV7Ru1PwguuwSj2EthPdqHMEF';

// Base URL
const baseUrl = process.env.NODE_ENV === 'development' ? 'https://gateway.dev.qwiq.io' : 'https://gateway.dev.qwiq.io';

// API URL
const serviceAuthenticate = `${baseUrl}/service-authenticate`;
const serviceProxy = `${baseUrl}/service-netobjex-proxy`;

// Base VERSION of API
const v = 'v1';

// Graph QL uri
export const qwiqPayment = `${baseUrl}/service-payment/${v}`;
export const qwiqOrder = `${baseUrl}/service-order/${v}`;
export const qwiqFeedback = `${baseUrl}/service-feedback/${v}`;
export const qwiqWallet = `${baseUrl}/service-wallet/${v}`;
export const qwiqLocation = `${baseUrl}/service-location/${v}`;
export const qwiqAdmin = `${baseUrl}/service-admin/${v}`;
const s3Url = 'https://qwiq-dev.s3.ap-southeast-1.amazonaws.com/';
const googlekey = 'AIzaSyAMVYqdtOVbI7syYUe6i3dN3oqyA2Vh1c4';

// Graphql Header
const user = JSON.parse(localStorage.getItem('user') || '{}');
const authMiddleware = new ApolloLink((operation, forward) => {
    // add the authorization to the headers
    operation.setContext({
        headers: {
            'Kong-Authorization': user?.token || null,
        },
    });
    return forward(operation);
});

// Graphgl fetchPolicy
const defaultOptions: any = {
    watchQuery: {
        fetchPolicy: 'network-only',
        errorPolicy: 'ignore',
    },
    query: {
        fetchPolicy: 'network-only',
        errorPolicy: 'all',
    },
    mutate: {
        errorPolicy: 'all',
    },
};

// Graphgl global Error handling
const errorLink = onError(({ graphQLErrors }) => {
    if (graphQLErrors) {
        message.error(graphQLErrors[0]?.message);
    } else {
        message.error('Data not response, Please check your connection and try again');
    }
});

// Graphgl set global timeout
const timeoutLink = new ApolloLinkTimeout(20000);
const timeoutHttpLink = (uri: string) => timeoutLink.concat(new HttpLink({ uri }));

// SERVICE PAYMENT ==========================================================
const servicePayment = new ApolloClient({
    cache: new InMemoryCache({ addTypename: false }),
    link: from([authMiddleware, errorLink, timeoutHttpLink(qwiqPayment)]),
    defaultOptions,
});

// SERVICE ORDER ==========================================================
const serviceOrder = new ApolloClient({
    cache: new InMemoryCache({ addTypename: false }),
    link: from([authMiddleware, errorLink, timeoutHttpLink(qwiqOrder)]),

    defaultOptions,
});

// SERVICE ORDER ==========================================================
const serviceFeedback = new ApolloClient({
    cache: new InMemoryCache({ addTypename: false }),
    link: from([authMiddleware, errorLink, timeoutHttpLink(qwiqFeedback)]),
    defaultOptions,
});

// SERVICE WALLET ==========================================================
const serviceWallet = new ApolloClient({
    cache: new InMemoryCache({ addTypename: false }),
    link: from([authMiddleware, errorLink, timeoutHttpLink(qwiqWallet)]),

    defaultOptions,
});

// SERVICE LOCATION ==========================================================
const serviceLocation = new ApolloClient({
    cache: new InMemoryCache({ addTypename: false }),
    link: from([authMiddleware, errorLink, timeoutHttpLink(qwiqLocation)]),
    defaultOptions,
});

// SERVICE ADMIN ==========================================================
const serviceAdmin = new ApolloClient({
    cache: new InMemoryCache({ addTypename: false }),
    link: from([authMiddleware, errorLink, timeoutHttpLink(qwiqAdmin)]),
    defaultOptions,
});

export {
    authKey,
    serviceAuthenticate,
    serviceProxy,
    servicePayment,
    serviceOrder,
    serviceFeedback,
    serviceLocation,
    serviceAdmin,
    s3Url,
    serviceWallet,
    googlekey,
};
