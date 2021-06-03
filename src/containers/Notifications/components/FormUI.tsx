import React, { useEffect, useState } from 'react';
import { Select, Modal, Form, Radio, Input, DatePicker, ModalProps } from 'antd';
import moment from 'moment';
import Upload from 'util/UploadImage';

const { Option } = Select;

const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
};

interface FormUIProps extends ModalProps {
    form: any;
    imgFile?: string;
    title: string;
    isEdit?: boolean;
    mediaTypeData?: MediaType;
    onFinish: (formInput: any) => void;
}

type MediaType = 'PHOTO' | 'VIDEO_URL';

const FormUI: React.FC<FormUIProps> = ({ form, title, imgFile, mediaTypeData, onFinish, ...props }) => {
    const [mediaType, setMediaType] = useState<MediaType>('PHOTO');

    function onSetMediaType(e: MediaType) {
        setMediaType(e);
        form.setFieldsValue({ mediaURL: '' });
    }

    useEffect(() => {
        if (mediaTypeData) {
            setMediaType(mediaTypeData);
        }
    }, [mediaTypeData]);

    return (
        <Modal title={`${title} - Notification`} width={700} {...props}>
            <Form
                {...layout}
                form={form}
                onFinish={onFinish}
                initialValues={{
                    mediaType: 'PHOTO',
                    sentType: 'NONE_SCHEDULE',
                    pushingType: 'NEWS',
                    sendTo: 'ALL',
                    sendStatus: 'DRAFT',
                    sendDeviceType: 'ALL',
                    sendDate: moment(new Date()),
                }}
                scrollToFirstError
            >
                <Form.Item label="Sent Type" name="sentType">
                    <Radio.Group disabled>
                        <Radio value="NONE_SCHEDULE">None schedule</Radio>
                        <Radio value="SCHEDULE">Schedule</Radio>
                        <Radio value="RECURRING_SCHEDULE">Recuring schedule</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item
                    label="Sent To"
                    name="sendTo"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select getPopupContainer={(trigger) => trigger.parentNode}>
                        <Option value="" disabled>
                            --Select--
                        </Option>
                        <Option value="ALL">All</Option>
                        <Option value="ALL_DRIVERS">Drivers</Option>
                        <Option value="ALL_RIDERS">Riders</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    label="Device Type"
                    name="sendDeviceType"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select getPopupContainer={(trigger) => trigger.parentNode}>
                        <Option value="" disabled>
                            --Select--
                        </Option>
                        <Option value="ALL">All</Option>
                        <Option value="IOS">iOS</Option>
                        <Option value="ANDROID">Android</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    label="Send status"
                    name="sendStatus"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select getPopupContainer={(trigger) => trigger.parentNode}>
                        <Option value="" disabled>
                            --Select--
                        </Option>
                        <Option value="DRAFT">DRAFT</Option>
                        <Option value="PENDING">PENDING</Option>
                        <Option value="SENT">SENT</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    label="Title "
                    name="title"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input placeholder="Title" />
                </Form.Item>
                <Form.Item
                    label="Body"
                    name="body"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input.TextArea rows={3} placeholder="Body" />
                </Form.Item>
                <Form.Item
                    label="Description"
                    name="description"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input.TextArea rows={3} placeholder="Description" />
                </Form.Item>
                <Form.Item label="Pushing type" name="pushingType">
                    <Radio.Group>
                        <Radio value="NEWS">News</Radio>
                        <Radio value="NOTIFY">Notify</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item
                    label="Media type"
                    name="mediaType"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Radio.Group onChange={(e) => onSetMediaType(e.target.value)}>
                        <Radio value="PHOTO">Photo</Radio>
                        <Radio value="VIDEO_URL">Video URL</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item
                    name="mediaURL"
                    label="Photo / Medai Url"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    {mediaType === 'PHOTO' ? (
                        <Upload
                            file={imgFile || null}
                            onUploadSuccess={(file: string) => form.setFieldsValue({ mediaURL: file })}
                        />
                    ) : (
                        mediaType === 'VIDEO_URL' && (
                            <Input
                                onChange={(e) => form.setFieldsValue({ mediaURL: e.target.value })}
                                placeholder="Video url"
                            />
                        )
                    )}
                </Form.Item>
                <Form.Item
                    label="Choose Date"
                    name="sendDate"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <DatePicker style={{ width: `50%` }} />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default FormUI;
