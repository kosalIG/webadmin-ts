import { ApolloClient, HttpLink, ApolloLink, InMemoryCache, concat } from '@apollo/client';

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

// Graph QL Header
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

// SERVICE PAYMENT ==========================================================
const servicePayment = new ApolloClient({
    cache: new InMemoryCache({ addTypename: false }),
    link: concat(authMiddleware, new HttpLink({ uri: qwiqPayment })),
    defaultOptions: {
        query: {
            fetchPolicy: 'network-only',
            errorPolicy: 'all',
        },
    },
});

// SERVICE ORDER ==========================================================
const serviceOrder = new ApolloClient({
    cache: new InMemoryCache({ addTypename: false }),
    link: concat(authMiddleware, new HttpLink({ uri: qwiqOrder })),
});

// SERVICE ORDER ==========================================================
const serviceFeedback = new ApolloClient({
    cache: new InMemoryCache({ addTypename: false }),
    link: concat(authMiddleware, new HttpLink({ uri: qwiqFeedback })),
});

// SERVICE WALLET ==========================================================
const serviceWallet = new ApolloClient({
    cache: new InMemoryCache({ addTypename: false }),
    link: concat(authMiddleware, new HttpLink({ uri: qwiqWallet })),
});

// SERVICE LOCATION ==========================================================
const serviceLocation = new ApolloClient({
    cache: new InMemoryCache({ addTypename: false }),
    link: concat(authMiddleware, new HttpLink({ uri: qwiqLocation })),
});

// SERVICE ADMIN ==========================================================
const serviceAdmin = new ApolloClient({
    cache: new InMemoryCache({ addTypename: false }),
    link: concat(authMiddleware, new HttpLink({ uri: qwiqAdmin })),
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
