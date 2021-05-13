import React from 'react';
import Star from 'components/Star';
import styled from 'styled-components';
import { View } from 'components/ActionIcons';

const Div = styled.div`
    display: flex;
    justify-content: center;
`;
function useColum(): { columns: any[] } {
    const columns = [
        { title: '#', dataIndex: 'idx', className: 'center' },

        {
            title: 'Driver ID',
            dataIndex: ['driver', 'myID'],
            render: (item: string) => item || '--',
        },
        {
            title: 'Driver Name',
            dataIndex: ['driver', 'fullName'],
            render: (item: string) => item || '--',
        },
        {
            title: 'Mobile Number',
            dataIndex: ['driver', 'mobileNumber'],
            render: (item: string) => item || '--',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            render: (item: string) => item || '--',
        },
        {
            title: 'Rating',
            dataIndex: 'rating',
            render: function rating(item: number) {
                return <Star value={item} />;
            },
        },
        {
            title: 'Action',
            dataIndex: 'driverID',
            className: 'center',
            render: function action(id: string, rec: any) {
                return (
                    <Div>
                        <View
                            to={{
                                pathname: `/rating/${id}`,
                                state: {
                                    fullName: rec?.driver?.fullName,
                                    myID: rec?.driver?.myID,
                                    mobileNumber: rec?.driver?.mobileNumber,
                                },
                            }}
                        />
                    </Div>
                );
            },
        },
    ];
    return { columns };
}
export default useColum;
