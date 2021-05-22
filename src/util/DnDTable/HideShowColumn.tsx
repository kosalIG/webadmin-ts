import React, { useEffect, useState } from 'react';
import { Button, Checkbox, Col, Row, Modal } from 'antd';
import styled from 'styled-components';

const Rows = styled(Row)`
    margin: 15px 0px;
    justify-content: space-between;
`;

interface HideShowColumnProps {
    groupColumn: GroupColumn[];
    columns: any[];
    handleHideShow: (col: any[]) => void;
}

interface GroupColumn {
    groupTitle: string;
    group: Group[];
}

interface Group {
    dataIndex: string;
    title: string;
}

const HideShowColumn: React.FC<HideShowColumnProps> = ({ groupColumn, columns, handleHideShow }) => {
    const [hideColumn, setHideColumn] = useState<string[]>([]);
    const [visible, setVisible] = useState(false);
    function onShow() {
        setVisible(true);
    }

    function onCancel() {
        setVisible(false);
    }

    function onChangeColumn(e: string[]): void {
        setHideColumn(e);
        handleHideShow(e);
    }
    useEffect(() => {
        if (visible) {
            setHideColumn(columns?.map((item) => item.id));
        }
    }, [visible]);

    return (
        <div>
            <Button onClick={onShow} type="primary">
                Columns
            </Button>
            <Modal visible={visible} onCancel={onCancel} footer={null} title="All Fields">
                <Checkbox.Group value={hideColumn} onChange={(e: any[]) => onChangeColumn(e)} style={{ width: '100%' }}>
                    {groupColumn?.map((item: GroupColumn, idx: number) => {
                        const { groupTitle, group = [] } = item;
                        return (
                            <Rows style={{ marginTop: 5 }} gutter={[6, 6]} key={idx + 1}>
                                <Col md={24}>
                                    <strong>{groupTitle}</strong>
                                </Col>
                                {group.map((gItem: Group, gIdx) => (
                                    <Col key={gIdx + 1} md={12}>
                                        <Checkbox value={gItem.dataIndex}>{gItem.title}</Checkbox>
                                    </Col>
                                ))}
                            </Rows>
                        );
                    })}
                </Checkbox.Group>
            </Modal>
        </div>
    );
};

export default HideShowColumn;
