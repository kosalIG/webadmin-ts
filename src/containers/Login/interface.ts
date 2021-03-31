export interface User {
    username: string;
    password: string;
    remember?: boolean;
}

export interface LoginUIProps {
    onFinish(e: User): void;
}
