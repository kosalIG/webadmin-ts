import React from 'react';
import { TeamOutlined } from '@ant-design/icons';
import { Card, Col, Row, Divider, Table } from 'antd';
import Pagination from 'components/Pagination';
import useColumns from './useColumn';
import { useGetWhitelistApi } from '../../api';
import AddNew from './AddNew';
import DeleteAll from './DeleteAllWhitelist';

const Index: React.FC<{ id: number }> = ({ id }) => {
    const { records, metadata, loading, handlePagin, onRefetch } = useGetWhitelistApi(id);
    const { column } = useColumns({ onRefetch });

    return (
        <div style={{ maxWidth: 800 }}>
            <Card hoverable style={{ cursor: 'default' }}>
                <Row justify="space-between" gutter={[0, 8]} style={{ marginBottom: 10 }}>
                    <Col>
                        <div style={{ color: '#096dd9' }}>
                            <TeamOutlined />
                            <span> WHITELIST</span>
                        </div>
                    </Col>
                    <Col>
                        <Row>
                            <Col>
                                <AddNew id={id} onRefetch={onRefetch} />
                            </Col>
                            <Col>
                                <Divider type="vertical" />
                                <DeleteAll id={id} onRefetch={onRefetch} />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Table
                    size="small"
                    loading={loading}
                    pagination={false}
                    bordered
                    columns={column}
                    dataSource={records?.map((item: any, idx: number) => ({ ...item, idx: idx + 1 }))}
                    rowKey={(e: any) => e.id}
                    locale={{ emptyText: 'No Data' }}
                />
                <Pagination
                    metadata={metadata}
                    onPagin={(offset: number, limit: number) => handlePagin({ offset, limit })}
                />
            </Card>
        </div>
    );
};

export default Index;
