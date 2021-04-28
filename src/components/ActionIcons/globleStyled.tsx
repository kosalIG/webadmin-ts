import styled from 'styled-components';
import { themeColor, color } from 'styles/constants';
import { EyeOutlined, DeleteOutlined, DollarCircleOutlined } from '@ant-design/icons';

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
