import React from 'react';
import { PropRoute } from 'util/interface';
// ============================================================================ COMPONENT ::
const DashboardContainer = React.lazy(() => import('containers/DashboardContainer'));
const DashboardPickupDriver = React.lazy(() => import('containers/DashboardPickupDriver'));
const DashboardPickupDriverDetail = React.lazy(() => import('containers/DashboardPickupDriverDetail'));
const DashboardTransportingDriver = React.lazy(() => import('containers/DashboardTransportingDriver'));
const DashboardTransportingDriverDetail = React.lazy(() => import('containers/DashboardTransportingDriverDetail'));

// RIDER
const RiderContainer = React.lazy(() => import('containers/RiderContainer'));
const RiderDetail = React.lazy(() => import('containers/RiderDetail'));

// DRIVER
const DriverContainer = React.lazy(() => import('containers/DriverContainer'));
const DriverDetail = React.lazy(() => import('containers/DriverDetail'));

// DRIVER GROUP
const GroupDriverContainer = React.lazy(() => import('containers/GroupDriverContainer'));
const GroupDriverDetail = React.lazy(() => import('containers/GroupDriverDetail'));

// REFERRAL
const ReferralContainer = React.lazy(() => import('containers/ReferralContainer'));
const ReferralDetail = React.lazy(() => import('containers/ReferralDetail'));

// DRIVER LOCATION
const LocationDriver = React.lazy(() => import('containers/LocationDriver'));

// RATING
const RatingContainer = React.lazy(() => import('containers/RatingContainer'));
const RatingDetail = React.lazy(() => import('containers/RatingDetail'));

// PROMOTION
const Promotion = React.lazy(() => import('containers/Promotion'));
const PromotionCoupon = React.lazy(() => import('containers/PromotionCoupon'));
const PromotionCouponGenerated = React.lazy(() => import('containers/PromotionCouponGenerated'));
const PromotionReferral = React.lazy(() => import('containers/PromotionReferral'));

// WALLET
const WalletPromotion = React.lazy(() => import('containers/WalletPromotion'));
const WalletPromotionDetail = React.lazy(() => import('containers/WalletPromotionDetail'));
const WalletWithdraw = React.lazy(() => import('containers/WalletWithdraw'));

//Report
const ReportTotalOrder = React.lazy(() => import('containers/ReportTotalOrder'));
const ReportTotalOrderDetail = React.lazy(() => import('containers/ReportTotalOrderDetail'));
const ReportPayment = React.lazy(() => import('containers/ReportPayment'));
const ReportActivity = React.lazy(() => import('containers/ReportActivity'));

// Setting
const SettingCurrency = React.lazy(() => import('containers/SettingCurrency'));
const SettingVehicle = React.lazy(() => import('containers/SettingVehicle'));
const SettingCancelReason = React.lazy(() => import('containers/SettingCancelReason'));
const SettingPaymentMethod = React.lazy(() => import('containers/SettingPaymentMethod'));
const SettingColor = React.lazy(() => import('containers/SettingColor'));
const SettingFeedBackCategory = React.lazy(() => import('containers/SettingFeedBackCategory'));
const SettingStoreControl = React.lazy(() => import('containers/SettingStoreControl'));
const SettingCommissionCharge = React.lazy(() => import('containers/SettingCommissionCharge'));
const SettingAdminConfig = React.lazy(() => import('containers/SettingAdminConfig'));
const SettingReferral = React.lazy(() => import('containers/SettingReferral'));

// Notifications
const Notifications = React.lazy(() => import('containers/Notifications'));
// ============================================================================ ROUTE ::

const route: PropRoute[] = [
    // Dashboard
    {
        id: 'dashboard',
        path: '/dashboard',
        exact: true,
        name: 'Dashboard',
        component: DashboardContainer,
    },
    {
        id: 'dashboards',
        path: '/',
        exact: true,
        name: 'Dashboard',
        component: DashboardContainer,
    },
    {
        id: 'WEB:PICKUP_DRIVER:READ',
        path: '/dashboard/pickup-driver',
        exact: true,
        name: 'Pickup Driver',
        component: DashboardPickupDriver,
    },
    {
        id: 'WEB:PICKUP_DRIVER:READ_DETAIL',
        path: '/dashboard/pickup-driver/:id',
        exact: true,
        name: 'Pickup Driver Detail',
        component: DashboardPickupDriverDetail,
    },
    {
        id: 'WEB:TRANSPORT_DRIVER:READ',
        path: '/dashboard/transport-driver',
        exact: true,
        name: 'Transport Driver',
        component: DashboardTransportingDriver,
    },
    {
        id: 'WEB:TRANSPORT_DRIVER:READ_DETAIL',
        path: '/dashboard/transport-driver/:id',
        exact: true,
        name: 'Transport Driver Detail',
        component: DashboardTransportingDriverDetail,
    },
    // RIDER
    {
        id: 'WEB:RIDER:READ',
        path: '/rider',
        exact: true,
        name: 'Rider',
        component: RiderContainer,
    },
    {
        id: 'WEB:RIDER:READ_DETAIL',
        path: '/rider/:id',
        exact: true,
        name: 'Rider Detail',
        key: 'test',
        component: RiderDetail,
    },
    // Driver
    {
        id: 'WEB:DRIVER:READ',
        path: '/driver',
        exact: true,
        name: 'Driver',
        component: DriverContainer,
    },
    {
        id: 'WEB:DRIVER:READ_DETAIL',
        path: '/driver/:id',
        exact: true,
        name: 'Driver Detail',
        component: DriverDetail,
    },
    // Group Driver
    {
        id: 'WEB:GROUP:READ',
        path: '/group',
        exact: true,
        name: 'Driver Group',
        component: GroupDriverContainer,
    },
    {
        id: 'WEB:GROUP:READ_DETAIL',
        path: '/group/:id',
        exact: true,
        name: 'Driver Group Detail',
        component: GroupDriverDetail,
    },

    // Referral
    {
        id: 'WEB:REFERRAL:READ',
        path: '/referral',
        exact: true,
        name: 'Referral',
        component: ReferralContainer,
    },
    {
        id: 'WEB:REFERRAL:READ_DETAIL',
        path: '/referral/:id/:type',
        exact: true,
        name: 'Referral Detail',
        component: ReferralDetail,
    },
    // Driver location
    {
        id: 'WEB:LOCATION:READ',
        path: '/location-driver',
        exact: true,
        name: 'Driver Location',
        component: LocationDriver,
    },
    // Rating
    {
        id: 'WEB:RATING:READ',
        path: '/rating',
        exact: true,
        name: 'Rating',
        component: RatingContainer,
    },
    {
        id: 'WEB:RATING:READ_DETAIL',
        path: '/rating/:id',
        exact: true,
        name: 'Rating Detail',
        component: RatingDetail,
    },

    // Promotion
    {
        id: 'WEB:PROMOTION:READ',
        path: '/promotion-promotion',
        exact: true,
        name: 'Promotion',
        component: Promotion,
    },
    {
        id: 'WEB:COUPON:READ',
        path: '/promotion-coupon',
        exact: true,
        name: 'Coupon',
        component: PromotionCoupon,
    },
    {
        id: 'WEB:GENERATED_COUPON:READ',
        path: '/promotion-generated-coupon',
        exact: true,
        name: 'Coupon Genterated',
        component: PromotionCouponGenerated,
    },
    {
        id: 'WEB:REFERRAL_PROMOTION:READ',
        path: '/promotion-referral',
        exact: true,
        name: 'Referral Promotion',
        component: PromotionReferral,
    },
    // Wallet
    {
        id: 'WEB:WALLET_PROMOTION:READ',
        path: '/wallet-promotion',
        exact: true,
        name: 'Wallet Promotion',
        component: WalletPromotion,
    },
    {
        id: 'WEB:WALLET_PROMOTION:READ_DETAIL',
        path: '/wallet-promotion/:id/:status',
        exact: true,
        name: 'Wallet Promotion Detail',
        component: WalletPromotionDetail,
    },
    {
        id: 'WEB:WALLET_WITHDRAW:READ',
        path: '/wallet-withdraw',
        exact: true,
        name: 'Wallet Withdraw',
        component: WalletWithdraw,
    },
    // Report
    {
        id: 'WEB:ORDER_REASON:READ',
        path: '/report-total-order',
        exact: true,
        name: 'Total Order Report',
        component: ReportTotalOrder,
    },
    {
        id: 'WEB:ORDER_REASON:READ_DETAIL',
        path: '/report-total-order/:id',
        exact: true,
        name: 'Total Order Detail Report',
        component: ReportTotalOrderDetail,
    },
    {
        id: 'WEB:PAYMENT:READ',
        path: '/report-payment',
        exact: true,
        name: 'Payment Report',
        component: ReportPayment,
    },
    {
        id: 'WEB:ACTIVITY:READ',
        path: '/report-activity',
        exact: true,
        name: 'Activity Report',
        component: ReportActivity,
    },

    // Setting
    {
        id: 'WEB:CURRENCY:READ',
        path: '/setting-currency',
        exact: true,
        name: 'Currency Setting',
        component: SettingCurrency,
    },
    {
        id: 'WEB:VEHICLE:READ',
        path: '/setting-vehicle',
        exact: true,
        name: 'Vehicle Setting',
        component: SettingVehicle,
    },
    {
        id: 'WEB:CANCEL_REASON:READ',
        path: '/setting-cancel-reason',
        exact: true,
        name: 'Cancel Reason Setting',
        component: SettingCancelReason,
    },
    {
        id: 'WEB:PAYMENT_TYPE:READ',
        path: '/setting-payment-method',
        exact: true,
        name: 'Payment Method Setting',
        component: SettingPaymentMethod,
    },
    {
        id: 'WEB:COLOR:READ',
        path: '/setting-color',
        exact: true,
        name: 'Color Setting',
        component: SettingColor,
    },
    {
        id: 'WEB:FEEDBACK:READ',
        path: '/setting-feedback-category',
        exact: true,
        name: 'Feedback Category Setting',
        component: SettingFeedBackCategory,
    },
    {
        id: 'WEB:STORE_CONTROL:READ',
        path: '/setting-store-control',
        exact: true,
        name: 'Store Control Setting',
        component: SettingStoreControl,
    },
    {
        id: 'WEB:COMMISSION:READ',
        path: '/setting-commission-charge',
        exact: true,
        name: 'Commission Charge Setting',
        component: SettingCommissionCharge,
    },
    {
        id: 'WEB:ADMIN_CONFIG:READ',
        path: '/setting-admin-config',
        exact: true,
        name: 'Admin Config Setting',
        component: SettingAdminConfig,
    },
    {
        id: 'WEB:REFERRAL_SETTING:READ',
        path: '/setting-referral-setting',
        exact: true,
        name: 'Referral Setting',
        component: SettingReferral,
    },
    {
        id: 'WEB:NOTIFICATION:READ',
        path: '/notification',
        exact: true,
        name: 'Notifications',
        component: Notifications,
    },
];

export default route;
