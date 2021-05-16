import React from 'react';
import { Upload, Button, Tooltip } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useReadExcel } from './useReadExcel';

const Index: React.FC<{ onFinish: (file: any) => void }> = ({ onFinish }) => {
    const { loading, be4Upload, customUpload } = useReadExcel({ onFinish });

    return (
        <div style={{ marginBottom: 10, marginLeft: 5 }}>
            <Upload beforeUpload={be4Upload} showUploadList={false} customRequest={customUpload}>
                <Tooltip title="Add new user by upload Excel">
                    <Button
                        loading={loading}
                        icon={<UploadOutlined />}
                        size="middle"
                        style={{
                            backgroundColor: '#52c41a',
                            border: '#52c41a',
                            color: '#ffff',
                        }}
                    >
                        Excel
                    </Button>
                </Tooltip>
            </Upload>
        </div>
    );
};

export default Index;
