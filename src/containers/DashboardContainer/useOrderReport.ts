/* eslint-disable @typescript-eslint/no-explicit-any */
import { themeColor } from 'styles/constants';
import { TotalOrderReport } from './interface';

interface ChartData {
    allDay: string[];
    totalOrderReport: TotalOrderReport;
}

function useOrderReport({ allDay, totalOrderReport }: ChartData): { chartData: any } {
    const chartData = {
        labels: allDay,
        datasets: [
            {
                label: 'Driver end trip',
                backgroundColor: '#f6ffed',
                borderColor: themeColor.success,
                pointHoverBackgroundColor: '#fff',
                borderWidth: 2,
                data: totalOrderReport?.driverEndedTrip?.values,
            },
            {
                label: 'Driver rejected orders',
                backgroundColor: 'transparent',
                borderColor: themeColor.danger,
                pointHoverBackgroundColor: '#fff',
                borderWidth: 2,
                data: totalOrderReport?.driverRejectedOrder?.values,
            },
            {
                label: 'Driver missed orders',
                backgroundColor: 'transparent',
                borderColor: themeColor.warning,
                pointHoverBackgroundColor: '#fff',
                borderWidth: 2,
                data: totalOrderReport?.driverMissedOrder?.values,
            },
            {
                label: 'Rider canceled orders',
                backgroundColor: 'transparent',
                borderColor: themeColor.default,
                pointHoverBackgroundColor: '#fff',
                borderWidth: 2,
                data: totalOrderReport?.riderCancelledOrder?.values,
            },
            {
                label: 'Rider canceled trips',
                backgroundColor: 'transparent',
                borderColor: themeColor.primary,
                pointHoverBackgroundColor: '#fff',
                borderWidth: 2,
                data: totalOrderReport?.riderCancelledTrip?.values,
            },
            {
                label: 'Rider missed orders',
                backgroundColor: 'transparent',
                borderColor: themeColor.info,
                pointHoverBackgroundColor: '#fff',
                borderWidth: 2,
                data: totalOrderReport?.riderMissedOrder?.values,
            },
        ],
    };
    return { chartData };
}
export default useOrderReport;
