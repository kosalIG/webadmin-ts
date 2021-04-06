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
// const v = 'v1';

export { authKey, serviceAuthenticate, serviceProxy };
