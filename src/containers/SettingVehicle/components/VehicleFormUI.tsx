import React from 'react';
import { Form, Input, Modal, Row, Col, ModalProps } from 'antd';
import Number from 'components/InputNumber';
import Upload from './Upload';
import VehiclePricing from './VehiclePricing';
import { ImgObj } from '../interface';

const { TextArea } = Input;

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const curen = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
};

interface FormUIProps extends ModalProps {
    form?: any;
    imgObj: ImgObj | null;
    onFinish?: (data: any) => void;
    onUploadSuccess: (file: any) => void;
}

const FormUI: React.FC<FormUIProps> = ({ form, imgObj, title, onFinish, onUploadSuccess, ...props }) => {
    return (
        <Modal {...props} width={800} title={`${title} - Vehicle`} maskClosable={false}>
            <Form {...layout} form={form} onFinish={onFinish}>
                <Row gutter={{ xs: 8 }}>
                    <Col md={12} sm={24}>
                        <Form.Item label="Vehicle Name" name="name" rules={[{ required: true }]}>
                            <Input placeholder="Vehicle Name" />
                        </Form.Item>
                    </Col>
                    <Col md={12} sm={24}>
                        <Form.Item label="Total Seats" name="totalSeat" rules={[{ required: true, type: 'number' }]}>
                            <Number placeholder="Total Seats" />
                        </Form.Item>
                    </Col>
                    <Col md={12} sm={24}>
                        <Form.Item label="Order No" name="orderNo" rules={[{ required: true, type: 'number' }]}>
                            <Number placeholder="Order No" />
                        </Form.Item>
                    </Col>
                    <Col md={24} sm={24}>
                        <Form.Item {...curen} label="Description" name="description">
                            <TextArea placeholder="Description" rows={3} />
                        </Form.Item>
                    </Col>
                    <Col md={12} sm={24} span={12}>
                        <Form.Item label="Choose Icon">
                            <Upload
                                file={imgObj?.icon || null}
                                onUploadSuccess={(icon: string) => onUploadSuccess({ icon })}
                            />
                        </Form.Item>
                    </Col>
                    <Col md={12} sm={24} span={12}>
                        <Form.Item label="Choose Image">
                            <Upload
                                file={imgObj?.image || null}
                                onUploadSuccess={(image: string) => onUploadSuccess({ image })}
                            />
                        </Form.Item>
                    </Col>
                    <Col md={12} sm={24} span={12}>
                        <Form.Item label="Choose Map Icon">
                            <Upload
                                file={imgObj?.mapIcon || null}
                                onUploadSuccess={(mapIcon: string) => onUploadSuccess({ mapIcon })}
                            />
                        </Form.Item>
                    </Col>
                    <Col md={12} sm={24} span={12}>
                        <Form.Item label="Choose Busy Icon">
                            <Upload
                                file={imgObj?.busyMapIcon || null}
                                onUploadSuccess={(busyMapIcon: string) => onUploadSuccess({ busyMapIcon })}
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <VehiclePricing />
            </Form>
        </Modal>
    );
};

export default FormUI;
