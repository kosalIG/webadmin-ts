import { useAxios, AxiosProps } from 'util/useAxios';
import dateformat from 'dateformat';
import { GetUserProps, GetUser, RecordsProps, Qstring, TextNav } from './interface';
import { useState } from 'react';

// User Register
const useGetUserRegister = ({ dateType }: GetUserProps): GetUser => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<any>({});
    const { instance } = useAxios();

    const getUser = async (params: Qstring) => {
        setLoading(true);
        const config: AxiosProps = { url: '/admin/dashboard/total-register', params };
        const { result } = await instance({ config });
        if (result) {
            setData(result);
        }
        setLoading(false);
    };

    // DAY
    function days(records: RecordsProps[]) {
        const lineData = records.map((item) => item.count);
        const lineLabel = records.map((item) => dateformat(item.date, 'ddd'));
        return { lineLabel, lineData };
    }

    // WEEK
    function weeks(records: RecordsProps[]) {
        const currentWeek = Math.round(new Date().getDate() / 7);
        const lineData: number[] = [];
        const lineLabel: string[] = [];
        let i = 0;
        for (i; i < currentWeek; i += 1) {
            lineLabel.push(`WEEK ${i + 1}`);
            if (records[i]?.count) {
                lineData.push(+records[i].count);
            } else {
                lineData.push(0);
            }
        }
        return { lineLabel, lineData };
    }

    // MONTH
    function months(records: RecordsProps[]) {
        const lineData = records.map((item) => item.count);
        const lineLabel = records.map((item) => dateformat(item.date, 'mmm'));
        return { lineLabel, lineData };
    }

    // Before return records
    function handleRecords(dateType: TextNav, records: RecordsProps[]): { lineLabel: string[]; lineData: number[] } {
        // DAY
        if (dateType === 'DAY') {
            const { lineLabel, lineData } = days(records || []);
            return { lineLabel, lineData };
        }
        // WEEK
        if (dateType === 'WEEK') {
            const { lineLabel, lineData } = weeks(records || []);
            return { lineLabel, lineData };
        }
        // MONTH
        const { lineLabel, lineData } = months(records || []);
        return { lineLabel, lineData };
    }
    const { lineLabel, lineData } = handleRecords(dateType, data?.data);
    return { lineLabel, lineData, loading, getUser };
};
export { useGetUserRegister };
