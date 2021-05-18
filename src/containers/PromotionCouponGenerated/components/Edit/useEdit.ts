import { useEffect, useState } from 'react';
import moment from 'moment';
import { message } from 'antd';

import { Modals } from '../../interface';
import { useUpdateCoupon } from '../../api';
import { Metadata } from '../../interface';

export const useEdit = ({
    form,
    dataObj,
    onRefetch,
}: {
    form: any;
    dataObj: any;
    onRefetch: (meta?: Metadata) => void;
}): Modals => {
    const [visible, setVisible] = useState(false);
    const { updatePromotion, data, loading } = useUpdateCoupon();

    const endedAt = new Date();
    endedAt.setHours(23);
    endedAt.setMinutes(59);
    endedAt.setSeconds(59);

    useEffect(() => {
        if (data) {
            message.success('Update  successfully');
            onRefetch({ limit: 10, offset: 0 });
            onCancel();
        }
    }, [data]);

    // Show modal
    const onShowModal = (): void => {
        const { startedAt, endedAt, promotionCoupon, ...newObj } = dataObj;
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
        setVisible(false);
        form.resetFields();
    };

    // Submit Form
    const onOk = (): void => {
        form.submit();
    };

    // Submit success
    const onFinish = (val: any): void => {
        updatePromotion({
            variables: {
                ...val,
                maxAmount: val?.maxAmount || 0,
                amountPerUsed: val?.amountPerUsed || 0,
                totalUsedPerUser: val?.totalUsedPerUser || 0,
                totalUsedPerUserPerDay: val?.totalUsedPerUserPerDay || 0,
                expiredDays: val?.expiredDays || 0,
                id: dataObj.id,
                startedAt: new Date(val?.startedAt),
                endedAt: new Date(val?.endedAt),
                updatedBy: '123',
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
