import React, { useEffect } from 'react';
import { message, Popconfirm, Tag } from 'antd';
import { IconCheck, IconClose } from './style';
import { useExpandCouponStatus } from 'containers/PromotionCoupon/api';

export function useCouponColumn({ onRefetch }: { onRefetch: (val?: any) => void }): { columns: any[] } {
    const { updatePromotionCouponStatus, data } = useExpandCouponStatus();
    useEffect(() => {
        if (data) {
            message.destroy();
            onRefetch();
            message.success('Change status successfully');
        }
    }, [data]);

    const onHandle = (id: any) => {
        message.loading('switching...');
        updatePromotionCouponStatus({ variables: { id } });
    };

    function action(id: string, val: any) {
        return (
            <Popconfirm
                okText={val?.status === 'ACTIVE' ? 'Inactive' : 'Active'}
                title={`Are you sure want to ${val.status === 'ACTIVE' ? 'inactive' : 'active'} this coupon code?`}
                onConfirm={() => onHandle(id)}
            >
                {val?.status !== 'ACTIVE' ? <IconCheck /> : <IconClose />}
            </Popconfirm>
        );
    }

    function status(st: string) {
        return <Tag color={st === 'ACTIVE' ? 'success' : 'gold'}>{st}</Tag>;
    }

    const columns = [
        { title: '#', dataIndex: 'key', className: 'center' },
        { title: 'Coupon code', dataIndex: 'coupon' },
        {
            title: 'Status',
            dataIndex: 'status',
            render: status,
        },
        {
            title: 'Action',
            className: 'center',
            dataIndex: 'id',
            render: action,
        },
    ];
    return { columns };
}
