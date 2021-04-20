/* eslint-disable @typescript-eslint/no-explicit-any */
import { themeColor } from 'styles/constants';
import { LineOption } from './interface';

export function useLineOption({ lineData, lineLabel, lineText, maxValue }: LineOption): { data: any; option: any } {
    const data = {
        labels: lineLabel,
        datasets: [
            {
                label: lineText,
                backgroundColor: themeColor.primary,
                borderColor: themeColor.primary,
                borderWidth: 1,
                maxBarThickness: 100,
                minBarLength: 1,
                hoverBackgroundColor: themeColor.primary,
                hoverBorderColor: themeColor.primary,
                data: lineData,
            },
        ],
    };

    const option = {
        maintainAspectRatio: false,
        tooltips: {
            mode: 'x-axis',
        },
        legend: {
            display: false,
        },
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                        maxTicksLimit: 7,
                        max: maxValue + Math.ceil(maxValue / 10),
                        min: 0,
                        callback: (val: number) => (val < maxValue ? val : null),
                    },
                    gridLines: {
                        borderDash: [3, 5],
                    },
                },
            ],
            xAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                        // callback: day => {
                        //   if (status === 'allDay') return dateFormat(day, 'ddd');
                        //   return day;
                        // },
                    },
                    gridLines: {
                        display: false,
                    },
                },
            ],
        },
        // plugins: {
        //     datalabels: {
        //         font: {
        //             size: 12,
        //         },
        //         align: 'end',
        //         anchor: 'end',
        //         labels: {
        //             title: {
        //                 color: '#5CB2CC',
        //             },
        //         },
        //     },
        // },
    };

    return { data, option };
}
