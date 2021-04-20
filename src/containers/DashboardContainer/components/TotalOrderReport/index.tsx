import React from 'react';
import { Line } from 'react-chartjs-2';
import { Card, Divider } from 'antd';
import dateformat from 'dateformat';
import Footer from './Footer';
import allDay from './allDay';
import userOrderReport from './useOrderReport';
import { TotalOrderReportProps } from '../../interface';

const Index: React.FC<TotalOrderReportProps> = ({ totalOrderReport }) => {
    let max = 0;
    let totalValue = 0;

    Object.entries(totalOrderReport || {}).forEach(([, value]) => {
        totalValue += value.totalValue;
        if (value.maxValue > max) {
            max = value.maxValue;
        }
    });

    const { chartData, mainChartOpts } = userOrderReport({ allDay, totalOrderReport, max });

    return (
        <Card>
            <h2>Total order report</h2>
            <div>{dateformat(new Date(), 'mmmm yyyy')}</div>
            <div>
                <Line height={300} data={chartData} options={mainChartOpts} />
            </div>
            <Divider />
            <Footer {...totalOrderReport} totalValue={totalValue} />
        </Card>
    );
};

export default Index;
