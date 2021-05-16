import { useEffect, useState } from 'react';
import moment from 'moment';
import { message } from 'antd';

import { Modals } from '../../interface';
import { useAddPromotion, useAddWhitelist } from '../../api';
import { Metadata } from '../../interface';

export const useAddNew = ({
    form,
    dataObj,
    onRefetch,
}: {
    form: any;
    dataObj: any;
    onRefetch: (meta?: Metadata) => void;
}): Modals => {
    const [visible, setVisible] = useState(false);
    const [whitelistRecords, setwhitelistRecords] = useState<any[]>([]);
    const { createPromotion, data } = useAddPromotion();
    const { addPromotionWhitelist } = useAddWhitelist();

    const endedAt = new Date();
    endedAt.setHours(23);
    endedAt.setMinutes(59);
    endedAt.setSeconds(59);

    useEffect(() => {
        if (data) {
            message.success('Add new successfully');
            onRefetch({ limit: 10, offset: 0 });
            onCancel();
            addPromotionWhitelist({
                variables: {
                    id: data?.createPromotion?.id,
                    whitelist: handleRecords(whitelistRecords),
                },
            });
        }
    }, [data]);

    function handleRecords(records: any[]) {
        return records
            ?.filter((item) => !item.isError)
            .map((item) => {
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const { id, isNew, isError, ...newItem } = item;
                return { ...newItem };
            });
    }

    // Add new
    function onAddNewWhitelist() {
        setwhitelistRecords([
            {
                id: `NEW${Math.random()}`,
                fullName: '',
                localNumber: '',
                countryCode: '855',
                isError: true,
                isNew: true,
            },
            ...whitelistRecords,
        ]);
    }

    // Add new by Read excel
    function addWhitelistByExcel(val: any[]) {
        setwhitelistRecords([...whitelistRecords, ...val]);
    }

    // Show modal
    const onShowModal = (): void => {
        const { startedAt, endedAt, promotionCoupon, ...newObj } = dataObj || {};
        setwhitelistRecords([]);
        setVisible(true);
        form.setFieldsValue({
            ...newObj,
            ...promotionCoupon,
            startedAt: moment(startedAt),
            endedAt: moment(endedAt),
        });
    };

    // hide modal
    const onCancel = (): void => {
        setwhitelistRecords([]);
        setVisible(false);
        form.resetFields();
    };

    // Submit Form
    const onOk = (): void => {
        form.submit();
    };

    // Submit success
    const onFinish = (val: any): void => {
        createPromotion({
            variables: {
                ...val,
                maxAmount: val?.maxAmount || 0,
                amountPerUsed: val?.amountPerUsed || 0,
                totalUsedPerUser: val?.totalUsedPerUser || 0,
                totalUsedPerUserPerDay: val?.totalUsedPerUserPerDay || 0,
                expiredDays: val?.expiredDays || 0,
                startedAt: new Date(val?.startedAt),
                endedAt: new Date(val?.endedAt),
                createdBy: '123',
            },
        });
    };

    return {
        visible,
        whitelistRecords,
        onAddNewWhitelist,
        setwhitelistRecords,
        onShowModal,
        onCancel,
        onOk,
        onFinish,
        addWhitelistByExcel,
    };
};
