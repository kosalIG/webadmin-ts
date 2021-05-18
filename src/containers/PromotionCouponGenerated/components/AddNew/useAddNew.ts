import { useEffect, useState } from 'react';
import moment from 'moment';
import { message } from 'antd';

import { Modals } from '../../interface';
import { useAddCoupon } from '../../api';
import { Metadata } from '../../interface';

export const useAddNew = ({ form, onRefetch }: { form: any; onRefetch: (meta?: Metadata) => void }): Modals => {
    const [visible, setVisible] = useState(false);
    const { createPromotion, data, loading } = useAddCoupon();

    const endedAt = new Date();
    endedAt.setHours(23);
    endedAt.setMinutes(59);
    endedAt.setSeconds(59);

    useEffect(() => {
        if (data) {
            message.success('Add new successfully');
            onRefetch({ limit: 10, offset: 0 });
            onCancel();
        }
    }, [data]);

    // Show modal
    const onShowModal = (): void => {
        setVisible(true);
        form.setFieldsValue({
            valueType: `PERCENTAGE`,
            status: `INACTIVE`,
            startedAt: moment(),
            endedAt: moment(endedAt),
            sms: '',
            name: '',
        });
    };

    // hide modal
    const onCancel = (): void => {
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
        loading,
        onShowModal,
        onCancel,
        onOk,
        onFinish,
    };
};
