import { useEffect, useState } from 'react';
import { useLazyQuery, useMutation, useQuery } from '@apollo/client';
import { useAxios, AxiosProps } from 'util/useAxios';
import { GET_PRICE, GET_CURRENCY, ADD_PRICE, UPDATE_PRICE } from './gql';
import {
    UseModal,
    UseModalProps,
    ImgObj,
    AddNewProps,
    AddNew,
    Currency,
    EditProps,
    GetVehicle,
    EditVehicle,
} from './interface';
import message from 'antd/lib/message';

export function useGetVehicle(): GetVehicle {
    const { instance } = useAxios();
    const [records, setRecords] = useState([]);
    const [vehicleRecords, setVehicleRecords] = useState<any[]>([]);

    const [getItemPriceListByVehicleIds, { data, loading }] = useLazyQuery(GET_PRICE);
    const { getItemPriceListByVehicleIds: listPrice = [] } = data || {};

    useEffect(() => {
        getVehicle();
    }, []);

    async function getVehicle() {
        const config = { url: '/vehicle' };
        const { result } = await instance({ config });
        if (result) {
            const vehicleIds = result?.map((item: any) => item.id);
            getItemPriceListByVehicleIds({ variables: { vehicleIds } });
            setRecords(result);
        }
    }

    useEffect(() => {
        if (listPrice) {
            const listVehicle = records?.map((vehicle: any, idx: number) => ({
                ...vehicle,
                ...handlePrice(listPrice, vehicle.id),
                key: idx + 1,
            }));
            setVehicleRecords(listVehicle);
        }
    }, [listPrice]);

    function handlePrice(priceRecords: any[], id: string) {
        const priceData = priceRecords.find((price) => price.vehicleId === id) || {};
        return { ...priceData };
    }

    return { loading, vehicleRecords, getVehicle };
}

export function useModal({ form, dataObj, callback }: UseModalProps): UseModal {
    const [visible, setVisible] = useState(false);

    function onOk(): void {
        form.submit();
    }

    function onShowModal(): void {
        setVisible(true);
        if (dataObj) {
            form.setFieldsValue({ ...dataObj });
        }

        if (callback) {
            callback();
        }
    }

    function onCancel(): void {
        setVisible(false);
        form.resetFields();
    }
    return { visible, onOk, onShowModal, onCancel };
}

export function useAddNew({ visible, onSuccess }: AddNewProps): AddNew {
    const { instance } = useAxios();
    const [loading, setLoading] = useState(false);
    const [imgObj, setImgObj] = useState<ImgObj | null>(null);
    const [createItemPrice] = useMutation(ADD_PRICE);

    function onUploadSuccess(file: ImgObj) {
        setImgObj({ ...imgObj, ...file });
    }

    useEffect(() => {
        if (!visible) {
            setImgObj(null);
        }
    }, [visible]);

    async function addVehicle(val: any) {
        setLoading(true);
        const { itemPrices = [], ...newObj } = val;
        const config: AxiosProps = { url: '/vehicle', method: 'POST', data: { ...newObj, ...imgObj } };
        const { result } = await instance({ config });
        if (result) {
            if (itemPrices.length) {
                const { id } = result;
                const prices = itemPrices.map((item: any) => ({
                    ...item,
                    createdBy: '123',
                    itemType: 'VEHICLE',
                }));
                await createItemPrice({
                    variables: { vehicleId: id, itemPrices: prices },
                });
            }
            message.success('Add vehicle successfully');
            onSuccess();
        }
        setLoading(false);
    }

    return { imgObj, loading, onUploadSuccess, addVehicle };
}

function useUpdatePricing(): { updateItemPrice: (val: any) => void } {
    const [updateItemPrice] = useMutation(UPDATE_PRICE);
    return { updateItemPrice };
}

export function useEdit({ visible, vehicleId, onSuccess }: EditProps): EditVehicle {
    const { instance } = useAxios();
    const [loading, setLoading] = useState(false);
    const [imgObj, setImgObj] = useState<ImgObj | null>(null);
    const { updateItemPrice } = useUpdatePricing();

    function onUploadSuccess(file: ImgObj) {
        setImgObj({ ...imgObj, ...file });
    }

    useEffect(() => {
        if (!visible) {
            setImgObj(null);
        }
    }, [visible]);

    async function editVehicle(val: any) {
        setLoading(true);
        const { itemPrices, ...newObj } = val;
        const config: AxiosProps = { url: '/vehicle/' + vehicleId, method: 'POST', data: { ...newObj, ...imgObj } };
        const { result } = await instance({ config });
        if (result) {
            if (itemPrices.length) {
                const prices = itemPrices.map((item: any) => ({
                    ...item,
                    createdBy: '123',
                    itemType: 'VEHICLE',
                }));
                await updateItemPrice({
                    variables: { vehicleId, itemPrices: prices },
                });
            }
            if (!itemPrices.length) {
                await updateItemPrice({
                    variables: { vehicleId, itemPrices: [] },
                });
            }
            message.success('Update vehicle successfully');
            onSuccess();
        }
        setLoading(false);
    }
    return { imgObj, loading, onUploadSuccess, editVehicle };
}

export function useDelete({ callback }: { callback: () => void }): { deleteVehicle: (id: string) => void } {
    const { instance } = useAxios();
    const { updateItemPrice } = useUpdatePricing();

    async function deleteVehicle(id: string) {
        const config: AxiosProps = { url: `/vehicle/delete/${id}`, method: 'POST' };
        const { result } = await instance({ config });
        if (result) {
            updateItemPrice({ variables: { vehicleId: id, itemPrices: [] } });
            message.success('Delete vehicle successfully');
            callback();
        }
    }
    return { deleteVehicle };
}

export function useGetCurrency(): { currencyRecords: Currency[]; loading: boolean } {
    const { data, loading } = useQuery(GET_CURRENCY);
    const { getCurrencies } = data || {};
    const { data: currencyRecords } = getCurrencies || {};
    return { currencyRecords, loading };
}
