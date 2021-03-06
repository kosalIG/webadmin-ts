import { ReactNode } from 'react';

export type BackgrouColor = 'primary' | 'info' | 'default' | 'success' | 'warning' | 'danger';

export interface TotalData {
    totalAvailableDriver: number;
    totalDriver: number;
    totalRegisterUser: TotalRegisterUser;
}

export interface TotalRegisterUser {
    totalDriverAndroid: number;
    totalDriverIOS: number;
    totalDriverOther: number;
    totalRiderAndroid: number;
    totalRiderIOS: number;
    totalRiderOther: number;
}

export interface DriverCardUI {
    background?: BackgrouColor;
    topText: string | ReactNode;
    contentText: number;
    bottomText: string;
}

export interface DashboardCard {
    totalOnlineDrivers: number;
    totalActiveDrivers: number;
    totalOnPickupDrivers: number;
    totalOnTransitDrivers: number;
    totalTransaction: number;
    totalIncome: number;
    totalAvailableDriver: number;
    totalDriver: number;
}

export interface FooterCardProps {
    title: string;
    background?: BackgrouColor;
    value: number;
    vatValue: number;
}
export interface FooterProps extends TotalOrderReport {
    totalValue: number;
}

export interface TotalOrderReportProps {
    totalOrderReport: TotalOrderReport;
}
export interface TotalOrderReport {
    driverEndedTrip: OrderReportProps;
    driverMissedOrder: OrderReportProps;
    driverRejectedOrder: OrderReportProps;
    riderCancelledOrder: OrderReportProps;
    riderCancelledTrip: OrderReportProps;
    riderMissedOrder: OrderReportProps;
}

export interface OrderReportProps {
    maxValue: number;
    totalValue: number;
    values: number[];
}
export interface InactiveItem {
    avatar: string;
    fullName: string;
    mobileNumber: string;
}
export interface InactiveUser {
    driver: InactiveItem;
    inactiveAt: number;
}
export interface InactiveProps {
    records: InactiveUser[];
}
export interface TotalRegisterUser {
    totalDriverAndroid: number;
    totalDriverIOS: number;
    totalDriverOther: number;
    totalRiderAndroid: number;
    totalRiderIOS: number;
    totalRiderOther: number;
}
export interface FeedbackCategories {
    name: string;
}
export interface FeedbackUser {
    avatar?: string;
    fullName: string;
}
export interface FeedbackUI {
    src: string;
    customer: FeedbackUser;
    driver: FeedbackUser;
    feedbackCategories: FeedbackCategories[];
    rating: number;
    description: string;
    createdAt: Date;
}
export interface FeedbackUIProps {
    item: FeedbackUI;
}
