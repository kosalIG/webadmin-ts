import { ModalProps } from 'antd';

export interface Metadata {
    limit: number;
    offset: number;
}

export interface Pagination extends Metadata {
    total: number;
}

export interface Data {
    data: any[];
    metadata: Pagination;
}

export interface UseModalProps {
    form: any;
    dataObj?: any;
}

export interface UseModal {
    visible: boolean;
    onOk: () => void;
    onShowModal: () => void;
    onCancel: () => void;
}

export interface FormUIProps extends ModalProps {
    form: any;
    title: string;
    loading: boolean;
    isEdit?: boolean;
    onFinish: (formInput: any) => void;
}

export interface UseDeleete {
    handleDelete: (id: string) => void;
}
