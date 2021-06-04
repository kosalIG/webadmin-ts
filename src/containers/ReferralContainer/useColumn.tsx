import React from 'react';
import { View } from 'components/ActionIcons';
export function useColumn(referenceType: string): { column: any[] } {
    const column = [
        {
            width: 80,
            className: 'center',
            title: '#',
            dataIndex: 'idx',
        },
        {
            width: 200,
            title: 'First Name',
            dataIndex: ['receiverInfo', 'firstName'],
            render: (item: string) => item || '---',
        },
        {
            width: 200,
            title: 'Last Name',
            dataIndex: ['receiverInfo', 'lastName'],
            render: (item: string) => item || '---',
        },
        {
            width: 200,
            title: 'Mobile Number',
            dataIndex: ['receiverInfo', 'mobileNumber'],
            render: (item: string) => item || '---',
        },
        {
            width: 200,
            title: 'Email',
            dataIndex: ['receiverInfo', 'email'],
            render: (item: string) => item || '---',
        },
        {
            width: 200,
            title: 'Referral Code',
            dataIndex: ['receiverInfo', 'referralCode'],
            render: (item: string) => item || '---',
        },
        {
            width: 150,
            title: 'Total Scanner',
            dataIndex: 'TotalScanner',
            render: (item: string) => item || '---',
        },
        {
            width: 100,
            className: 'center',
            title: 'Action',
            dataIndex: 'receiverId',
            // eslint-disable-next-line react/display-name
            render: (id: string, obj: any) => (
                <View
                    to={{
                        pathname: `/referral/${id}/${referenceType}`,
                        state: { ...obj?.receiverInfo },
                    }}
                />
            ),
        },
    ];
    return { column };
}
