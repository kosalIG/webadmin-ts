import React from 'react';
import styled from 'styled-components';
import { themeColor } from 'styles/constants';
import dateFormat from 'dateformat';
import { NavBarProps, TextNav } from '../interface';

const ActiveContain = styled.div`
    display: flex;
`;
const ActiveText = styled.div<{ colors: boolean }>`
    padding: 0 5px;
    cursor: pointer;
    color: ${(props) => (props.colors ? themeColor.primary : '')};
    &:hover {
        color: ${themeColor.primary};
    }
`;

const Index: React.FC<NavBarProps> = ({ qString, onClick }) => {
    const { dateType, startedAt, endedAt } = qString;
    // On navbar click
    function onNavClick(e: TextNav) {
        const { startedAt, endedAt } = dateTimes(e);
        onClick({ startedAt, endedAt, dateType: e });
    }

    // return Date Time
    function dateTimes(e: TextNav): { startedAt: Date; endedAt: Date } {
        if (e === 'MONTH') {
            const stDate = new Date(); // startedAt
            stDate.setMonth(0);
            stDate.setDate(1);

            const enDate = new Date(); // endedAt
            enDate.setMonth(11);
            enDate.setDate(31);

            return { startedAt: stDate, endedAt: enDate };
        }
        return { startedAt: new Date(new Date().setDate(1)), endedAt: new Date() };
    }

    return (
        <ActiveContain>
            <ActiveText colors={dateType === 'DAY'} onClick={() => onNavClick('DAY')}>
                All days
            </ActiveText>
            <ActiveText colors={dateType === 'WEEK'} onClick={() => onNavClick('WEEK')}>
                All weeks
            </ActiveText>
            <ActiveText colors={dateType === 'MONTH'} onClick={() => onNavClick('MONTH')}>
                All months
            </ActiveText>
            <ActiveContain style={{ color: themeColor.success, fontWeight: 'bold' }}>
                <div>{dateFormat(startedAt || new Date(), 'dd-mmm-yyyy')}</div>
                <div style={{ padding: `0px 5px` }}> ~ </div>
                <div>{dateFormat(endedAt || new Date(), 'dd-mmm-yyyy')}</div>
            </ActiveContain>
        </ActiveContain>
    );
};

export default Index;
