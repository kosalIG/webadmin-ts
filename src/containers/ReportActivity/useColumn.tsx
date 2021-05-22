export default function useColumn(): { column: any[] } {
    const column = [
        { title: '#', dataIndex: 'idx', className: 'center' },
        {
            title: 'Group',
            dataIndex: ['driver', 'group'],
            render: (item: string) => item || '...',
        },
        {
            title: 'Full Name',
            dataIndex: ['driver', 'fullName'],
            render: (item: string) => item || '...',
        },
        {
            title: 'Mobile',
            dataIndex: ['driver', 'mobileNumber'],
            render: (item: string) => item || '...',
        },
        {
            title: 'Total Point',
            dataIndex: 'total',
            className: 'center',
            render: (item: any) => Math.round(item || 0),
        },
    ];
    return { column };
}
