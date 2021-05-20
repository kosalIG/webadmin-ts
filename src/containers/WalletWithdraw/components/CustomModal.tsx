import React from 'react';
import { Modal, ModalProps } from 'antd';
import Currency from 'components/Currency';
import { Row, Col } from 'antd';

interface CustomMdalProps extends ModalProps {
    subTilte?: string;
    amount: number;
    fullName?: string;
}

const CustomModal: React.FC<CustomMdalProps> = ({
    visible,
    title,
    subTilte,
    amount,
    fullName,
    onCancel,
    onOk,
    confirmLoading,
}) => {
    return (
        <Modal
            confirmLoading={confirmLoading}
            width={450}
            title={title}
            visible={visible}
            onCancel={onCancel}
            onOk={onOk}
        >
            <Row gutter={[0, 24]}>
                <div>
                    {`Are you sure want to ${subTilte} the request from `}
                    <strong>{fullName}</strong>?
                </div>
            </Row>
            <Row gutter={[0, 6]} justify="space-between">
                <Col>Amount: </Col>
                <Col>
                    <h2 style={{ color: '#52c41a' }}>
                        <Currency value={amount} type="KHR" />
                    </h2>
                </Col>
            </Row>
        </Modal>
    );
};

export default CustomModal;
