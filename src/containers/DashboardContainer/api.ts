import { useEffect } from 'react';
import { gql } from '@apollo/client';
import { useAxioss } from 'util/instance';
import { TotalData, TotalRegisterUser } from './interface';

export const RATING_DASHBOARD = gql`
    query GetRatingDashboard {
        getRatingFeedbackDashboard {
            ratingList {
                driver {
                    avatar
                    fullName
                    mobileNumber
                    mobileDetail {
                        countryCode
                        localNumber
                    }
                    driverInfo {
                        plateNumber
                    }
                }
                rating
                countRating
            }
            feedbackList {
                driverID
                customerID
                customer {
                    avatar
                    fullName
                    mobileNumber
                }
                driver {
                    avatar
                    fullName
                }
                feedbackCategories {
                    name
                }
                description
                rating
                createdAt
            }
        }
    }
`;

export const GET_PAYMENT_DASHBOARD = gql`
    query GetPaymentDashboard {
        getPaymentDashboard {
            totalTransaction
            totalIncome
            topDrivers {
                driver {
                    myID
                    fullName
                    mobileNumber
                    avatar
                    vehicleType
                }
                tripCount
                totalDiscount
                totalIncome
            }
        }
    }
`;

export const GET_ORDER_DASHBOARD = gql`
    query GetOrderDashboard {
        getOrderDashboard {
            totalOnPickupDrivers
            totalOnTransitDrivers
            totalOnlineDrivers
            totalActiveDrivers
            inactiveDrivers {
                inactiveAt
                driver {
                    id
                    fullName
                    mobileNumber
                    avatar
                }
            }
            totalOrderReport {
                driverEndedTrip {
                    maxValue
                    totalValue
                    values
                }
                driverMissedOrder {
                    maxValue
                    totalValue
                    values
                }
                driverRejectedOrder {
                    maxValue
                    totalValue
                    values
                }
                riderMissedOrder {
                    maxValue
                    totalValue
                    values
                }
                riderCancelledOrder {
                    maxValue
                    totalValue
                    values
                }
                riderCancelledTrip {
                    maxValue
                    totalValue
                    values
                }
            }
        }
    }
`;

export function useGetTotalDriver(): TotalData {
    const { data, onAxios } = useAxioss();
    useEffect(() => {
        getTotalDriver();
    }, []);

    function getTotalDriver() {
        onAxios({ url: '/admin/dashboard' });
    }

    const { totalAvailableDriver, totalDriver, ...registerUser } = data || {};
    const totalRegisterUser: TotalRegisterUser = { ...registerUser };

    return { totalAvailableDriver, totalDriver, totalRegisterUser };
}
