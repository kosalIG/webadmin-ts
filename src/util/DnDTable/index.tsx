import React, { useEffect, useState } from 'react';
import { Table, TableProps, Col, Row } from 'antd';
import ReactDragListView from 'react-drag-listview';
import ResizeColumn from './ResizeColumn';
import styled from 'styled-components';
import HideShowColumn from './HideShowColumn';
const DragIcon = styled.div`
    cursor: pointer;
`;

interface DnDProps extends TableProps<any> {
    name: string;
    groupColumn?: any[];
}
const index: React.FC<DnDProps> = ({ columns, groupColumn, name, children, ...props }) => {
    const [timeOut, settimeout] = useState<any>(null);
    const [cols, setCols] = useState<any>(
        columns?.map((item) => ({
            ...item,
            ellipsis: {
                showTitle: false,
            },
            title: <DragIcon title="Drag able">{item.title}</DragIcon>,
        })),
    );
    const components = {
        header: {
            cell: ResizeColumn,
        },
    };

    const handleResize = (index: number) => (e: any, { size }) => {
        const nextColumns = [...cols];
        nextColumns[index] = {
            ...nextColumns[index],
            width: size.width,
        };
        setCols(nextColumns);
        return { columns: nextColumns };
    };

    const resizeColumn = cols.map((col: any, index: number) => ({
        ...col,
        onHeaderCell: (colum: any) => ({
            width: colum.width,
            onResize: handleResize(index),
        }),
    }));

    const dragProps = {
        onDragEnd(fromIndex: any, toIndex: any) {
            const columns = [...cols];
            const item = columns.splice(fromIndex, 1)[0];
            columns.splice(toIndex, 0, item);
            setCols(columns);
        },
        nodeSelector: 'th',
        handleSelector: 'div',
    };

    useEffect(() => {
        const localColumn = localStorage.getItem(`${name}_Columns`);
        if (localColumn) {
            const jsonColumn = JSON.parse(localColumn);
            const newCols = jsonColumn.map((lCol: any) => {
                const { title, render } =
                    columns?.find((sCol: any) => sCol.dataIndex.toString() === lCol.dataIndex.toString()) || {};
                return { ...lCol, title: <DragIcon title="Drag able">{title}</DragIcon>, render };
            });

            // Remember column when enter CP
            setCols(newCols);
        }
    }, []);

    // COMPONENT WILLUNMOUNT
    useEffect(
        () =>
            // store column(width and drag and drop ) when leave CP
            () => {
                clearTimeout(timeOut);
                settimeout(
                    setTimeout(() => {
                        const c = cols.map((rec: any) => {
                            // eslint-disable-next-line @typescript-eslint/no-unused-vars
                            const { title, ...newRec } = rec || {};
                            return { ...newRec };
                        });
                        localStorage.setItem(`${name}_Columns`, JSON.stringify(c));
                    }, 800),
                );
            },
        [cols],
    );

    function handleHideShow(hColumn: any[]) {
        const col = columns?.filter((item: any) => {
            if (hColumn.includes(item.id)) {
                return { ...item };
            }
            return null;
        });
        localStorage.setItem(`${name}_Columns`, JSON.stringify(col));
        // Set column
        setCols(col);
    }
    return (
        <ReactDragListView.DragColumn {...dragProps}>
            <Row justify="space-between" style={{ marginBottom: 10 }}>
                <Col>{children}</Col>
                <Col>
                    <HideShowColumn groupColumn={groupColumn || []} columns={cols} handleHideShow={handleHideShow} />
                </Col>
            </Row>
            <Table {...props} components={components} columns={resizeColumn} />
        </ReactDragListView.DragColumn>
    );
};

export default index;
