import React from 'react';
import { Form, InputNumber, Modal, Select, ModalProps } from 'antd';

interface FormUIProps extends ModalProps {
    form: any;
    records: any[];
    referenceType: ReferenceType;
    onFinish?: (data: any) => void;
}

type ReferenceType = 'WALLET' | 'PROMOTION';

const FormUI: React.FC<FormUIProps> = ({ form, records, referenceType, onFinish, ...props }) => {
    return (
        <Modal title="Update - Referral" width={450} {...props}>
            <Form form={form} initialValues={{ status: '' }} layout="vertical" onFinish={onFinish}>
                {referenceType === 'WALLET' && (
                    <Form.Item
                        rules={[{ required: true, type: 'number' }]}
                        label="Reference Value"
                        name="referenceValue"
                    >
                        <InputNumber style={{ width: `100%` }} placeholder="Reference Value" />
                    </Form.Item>
                )}
                {referenceType === 'PROMOTION' && (
                    <Form.Item rules={[{ required: true }]} label="Reference ID" name="referenceId">
                        <Select>
                            <Select.Option value="" disabled>
                                -- Select promotion --
                            </Select.Option>
                            {records?.map((item: any, idx) => (
                                <Select.Option value={item.id} key={idx + 1}>
                                    {item.title}
                                </Select.Option>
                            ))}
                        </Select>
                    </Form.Item>
                )}
                <Form.Item rules={[{ required: true }]} label="Status" name="status">
                    <Select getPopupContainer={(prop) => prop.parentElement}>
                        <Select.Option value="" disabled>
                            -- Select status --
                        </Select.Option>
                        <Select.Option value="ACTIVE">ACTIVE</Select.Option>
                        <Select.Option value="INACTIVE">INACTIVE</Select.Option>
                    </Select>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default FormUI;
