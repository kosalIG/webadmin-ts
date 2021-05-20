export interface Metadata {
    limit: number;
    offset: number;
}

export interface Pagination extends Metadata {
    total: number;
}

export interface Data {
    results: any[];
    metadata: Pagination;
}

export interface Promotion {
    dataObj: Data;
    qString: any;
    loading: boolean;
    selection: Selection;
    onRefetch: (meta?: Metadata) => void;
    handleChange?: (filter: any) => void;
}

export interface Selection {
    rowSelection: any;
    idSelected: string[];
    selectedRowKeys: number[];
    totalAmount: number;
    fullName: string;
}

export interface ApproveButton {
    visible: boolean;
    loading: boolean;
    onShowModal: () => void;
    onOk: (ids: string[]) => void;
    onCancel: () => void;
}

export interface ApproveButtonProps {
    onRefetch: (meta?: Metadata) => void;
}

export interface ApprovalProps {
    onRefetch: (meta?: Metadata) => void;
    onCancel: () => void;
}

export interface Approval {
    loading: boolean;
    onApproval: (ids: string[]) => void;
}

export interface RejectProps {
    onRefetch: (meta?: Metadata) => void;
    onCancel: () => void;
}

export interface Reject {
    loading: boolean;
    onReject: (ids: string[]) => void;
}
