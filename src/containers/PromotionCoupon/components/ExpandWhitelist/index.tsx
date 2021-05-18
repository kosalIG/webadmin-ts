import React from 'react';
import { Row, Col, Divider, Table } from 'antd';
import { useWhitelistColumn } from './useWhitelistColumn';
import AddNew from './AddNew';
import DeleteAll from './DeleteAllWhitelist';

const Index: React.FC<{ records?: any[]; id: any; onRefetch: (val?: any) => void }> = ({ records, id, onRefetch }) => {
    const { columns } = useWhitelistColumn({ onRefetch });

    return (
        <div>
            <Row justify="end" gutter={[0, 8]} style={{ marginBottom: 10 }}>
                <Col>
                    <AddNew id={id} onRefetch={onRefetch} />
                </Col>
                <Col>
                    <Divider type="vertical" />
                    <DeleteAll id={id} onRefetch={onRefetch} />
                </Col>
            </Row>
            <Table
                size="small"
                pagination={{
                    size: 'default',
                    hideOnSinglePage: true,
                    showSizeChanger: true,
                }}
                bordered
                columns={columns}
                dataSource={records?.map((pro, idx) => ({
                    ...pro,
                    key: idx + 1,
                }))}
                locale={{ emptyText: 'No Data' }}
            />
        </div>
    );
};

export default Index;
