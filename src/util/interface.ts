export interface NavProps {
    id?: string;
    allow?: boolean;
    order: number;
    path: string;
    name: string;
    icon?: React.ReactNode;
    children?: Array<NavProps> | undefined;
}

export interface PropRoute {
    id: string;
    path: string;
    exact: boolean | false;
    name: string;
    component: React.FC;
    key?: string;
}

export interface UserLogin {
    id: string;
    fullName: string;
    gender: string;
}
