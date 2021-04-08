// DATE TIMR
const today = new Date();

const labelDay: string[] = [];

// GET DATE IN MONTH
const lastDate = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
for (let i = 1; i <= lastDate; i++) {
    const stringDay = new Date(today.getFullYear(), today.getMonth(), i);
    // const day = stringDay.toString().split(' ')[0];
    labelDay.push(stringDay.toString());
}
export default labelDay;

export const mainChartOpts = {
    maintainAspectRatio: false,
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
                    max: 300 + 100,
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
