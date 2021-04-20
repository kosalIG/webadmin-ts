/* eslint-disable @typescript-eslint/no-explicit-any */
import { themeColor } from 'styles/constants';

export default function useRegisterUser(): { options: any; doughnut: any } {
    const options = {
        maintainAspectRatio: true,
        responsive: false,
        margin: 'auto',
        plugins: {
            datalabels: {
                display: false,
            },
        },
    };

    const doughnut = {
        labels: [' Android', ' IOS', ' Other'],
        datasets: [
            {
                data: [100, 20, 30],
                backgroundColor: [themeColor.danger, themeColor.primary, themeColor.warning],
                hoverBackgroundColor: [themeColor.danger, themeColor.primary, themeColor.warning],
            },
        ],
    };
    return { options, doughnut };
}
