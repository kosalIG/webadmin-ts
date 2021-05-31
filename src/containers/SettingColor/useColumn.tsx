import React from 'react';
import styled from 'styled-components';
import Status from 'components/Status';
import Edit from './components/Edit';
import Delete from './components/Delete';

const ColorCode = styled.div`
    padding: 2px;
    border-radius: 2px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 0px 1px;
    display: inline-block;
    margin-right: 10px;
`;

const Div = styled.div<{ background: string }>`
    width: 15px;
    height: 15px;
    border-radius: 2px;
    background: ${(props) => props.background};
`;

export default function useColumns({ getList }: { getList: () => void }): { columns: any[] } {
    function colorCode(item: string) {
        return (
            <div>
                <ColorCode>
                    <Div background={item} />
                </ColorCode>
                {item}
            </div>
        );
    }

    function status(item: any) {
        return <Status status={item} />;
    }

    function act(id: string, dataObj: any) {
        return (
            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <Edit getList={getList} dataObj={dataObj} />
                <Delete getList={getList} id={id} />
            </div>
        );
    }
    const columns = [
        { title: '#', dataIndex: 'idx', className: 'center' },
        { title: 'Name', dataIndex: 'name' },
        {
            title: 'Color code',
            dataIndex: ['morevalue', 'colorCode'],
            render: colorCode,
        },
        { title: 'OrderNo', dataIndex: ['morevalue', 'orderNo'] },
        {
            title: 'Status',
            dataIndex: ['morevalue', 'status'],
            render: status,
        },
        {
            title: 'Description',
            dataIndex: ['morevalue', 'description'],
        },
        {
            title: 'Action',
            dataIndex: 'id',
            width: 100,
            className: 'center',
            render: act,
        },
    ];
    return { columns };
}
