import { ApolloClient, HttpLink, ApolloLink, InMemoryCache, concat } from '@apollo/client';

// AUTH KEY
const authKey =
    process.env.NODE_ENV === 'development'
        ? 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRJZCI6ImFuZHJvaWQiLCJ1ZGlkIjoiIiwidGltZXN0YW1wIjoxNjEwMjUxOTM4MjIzLCJpYXQiOjE2MTAyNTE5Mzh9.Hg8KCIb55y9uxlBkCkvfUKwIDiK4xplbEmLNfydKpJo'
        : 'P9qLsaAmV7Ru1PwguuwSj2EthPdqHMEF';

// Base URL
const baseUrl =
    process.env.NODE_ENV === 'development' ? 'https://gateway.dev.qwiq.io' : 'https://gateway.staging.qwiq.io';

// API URL
const serviceAuthenticate = `${baseUrl}/service-authenticate`;
const serviceProxy = `${baseUrl}/service-netobjex-proxy`;

// Base VERSION of API
const v = 'v1';

// Graph QL uri
const qwiqPayment = `${baseUrl}/service-payment/${v}`;
const qwiqOrder = `${baseUrl}/service-order/${v}`;
const qwiqFeedback = `${baseUrl}/service-feedback/${v}`;

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

export { authKey, serviceAuthenticate, serviceProxy, servicePayment, serviceOrder, serviceFeedback };
