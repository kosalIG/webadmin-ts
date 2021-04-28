import React from 'react';
import { Row, Button, Space } from 'antd';
const Index: React.FC = () => {
    return (
        <div style={{ marginBottom: 10 }}>
            <Row justify="space-between">
                <div>
                    <Button>Back</Button>
                </div>
                <Space>
                    <Button type="primary">Verify</Button>
                    <Button
                        style={{
                            backgroundColor: '#52c41a',
                            border: '#52c41a',
                        }}
                        type="primary"
                    >
                        Withdraw
                    </Button>
                </Space>
            </Row>
        </div>
    );
};

export default Index;
