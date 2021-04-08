import React from 'react';
import { Line } from 'react-chartjs-2';
import { Card, Divider } from 'antd';
import Footer from './Footer';
import allDay, { mainChartOpts } from './allDay';
import userOrderReport from '../../useOrderReport';
import { TotalOrderReportProps } from '../../interface';

const Index: React.FC<TotalOrderReportProps> = ({ totalOrderReport }) => {
    const { chartData } = userOrderReport({ allDay, totalOrderReport });

    let max = 0;
    let totalValue = 0;

    Object.entries(totalOrderReport || {}).forEach(([, value]) => {
        totalValue += value.totalValue;
        if (value.maxValue > max) {
            max = value.maxValue;
        }
    });

    return (
        <Card>
            <h2>Total order report</h2>
            <div>date time</div>
            <div>
                <Line height={300} data={chartData} options={mainChartOpts} />
            </div>
            <Divider />
            <Footer {...totalOrderReport} totalValue={totalValue} />
        </Card>
    );
};

export default Index;
