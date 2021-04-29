export interface TopupModalFormData {
    walletUId?: string;
    amount: number;
}

export interface TopupModalFormProps {
    onFormFinish?: (data: TopupModalFormData) => void;
}
export interface TopupDriverProps {
    fullName: string;
    useId: string;
}
