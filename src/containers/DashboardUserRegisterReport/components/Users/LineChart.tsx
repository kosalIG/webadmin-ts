import React from 'react';
import { Bar } from 'react-chartjs-2';
import { useLineOption } from '../../useLineOption';
import { LineOption } from '../../interface';
const LineChart: React.FC<LineOption> = ({ lineData, lineLabel, lineText, maxValue }) => {
    const { option, data } = useLineOption({
        lineData,
        lineLabel,
        lineText,
        maxValue,
    });
    return (
        <div>
            <Bar height={300} data={data} options={option} />
        </div>
    );
};

export default LineChart;
