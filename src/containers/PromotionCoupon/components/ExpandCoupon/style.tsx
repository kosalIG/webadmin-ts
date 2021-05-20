// import React from 'react';
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';
import styled from 'styled-components';

export const IconClose = styled(CloseCircleOutlined)`
    color: rgb(255, 77, 79) !important;
    cursor: pointer;
    margin: 0 5px;
    padding: 3px;
    &: hover {
        padding: 3px;
        color: white !important;
        background-color: rgb(255, 77, 79) !important;
        border-radius: 3px;
    }
`;

export const IconCheck = styled(CheckCircleOutlined)`
    color: #52c41a !important;
    cursor: pointer;
    margin: 0 5px;
    padding: 3px;
    &: hover {
        padding: 3px;
        color: white !important;
        background-color: #52c41a !important;
        border-radius: 3px;
    }
`;
