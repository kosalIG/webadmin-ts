import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { Row, Col, Form, DatePicker } from 'antd';

const { Item } = Form;

const Contain = styled.div``;

const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
};

const Index: React.FC<{ qString: any; handleDate: (e: any) => void }> = ({ qString, handleDate }) => {
    const { filter } = qString || {};
    const { startDate, endDate } = filter || {};

    return (
        <Contain>
            <Row gutter={[6, 0]} justify="start">
                {/* SECTION 1 ==================== */}
                <Col>
                    <Row gutter={[8, 0]}>
                        <Col lg={12}>
                            <Item {...layout} label="Start At">
                                <DatePicker
                                    value={startDate ? moment(startDate) : undefined}
                                    onChange={(e) => handleDate({ startDate: e?.toISOString() })}
                                    showTime
                                />
                            </Item>
                        </Col>
                        <Col lg={12}>
                            <Item {...layout} label="End At">
                                <DatePicker
                                    onChange={(e) => handleDate({ endDate: e?.toISOString() })}
                                    value={endDate ? moment(endDate) : undefined}
                                    showTime
                                />
                            </Item>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Contain>
    );
};

export default Index;
