import styled from 'styled-components';
import { themeColor, color } from 'styles/constants';
import {
    EyeOutlined,
    DeleteOutlined,
    DollarCircleOutlined,
    EditOutlined,
    CopyOutlined,
    NotificationOutlined,
    CheckCircleOutlined,
    CloseCircleOutlined,
} from '@ant-design/icons';

export const ViewIcon = styled(EyeOutlined)`
    color: ${themeColor.primary} !important;
    cursor: pointer;
    margin: 0 5px;
    padding: 3px;
    &: hover {
        padding: 3px;
        color: ${color.white} !important;
        background-color: ${themeColor.primary} !important;
        border-radius: 3px;
    }
`;

export const DeleteIcon = styled(DeleteOutlined)`
    color: ${themeColor.danger} !important;
    cursor: pointer;
    margin: 0 5px;
    padding: 3px;
    &: hover {
        padding: 3px;
        color: ${color.white} !important;
        background-color: ${themeColor.danger} !important;
        border-radius: 3px;
    }
`;

export const TopupIcon = styled(DollarCircleOutlined)`
    color: ${themeColor.success} !important;
    cursor: pointer;
    margin: 0 5px;
    padding: 3px;
    &: hover {
        padding: 3px;
        color: ${color.white} !important;
        background-color: ${themeColor.success} !important;
        border-radius: 3px;
    }
`;

export const EditIcon = styled(EditOutlined)`
    color: ${themeColor.warning} !important;
    cursor: pointer;
    margin: 0 5px;
    padding: 3px;
    &: hover {
        padding: 3px;
        color: ${color.white} !important;
        background-color: ${themeColor.warning} !important;
        border-radius: 3px;
    }
`;

export const CopyIcon = styled(CopyOutlined)`
    color: ${themeColor.primary} !important;
    cursor: pointer;
    margin: 0 5px;
    padding: 3px;
    &: hover {
        padding: 3px;
        color: ${color.white} !important;
        background-color: ${themeColor.primary} !important;
        border-radius: 3px;
    }
`;

export const PushIcon = styled(NotificationOutlined)`
    color: ${themeColor.success} !important;
    cursor: pointer;
    margin: 0 5px;
    padding: 3px;
    &: hover {
        padding: 3px;
        color: ${color.white} !important;
        background-color: ${themeColor.success} !important;
        border-radius: 3px;
    }
`;
export const ApproveIcon = styled(CheckCircleOutlined)`
    color: ${themeColor.primary} !important;
    cursor: pointer;
    margin: 0 5px;
    padding: 3px;
    &: hover {
        padding: 3px;
        color: ${color.white} !important;
        background-color: ${themeColor.primary} !important;
        border-radius: 3px;
    }
`;

export const RejectIcon = styled(CloseCircleOutlined)`
    color: ${themeColor.danger} !important;
    cursor: pointer;
    margin: 0 5px;
    padding: 3px;
    &: hover {
        padding: 3px;
        color: ${color.white} !important;
        background-color: ${themeColor.danger} !important;
        border-radius: 3px;
    }
`;
