/**
 *
 * Pagination
 *
 */

import React from 'react';
import styled from 'styled-components';
import { Pagination } from 'antd';
import { PaginProps } from './interface';

const PaginUI = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
`;

const Index: React.FC<PaginProps> = ({ metadata, onPagin }) => {
    const { total = 0, limit = 10, offset = 0 } = metadata || {};
    return (
        <div>
            <PaginUI>
                <div>Total: {total}</div>
                <Pagination
                    showSizeChanger
                    onChange={(current, pageSize) => onPagin(Number(pageSize) * (current - 1), Number(pageSize))}
                    onShowSizeChange={(current, pageSize) => onPagin(pageSize * (current - 1), pageSize)}
                    showQuickJumper
                    current={offset / limit + 1}
                    pageSize={limit}
                    pageSizeOptions={['10', '20', '50', '100']}
                    total={total}
                />
            </PaginUI>
        </div>
    );
};

export default Index;
