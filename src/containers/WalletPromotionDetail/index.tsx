import React from 'react';
import { Card, Table, Row, Col } from 'antd';
import Currency from 'components/Currency';
import Pagination from 'components/Pagination';
import useColumn from './useColumn';
import { useGetPromotion } from './api';
import ApproveButton from './components/ApproveButton';
import RejectButton from './components/RejectButton';
import Breadcrumbs from 'components/Breadcrumbs';

const Index: React.FC = () => {
    const { selection, loading, dataObj, onRefetch } = useGetPromotion();
    const { selectedRowKeys, rowSelection, totalAmount, idSelected, fullName } = selection || {};

    const { columns } = useColumn({ onRefetch });
    const isRowKey = Boolean(selectedRowKeys?.length);
    return (
        <Card title="Wallet - Promotion Detail" type="inner">
            <Breadcrumbs propRoutes={['WEB:WALLET_PROMOTION:READ', 'WEB:WALLET_PROMOTION:READ_DETAIL']} />

            <Row gutter={[10, 10]}>
                <Col>
                    <ApproveButton
                        ids={idSelected}
                        amount={totalAmount}
                        fullName={fullName}
                        disabled={!isRowKey}
                        onRefetch={onRefetch}
                    />
                </Col>
                <Col>
                    <RejectButton
                        ids={idSelected}
                        amount={totalAmount}
                        fullName={fullName}
                        disabled={!isRowKey}
                        onRefetch={onRefetch}
                    />
                </Col>
            </Row>
            <Row style={{ marginTop: 5 }} justify="space-between">
                <Col>{`Select ${selectedRowKeys?.length} item(s)`}</Col>
                <Col>
                    Total: <Currency value={totalAmount} type="KHR" />
                </Col>
            </Row>
            <Table
                size="middle"
                bordered
                loading={loading}
                pagination={false}
                columns={columns}
                rowSelection={rowSelection}
                dataSource={dataObj?.results?.map((re: any, idx: number) => ({ ...re, key: idx + 1 }))}
            />
            <Pagination
                metadata={dataObj?.metadata}
                onPagin={(offset: number, limit: number) => onRefetch({ offset, limit })}
            />
        </Card>
    );
};

export default Index;
