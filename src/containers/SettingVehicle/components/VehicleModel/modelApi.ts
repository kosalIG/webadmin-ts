import { useEffect, useState } from 'react';
import { AxiosProps, useAxios } from 'util/useAxios';
import { message } from 'antd';
import { UseModal, UseModalProps } from '../../interface';
import { AddNew, AddNewProps, EditModel, EditProps, UseGetModel } from './interface';

export function useGetModel(vehicleId: string): UseGetModel {
    const { instance } = useAxios();
    const [records, setRecords] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getModel();
    }, []);

    async function getModel() {
        setLoading(true);
        const config = { url: `/vehicle-model/${vehicleId}` };
        const { result } = await instance({ config });
        if (result) {
            setRecords(result);
        }
        setLoading(false);
    }
    return { records, loading, getModel };
}

export function useModal({ form, dataObj, callback }: UseModalProps): UseModal {
    const [visible, setVisible] = useState(false);

    function onOk(): void {
        form.submit();
    }

    function onShowModal(): void {
        setVisible(true);
        if (dataObj) {
            console.log(dataObj);
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

export function useAddNew({ visible, vehicleId, onSuccess }: AddNewProps): AddNew {
    const { instance } = useAxios();
    const [loading, setLoading] = useState(false);
    const [file, setFile] = useState<string | null>(null);

    function onUploadSuccess(file: string | null) {
        setFile(file);
    }

    useEffect(() => {
        if (!visible) {
            setFile(null);
        }
    }, [visible]);

    async function addVehicleModel(val: any) {
        setLoading(true);
        const config: AxiosProps = { url: '/vehicle-model', method: 'POST', data: { ...val, vehicleId, image: file } };
        const { result } = await instance({ config });
        if (result) {
            message.success('Add vehicle model successfully');
            onSuccess();
        }
        setLoading(false);
    }

    return { file, loading, onUploadSuccess, addVehicleModel };
}

export function useEdit({ visible, modelId, vehicleId, onSuccess }: EditProps): EditModel {
    const { instance } = useAxios();
    const [loading, setLoading] = useState(false);
    const [file, setFile] = useState<string | null>(null);

    function onUploadSuccess(file: string | null) {
        setFile(file);
    }

    useEffect(() => {
        if (!visible) {
            setFile(null);
        }
    }, [visible]);

    async function editVehicleModel(val: any) {
        setLoading(true);
        const config: AxiosProps = {
            url: `/vehicle-model/${modelId}`,
            method: 'POST',
            data: { ...val, vehicleId, image: file },
        };
        const { result } = await instance({ config });
        if (result) {
            message.success('Update vehicle model successfully');
            onSuccess();
        }
        setLoading(false);
    }

    return { file, loading, onUploadSuccess, editVehicleModel };
}

export function useDelete({ callback }: { callback: () => void }): { deleteVehicle: (id: string) => void } {
    const { instance } = useAxios();

    async function deleteVehicle(id: string) {
        const config: AxiosProps = { url: `/vehicle-model/delete/${id}`, method: 'POST' };
        const { result } = await instance({ config });
        if (result) {
            message.success('Delete vehicle model successfully');
            callback();
        }
    }
    return { deleteVehicle };
}
