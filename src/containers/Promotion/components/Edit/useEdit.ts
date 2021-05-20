import { useEffect, useState } from 'react';
import moment from 'moment';
import { message } from 'antd';
import { EditWhitelist, Metadata } from '../../interface';
import { useEditPromotion } from '../../api';

export const useEdit = ({
    form,
    dataObj,
    onRefetch,
}: {
    form: any;
    dataObj: any;
    onRefetch: (meta?: Metadata) => void;
}): any => {
    const [visible, setVisible] = useState(false);
    const [whitelistAddnew, setWhitelistAddnew] = useState<any[]>([]);
    const [whitelistEdit, setWhitelistEdit] = useState<any[]>([]);
    const [whitelistRemove, setWhitelistRemove] = useState<any[]>([]);
    const [whitelistRecords, setwhitelistRecords] = useState<any[]>([]);
    const [whitelistData, setwhitelistData] = useState({});
    const { updatePromotion, data, loading } = useEditPromotion();

    const endedAt = new Date();
    endedAt.setHours(23);
    endedAt.setMinutes(59);
    endedAt.setSeconds(59);

    useEffect(() => {
        if (data) {
            message.success('Update successfully');
            onRefetch();
            onCancel();
        }
    }, [data]);

    // Show modal
    const onShowModal = (): void => {
        const { startedAt, endedAt, promotionCoupon, ...newObj } = dataObj || {};
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
        setWhitelistEdit([]);
        setWhitelistAddnew([]);
        setWhitelistRemove([]);
    };

    // Submit Form
    const onOk = (): void => {
        form.submit();
    };

    // Submit success
    const onFinish = (val: any): void => {
        updatePromotion({
            variables: {
                input: {
                    ...val,
                    ...whitelistData,
                    id: dataObj?.id,
                    maxAmount: val?.maxAmount || 0,
                    amountPerUsed: val?.amountPerUsed || 0,
                    totalUsedPerUser: val?.totalUsedPerUser || 0,
                    totalUsedPerUserPerDay: val?.totalUsedPerUserPerDay || 0,
                    expiredDays: val?.expiredDays || 0,
                    startedAt: new Date(val?.startedAt),
                    endedAt: new Date(val?.endedAt),
                    updatedBy: '123',
                },
            },
        });
    };

    function handleWhitelist(dataValue: any) {
        const addWhitelists = addFilters(dataValue.whitelistAddnew);
        const editWhitelists = editFilters(dataValue.whitelistEdit);
        const removeWhitelists = deleteFilters(dataValue.whitelistRemove);
        setwhitelistData({ addWhitelists, editWhitelists, removeWhitelists });
    }

    function addFilters(records: any[]) {
        return records
            ?.filter((re) => !re.isError)
            ?.map((re) => ({
                fullName: re.fullName,
                countryCode: re.countryCode,
                localNumber: re.localNumber,
            }));
    }

    function editFilters(records: any[]) {
        return records
            ?.filter((re) => !re.isError)
            ?.map((re) => ({
                fullName: re.fullName,
                countryCode: re.countryCode,
                localNumber: re.localNumber,
                id: re.id,
            }));
    }

    function deleteFilters(records: any[]) {
        return records?.filter((re) => !re.isError)?.map((re) => re.id);
    }

    const editWhitelist: EditWhitelist = {
        whitelistAddnew,
        whitelistEdit,
        whitelistRemove,
        whitelistRecords,
        setWhitelistEdit,
        setWhitelistAddnew,
        setWhitelistRemove,
        setwhitelistRecords,
    };

    return {
        visible,
        loading,
        editWhitelist,
        handleWhitelist,
        onShowModal,
        onCancel,
        onOk,
        onFinish,
    };
};
