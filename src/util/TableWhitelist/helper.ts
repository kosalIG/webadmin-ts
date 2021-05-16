function useWhitelist({
    whitelistRecords,
    setwhitelistRecords,
}: {
    whitelistRecords: any[];
    setwhitelistRecords: (data: any) => void;
}): any {
    // handle input value onchange
    function onChange(id: string, key: string, e: any) {
        const newData = whitelistRecords.map((ite: any) => ({ ...ite }));
        const target = newData?.filter((item: any) => item.id === id)[0];
        target[key] = e;
        target.isError = validateField(target);
        setwhitelistRecords(newData);
    }

    // validate fields isEmpty
    function validateField(target: any) {
        const { fullName, localNumber } = target || {};
        if (fullName && localNumber) {
            return false;
        }
        return true;
    }

    function returnNewVal(record: any[]) {
        if (!record) return [];
        return record.map((item, idx) => ({
            ...item,
            id: `NEW${idx + 1}`,
            isNew: true,
            isError: false,
            isDelete: false,
        }));
    }

    // Remove Item
    function onRemove(id: string) {
        const newData = whitelistRecords.map((ite) => ({ ...ite }));
        const recordRemove = newData.filter((n) => n.id !== id);
        setwhitelistRecords(recordRemove);
    }

    return {
        onRemove,
        onChange,
        returnNewVal,
        whitelistRecords,
    };
}
export default useWhitelist;
