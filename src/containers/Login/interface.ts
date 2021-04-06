export interface User {
    userName: string;
    password: string;
    remember?: boolean;
}

export interface LoginUIProps {
    onFinish(e: User): void;
    loading: boolean;
}

export interface LoginProp {
    loading: boolean;
    data: any;
    onLogin: (data: User) => void;
}
