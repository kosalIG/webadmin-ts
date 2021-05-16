import { useState } from 'react';
import { useWhitelistConsummer } from '../WhitelistContex';

function useWhitelist(): any {
    const [timeOut, setTimeOut] = useState<any>(null);
    const {
        whitelistRecords,
        whitelistRemove,
        whitelistEdit,
        setwhitelistRecords,
        setWhitelistRemove,
        setWhitelistEdit,
        setTab,
    } = useWhitelistConsummer();

    // handle input value onchange
    function onChange(id: any, key: string | number, e: any) {
        const newData = whitelistRecords.map((ite: any) => ({ ...ite }));
        const target = newData?.filter((item: { id: any }) => item.id === id)[0];
        target[key] = e;

        if (!target.isNew) {
            target.isEdit = true;
        }

        target.isError = validateField(target);
        onDebounce(newData);
        setwhitelistRecords(newData);
    }

    function onDebounce(rec: any[]) {
        clearTimeout(timeOut);
        setTimeOut(
            setTimeout(() => {
                const isEdit = rec.filter((item: { isEdit: any }) => item.isEdit);
                const preRecord = whitelistEdit.filter(
                    (item: { id: any }) => !isEdit.find((fin: { id: any }) => fin.id === item.id),
                );

                setTab('edit');
                setWhitelistEdit([...isEdit, ...preRecord]);
            }, 800),
        );
    }

    // validate fields isEmpty
    function validateField(target: any) {
        const { fullName, localNumber } = target || {};
        if (fullName && localNumber) {
            return false;
        }
        return true;
    }

    function returnDefaultVal(record: any[]) {
        if (!record) return [];
        return record.map((item: any) => ({
            ...item,
            // isEdit: false,
            isNew: false,
            isError: false,
            isDelete: false,
        }));
    }

    // Remove Item
    function onRemove(id: string) {
        setTab('remove');

        const isDelete = whitelistRecords.find((n: { id: string }) => n.id === id);
        setWhitelistRemove([{ ...isDelete }, ...whitelistRemove]);

        // Remove Edit
        const isEdit = whitelistEdit?.filter((re: { id: string }) => re.id !== id);
        setWhitelistEdit(isEdit);
    }

    return {
        onRemove,
        onChange,
        returnDefaultVal,
        whitelistRecords,
    };
}
export default useWhitelist;
