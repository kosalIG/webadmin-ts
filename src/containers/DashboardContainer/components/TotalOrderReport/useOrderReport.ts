/* eslint-disable @typescript-eslint/no-explicit-any */
import { themeColor } from 'styles/constants';
import { TotalOrderReport } from '../../interface';

interface ChartData {
    allDay: string[];
    totalOrderReport: TotalOrderReport;
    max: number;
}

function useOrderReport({ allDay, totalOrderReport, max }: ChartData): { chartData: any; mainChartOpts: any } {
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
    const mainChartOpts = {
        maintainAspectRatio: false,
        tooltips: {
            mode: 'x-axis',
        },
        legend: {
            display: true,
        },
        scales: {
            xAxes: [
                {
                    gridLines: {
                        drawOnChartArea: false,
                    },
                    type: 'time',
                    time: {
                        tooltipFormat: 'dddd, MMMM DD, yyyy',
                        displayFormats: {
                            day: 'dd',
                        },
                    },
                },
            ],
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                        maxTicksLimit: 7,
                        stepSize: Math.ceil(500 / 10),
                        max: max + 100,
                    },
                },
            ],
        },
        elements: {
            point: {
                radius: new Date().getDate() === 1 ? 5 : 0,
                hitRadius: 10,
                hoverRadius: 4,
                hoverBorderWidth: 4,
            },
        },
        plugins: {
            datalabels: {
                display: false,
            },
        },
    };

    return { chartData, mainChartOpts };
}
export default useOrderReport;
