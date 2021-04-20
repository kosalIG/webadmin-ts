export type TextNav = 'DAY' | 'WEEK' | 'MONTH';

export type Type = 'VENDOR' | 'RIDER';

export interface NavBar {
    dateType: TextNav;
    startedAt: Date;
    endedAt: Date;
}

export interface LineChart {
    lineLabel: string[];
    lineData: number[];
}

export interface NavBarProps {
    onClick: (e: NavBar) => void;
    qString: Qstring;
}

export interface Qstring extends NavBar {
    type: Type | string;
}

export interface RecordsProps {
    date: Date;
    count: number;
}
export interface GetUser extends LineChart {
    getUser: (params: Qstring) => void;
    loading: boolean;
}

export interface GetUserProps {
    dateType: TextNav;
}

export interface LineOption extends LineChart {
    lineText: string;
    maxValue: number;
}
