import React from 'react';
import moment from 'moment';
import { Modal, Form, Select, Input, DatePicker, ModalProps } from 'antd';

const { TextArea } = Input;

const { Option } = Select;

const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 19 },
};

const layoutDate = {
    labelCol: { span: 5 },
    wrapperCol: { span: 19 },
};

interface FormUIProps extends ModalProps {
    form: any;
    isEdit?: boolean;
    onFinish: (val: any) => void;
}

const FormUI: React.FC<FormUIProps> = ({ form, title, onFinish, ...props }) => {
    function onStatuChange(val) {
        if (val === 'DISABLED') {
            form.resetFields(['startedAt', 'endedAt']);
        }
    }

    return (
        <Modal title={`${title} - Admin Config`} {...props}>
            <Form {...layout} form={form} onFinish={onFinish} initialValues={{ type: '', status: '' }}>
                <Form.Item label="Type" name="type" rules={[{ required: true }]}>
                    <Select getPopupContainer={(trigger) => trigger.parentNode}>
                        <Option value="">-- Select type--</Option>
                        <Option value="RIDER_RIDER">RIDER_RIDER</Option>
                        <Option value="DRIVER_DRIVER">DRIVER_DRIVER</Option>
                        <Option value="RIDER_LOCATION">RIDER_LOCATION</Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Status" name="status" rules={[{ required: true }]}>
                    <Select getPopupContainer={(trigger) => trigger.parentNode} onSelect={onStatuChange}>
                        <Option value="">-- Select Status--</Option>
                        <Option value="ENABLED">Enable</Option>
                        <Option value="DISABLED">Disable</Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Started At" name="startedAt" {...layoutDate}>
                    <DatePicker showTime style={{ width: `100%` }} />
                </Form.Item>
                <Form.Item
                    label="Ended At"
                    name="endedAt"
                    dependencies={['startedAt']}
                    rules={[
                        ({ getFieldValue }) => ({
                            validator(_, val) {
                                if (!getFieldValue('startedAt') && !val) return Promise.resolve();
                                if (!getFieldValue('startedAt') || !val) return Promise.reject();

                                const start = getFieldValue('startedAt').format('YYYY-MM-DD HH:mm:ss');
                                const end = val.format('YYYY-MM-DD HH:mm:ss');
                                const err = 'Ended At must bigger than Started At';

                                if (moment(start).isAfter(end, 'seconds')) {
                                    return Promise.reject(err);
                                }

                                if (moment(start).isSame(end, 'seconds')) {
                                    return Promise.reject(err);
                                }

                                return Promise.resolve();
                            },
                        }),
                    ]}
                    {...layoutDate}
                >
                    <DatePicker showTime style={{ width: `100%` }} />
                </Form.Item>
                <Form.Item label="Description" name="description">
                    <TextArea placeholder="Description" rows={3} />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default FormUI;
