import React from 'react';
import { PropRoute } from 'util/interface';
// ============================================================================ COMPONENT ::
const DashboardContainer = React.lazy(() => import('containers/DashboardContainer'));
const DashboardPickupDriver = React.lazy(() => import('containers/DashboardPickupDriver'));
const DashboardTransportingDriver = React.lazy(() => import('containers/DashboardTransportingDriver'));

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
        id: 'dashboardPickupDriver',
        path: '/dashboard/pickup-driver',
        exact: true,
        name: 'Pickup Driver',
        component: DashboardPickupDriver,
    },
    {
        id: 'dashboardTransportDriver',
        path: '/dashboard/transport-driver',
        exact: true,
        name: 'Transport Driver',
        component: DashboardTransportingDriver,
    },
    // RIDER
    {
        id: 'riderContainer',
        path: '/rider',
        exact: true,
        name: 'Rider',
        component: RiderContainer,
    },
    {
        id: 'riderDetail',
        path: '/rider/:id',
        exact: true,
        name: 'Rider Detail',
        component: RiderDetail,
    },
    // Driver
    {
        id: 'driver',
        path: '/driver',
        exact: true,
        name: 'Driver',
        component: DriverContainer,
    },
    {
        id: 'driverDetail',
        path: '/driver/:id',
        exact: true,
        name: 'Driver Detail',
        component: DriverDetail,
    },
    // Group Driver
    {
        id: 'driverGroup',
        path: '/group',
        exact: true,
        name: 'Driver Group',
        component: GroupDriverContainer,
    },
    {
        id: 'driverGroupDetail',
        path: '/group/:id',
        exact: true,
        name: 'Driver Detail',
        component: GroupDriverDetail,
    },

    // Referral
    {
        id: 'referral',
        path: '/referral',
        exact: true,
        name: 'Referral',
        component: ReferralContainer,
    },
    {
        id: 'referralDetail',
        path: '/referral/:id/:type',
        exact: true,
        name: 'Referral',
        component: ReferralDetail,
    },
    // Driver location
    {
        id: 'driverLocation',
        path: '/location-driver',
        exact: true,
        name: 'Driver Location',
        component: LocationDriver,
    },
    // Rating
    {
        id: 'rating',
        path: '/rating',
        exact: true,
        name: 'Rating',
        component: RatingContainer,
    },
    {
        id: 'ratingDetail',
        path: '/rating/:id',
        exact: true,
        name: 'Rating detail',
        component: RatingDetail,
    },

    // Promotion
    {
        id: 'promotion',
        path: '/promotion/promotion',
        exact: true,
        name: 'Promotion',
        component: Promotion,
    },
    {
        id: 'promotionCoupon',
        path: '/promotion/coupon',
        exact: true,
        name: 'Promotion',
        component: PromotionCoupon,
    },
    {
        id: 'promotionCouponGenerated',
        path: '/promotion/generated-coupon',
        exact: true,
        name: 'Coupon Genterated',
        component: PromotionCouponGenerated,
    },
    {
        id: 'promotionReferral',
        path: '/promotion/referral',
        exact: true,
        name: 'Referral',
        component: PromotionReferral,
    },
    // Wallet
    {
        id: 'walletPromotion',
        path: '/wallet/promotion',
        exact: true,
        name: 'Wallet Promotion',
        component: WalletPromotion,
    },
    {
        id: 'walletPromotionDetail',
        path: '/wallet/promotion/:id/:status',
        exact: true,
        name: 'Wallet Promotion',
        component: WalletPromotionDetail,
    },
    {
        id: 'walletWithdraw',
        path: '/wallet/withdwraw',
        exact: true,
        name: 'Wallet Withdraw',
        component: WalletWithdraw,
    },
    // Report
    {
        id: 'reportTotalOrder',
        path: '/report/total-order',
        exact: true,
        name: 'Total Order',
        component: ReportTotalOrder,
    },
    {
        id: 'reportTotalOrderDetail',
        path: '/report/total-order/:id',
        exact: true,
        name: 'Total Order',
        component: ReportTotalOrderDetail,
    },
    {
        id: 'reportPayment',
        path: '/report/payment',
        exact: true,
        name: 'Payment',
        component: ReportPayment,
    },
    {
        id: 'reportActivity',
        path: '/report/activity',
        exact: true,
        name: 'Activity',
        component: ReportActivity,
    },

    // Setting
    {
        id: 'settingCurrency',
        path: '/setting/currency',
        exact: true,
        name: 'Currency',
        component: SettingCurrency,
    },
    {
        id: 'settingVehicle',
        path: '/setting/vehicle',
        exact: true,
        name: 'Vehicle',
        component: SettingVehicle,
    },
    {
        id: 'settingCancelReason',
        path: '/setting/cancel-reason',
        exact: true,
        name: 'Cancel Reason',
        component: SettingCancelReason,
    },
    {
        id: 'settingPaymentMethod',
        path: '/setting/payment-method',
        exact: true,
        name: 'Payment Method',
        component: SettingPaymentMethod,
    },
    {
        id: 'settingColor',
        path: '/setting/color',
        exact: true,
        name: 'Color',
        component: SettingColor,
    },
    {
        id: 'settingFeedBackCategory',
        path: '/setting/feedback-category',
        exact: true,
        name: 'Feedback Category',
        component: SettingFeedBackCategory,
    },
    {
        id: 'settingStoreControl',
        path: '/setting/store-control',
        exact: true,
        name: 'Store Control',
        component: SettingStoreControl,
    },
    {
        id: 'settingCommissionCharge',
        path: '/setting/commission-charge',
        exact: true,
        name: 'Commission Charge',
        component: SettingCommissionCharge,
    },
    {
        id: 'settingAdminConfig',
        path: '/setting/admin-config',
        exact: true,
        name: 'Admin Config',
        component: SettingAdminConfig,
    },
    {
        id: 'settingReferral',
        path: '/setting/referral-setting',
        exact: true,
        name: 'Referral Setting',
        component: SettingReferral,
    },
];

export default route;
