export interface Data {
    image: string;
    id: string;
    name: string;
    description: string;
}
export interface UserData {
    userList: any[];
    metadata: Metadata;
}

export interface Metadata extends Pagin {
    total: number;
}
export interface Pagin {
    offset: number;
    limit: number;
}

export interface AddUser {
    visible: boolean;
    loading: boolean;
    onShow: () => void;
    onCancel: () => void;
    onOk: () => void;
    addUser: (params: any) => void;
}

export interface AddUserProps {
    form: Forms;
    onSuccess: () => void;
}

export interface Forms {
    resetFields: () => void;
    submit: () => void;
    setFieldsValue: (val: any) => void;
}

export interface UseGetDriver {
    getDriver: (param: any) => void;
    onScroll: (e: any) => void;
    searchUser: (e: any) => void;
    records: any[];
    loading: boolean;
}

export interface UseGetGroupUserList {
    loading: boolean;
    userData: UserData;
    onSearch: (fields: any) => void;
    onPagin: ({ offset, limit }: Pagin) => void;
    getGroupUserList: () => void;
}
