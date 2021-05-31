import React from 'react';
import { Avatar } from 'antd';
import { CarOutlined } from '@ant-design/icons';
import { s3Url } from 'env';
import Currency from 'components/Currency';
import VehicleEdit from './components/VehicleEdit';
import VehicleDelete from './components/VehicleDelete';

export default function useColumn({ getVehicle }: { getVehicle: () => void }): { column: any[] } {
    function currencys(value: number, rec: any) {
        return <Currency value={value || 0} type={rec?.currencyCode || 'KHR'} />;
    }

    function vehicleIcon(url: string) {
        return <Avatar src={url ? `${s3Url}${url}` : ''} icon={<CarOutlined />} />;
    }

    function act(id: string, dataObj: any) {
        return (
            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <VehicleEdit getVehicle={getVehicle} dataObj={dataObj} />
                <VehicleDelete getVehicle={getVehicle} id={id} />
            </div>
        );
    }

    const column = [
        { title: '#', dataIndex: 'key', className: 'center' },
        { title: 'Vehicle', dataIndex: 'name', width: 200 },
        {
            title: 'Icon',
            dataIndex: ['attributes', 'icon'],
            render: vehicleIcon,
        },
        {
            title: 'Image',
            dataIndex: ['attributes', 'image'],
            render: vehicleIcon,
        },
        {
            title: 'Map',
            dataIndex: ['attributes', 'mapIcon'],
            render: vehicleIcon,
        },
        {
            title: 'Busy Icon',
            dataIndex: ['attributes', 'busyMapIcon'],
            render: vehicleIcon,
        },
        { title: 'Total Seat', dataIndex: ['attributes', 'totalSeat'] },
        { title: 'Order No', dataIndex: ['attributes', 'orderNo'] },
        {
            title: 'Minimum Fare',
            dataIndex: 'minimumFare',
            className: 'right',
            render: currencys,
        },
        {
            title: 'Cost/Km',
            dataIndex: 'costPerKm',
            className: 'right',
            render: currencys,
        },
        {
            title: 'Cost/Mn',
            dataIndex: 'costPerMinute',
            className: 'right',
            render: currencys,
        },
        {
            title: 'Cost',
            dataIndex: 'cost',
            className: 'right',
            render: currencys,
        },
        {
            title: 'Action',
            dataIndex: 'id',
            fixed: 'right',
            className: 'center',
            render: act,
        },
    ];
    return { column };
}
