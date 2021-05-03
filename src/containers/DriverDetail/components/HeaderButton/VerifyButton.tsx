import React from 'react';
import { Popconfirm, Button } from 'antd';
import { CheckOutlined } from '@ant-design/icons';

const VerifyButton: React.FC<{ verify: number | undefined; loading: boolean; onVerify: () => void }> = ({
    verify,
    loading,
    onVerify,
}) => {
    return (
        <div>
            <Popconfirm
                disabled={Boolean(verify)}
                placement="bottomRight"
                okText="Confirm"
                title=" Do you want to verify this driver ?"
                onConfirm={() => onVerify()}
            >
                <Button
                    loading={loading}
                    disabled={Boolean(verify)}
                    size="middle"
                    type="primary"
                    icon={<CheckOutlined />}
                >
                    Verify
                </Button>
            </Popconfirm>
        </div>
    );
};

export default VerifyButton;
