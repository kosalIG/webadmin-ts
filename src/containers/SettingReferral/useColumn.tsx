import React from 'react';
import { Tag } from 'antd';
import Status from 'components/Status';
import Currency from 'components/Currency';
import Edit from './components/EditReferral';

export default function useColumns({ refetch }: { refetch: () => void }): { columns: any[] } {
    const promotion = { WALLET: 'blue', PROMOTION: 'geekblue' };
    const userType = { VENDOR: 'blue', USER: 'geekblue' };
    function currencys(value: number, rec: any) {
        return <Currency value={value || 0} type={rec?.currencyCode || 'KHR'} />;
    }
    function status(item: any) {
        return <Status status={item} />;
    }
    function refTag(item: any, obj: any) {
        return <Tag color={obj[item]}>{item}</Tag>;
    }

    function act(_, dataObj: any) {
        return (
            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <Edit dataObj={dataObj} refetch={refetch} />
            </div>
        );
    }

    const columns = [
        { title: '#', dataIndex: 'key', className: 'center' },
        {
            title: 'Reference',
            dataIndex: ['promotion', 'title'],
            render: (refId: string) => refId || '---',
        },
        {
            title: 'Reference value',
            dataIndex: 'referenceValue',
            render: currencys,
        },
        {
            title: 'Reference type',
            dataIndex: 'referenceType',
            render: (item: string) => refTag(item, promotion),
        },
        {
            title: 'User type',
            dataIndex: 'userType',
            render: (item: string) => refTag(item, userType),
        },
        {
            title: 'Status',
            dataIndex: 'status',
            render: status,
        },
        {
            title: 'Action',
            dataIndex: 'id',
            width: 100,
            className: 'center',
            fixed: 'right',
            render: act,
        },
    ];
    return { columns };
}
