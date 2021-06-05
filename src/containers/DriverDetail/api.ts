import { useState, useEffect } from 'react';
import { useAxios, AxiosProps } from 'util/useAxios';
import { gql, useMutation, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { serviceWallet, serviceOrder } from 'env';
import { DriverData, UseGetDriverDetail, RequestWithDrawProps, UpdateDriver } from './interface';
import { message } from 'antd';

// APPROVE_REFERRAL
const APPROVE_REFERRAL = gql`
    mutation ApproveReferral($userId: String!, $createdBy: String!) {
        approveReferral(userId: $userId, createdBy: $createdBy)
    }
`;

// WITHDRAW
const REQUEST_WITHDRAW = gql`
    mutation RequestWithdrawByAdmin($input: RequestWithdrawAdminInput!) {
        requestWithdrawByAdmin(input: $input) {
            id
            amount
        }
    }
`;

// Get Balance
const GET_BALANCE = gql`
    query GetBalance($id: String!) {
        getBalance(filter: { driverID: $id }) {
            totalBalance
        }
    }
`;

// Get Online
const GET_ONLINE = gql`
    query($id: String!) {
        getStatus(id: $id)
    }
`;

// Get Trip history
export const TRIP_HISTORY = gql`
    query GetPaymentTransactionHistories($driverID: String!, $limit: Int!, $offset: Int!) {
        getPaymentTransactionHistories(filter: { driverID: $driverID, limit: $limit, offset: $offset }) {
            data {
                id
                driverID
                receiptNo
                transactionType
                order {
                    orderDetail {
                        pickupAt
                        dropoffAt
                    }
                }
                customer {
                    fullName
                    mobileNumber
                }
                totalDistance
                totalDuration
                discountAmount
                totalAmount
            }
            metadata {
                total
                limit
                offset
            }
        }
    }
`;

// ========================================================================= API
const { instance } = useAxios();

export function useGetDriverDetail(): UseGetDriverDetail {
    const [loading, setLoading] = useState(false);
    const [verifyLoading, setverifyLoading] = useState(false);

    const [driverDetail, setDriverDetail] = useState<DriverData | null>(null);
    const { id } = useParams<{ id: string }>() || {};

    // GET VEHICLE
    const { getVehicleType, data: vehicleRecords } = usegetVehicleType();

    // GET VEHICLE MODEL
    const { getVehicleModel, modelRecords } = useGetVehicleModel();

    // GET COLOR
    const { getColor, colorRecords } = useGetColor();

    useEffect(() => {
        getDriverDetail(id);
        getVehicleType();
        getColor();
    }, []);

    async function getDriverDetail(id: string) {
        setLoading(true);
        const config = { url: '/user/' + id };
        const { result } = await instance({ config });
        if (result) {
            setDriverDetail(result);
        }
        setLoading(false);
    }

    // Verify
    const [approveReferral] = useMutation(APPROVE_REFERRAL, { onError: () => null });
    async function verifyDriver() {
        setverifyLoading(true);
        const config: AxiosProps = { url: '/user/verifyDriverLicense/' + id, method: 'POST' };
        const { result } = await instance({ config, loadingMsg: 'loading ...', successMsg: 'verify successfully' });
        if (result) {
            getDriverDetail(id);
            approveReferral({ variables: { userId: id, createdBy: '123' } });
        }
        setverifyLoading(false);
    }

    // Get driver balance
    const { data: balance, refetch } = useQuery(GET_BALANCE, {
        variables: { id },
    });
    const { totalBalance } = balance?.getBalance || {};

    // Get driver online
    const { data: online } = useQuery(GET_ONLINE, {
        variables: { id },
        client: serviceOrder,
    });

    const { getStatus: OnlineDriver } = online || {};

    // Request to withdraw
    const [requestWithdrawByAdmin, { data, loading: withDrawLoading }] = useMutation(REQUEST_WITHDRAW, {
        onError: () => null,
        client: serviceWallet,
    });

    function onWithDraw(val: any) {
        requestWithdrawByAdmin({ variables: { input: { userId: id, ...val } } });
    }

    useEffect(() => {
        if (data) {
            message.success('Requested to withdraw successfully');
            refetch({ id });
        }
    }, [data]);
    const requestWithDraw: RequestWithDrawProps = { withDrawLoading, data, onWithDraw };

    // Update driver
    const { onUpdateDriver, loading: updateLoading, data: updateData } = useUpdateDriver(() => getDriverDetail(id), id);
    const updateDriver: UpdateDriver = { onUpdateDriver, updateLoading, updateData, vehicleRecords, colorRecords };

    // Return
    return {
        driverDetail,
        loading,
        verifyLoading,
        requestWithDraw,
        totalBalance,
        OnlineDriver,
        updateDriver,
        vehicleRecords,
        vehicleModel: { modelRecords, getVehicleModel },
        verifyDriver,
    };
}

// Update driver
function useUpdateDriver(
    callback: () => Promise<any>,
    id: string,
): { onUpdateDriver: (data: any) => void; loading: boolean; data: any } {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);

    async function onUpdateDriver(data: any) {
        setLoading(true);
        const config: AxiosProps = { url: '/user/updateUser', method: 'POST', data: { id, ...data } };
        const { result } = await instance({
            config,
            loadingMsg: 'updating ...',
            successMsg: 'update successfully',
        });
        if (result) {
            setData(result);
            await callback();
        }
        setLoading(false);
    }
    return { onUpdateDriver, loading, data };
}

function usegetVehicleType(): { getVehicleType: () => void; data: any } {
    const [data, setData] = useState(null);

    async function getVehicleType() {
        const config: AxiosProps = { url: '/vehicle' };
        const { result } = await instance({
            config,
            loadingMsg: 'Vehicle Fetching ...',
        });
        if (result) {
            setData(result?.map((item: any) => ({ id: item.id, name: item.name })));
        }
    }
    return { getVehicleType, data };
}

function useGetVehicleModel() {
    const [modelRecords, setModelRecords] = useState([]);

    async function getVehicleModel(id: string) {
        const config: AxiosProps = { url: `/vehicle-model/${id}` };
        const { result } = await instance({
            config,
            loadingMsg: 'Vehicle model fetching ...',
        });
        if (result) setModelRecords(result);
    }

    return { getVehicleModel, modelRecords };
}

function useGetColor() {
    const [colorRecords, setcolorRecords] = useState([]);

    async function getColor() {
        const config: AxiosProps = { url: '/color' };
        const { result } = await instance({
            config,
            loadingMsg: 'Color fetching ...',
        });
        if (result) setcolorRecords(result);
    }

    return { getColor, colorRecords };
}
