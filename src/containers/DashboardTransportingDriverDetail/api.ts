import { useMutation, useQuery } from '@apollo/client';
import { serviceOrder } from 'env';
import { useEffect, useState } from 'react';
import { useAxios, AxiosProps } from 'util/useAxios';
import { CANCEL_TRIP, FINISH_TRIP, GET_CANCEL_REASON, GET_ORDER_DETAIL } from './gql';
import { Data } from './interface';

export function useGetlist(id: string): { getOrder: Data; loading: boolean; vehicleIcon: string | null } {
    const [vehicleIcon, setVehicleIcon] = useState<string | null>(null);

    const { loading, data } = useQuery(GET_ORDER_DETAIL, {
        client: serviceOrder,
        variables: { id },
    });
    const { getOrder } = data || {};

    useEffect(() => {
        if (getOrder) {
            getVehicle(getOrder?.vehicleTypeId);
        }
    }, [getOrder]);

    async function getVehicle(vehicleTypeId: string) {
        const { instance } = useAxios();
        const config: AxiosProps = { url: '/vehicle' };
        const { result }: { result: any[] } = await instance({ config });
        if (result) {
            const preIcon = result?.find((item: any) => item.id === vehicleTypeId)?.attributes?.mapIcon || null;
            setVehicleIcon(preIcon);
        }
    }

    return { getOrder, loading, vehicleIcon };
}

export function useGetOrderReasonList(): { results: any[] } {
    const { data } = useQuery(GET_CANCEL_REASON, {
        client: serviceOrder,
        variables: { filter: { status: ['ACTIVE'], type: ['DRIVER_TYPE'] } },
    });

    const { getOrderReasonList } = data || {};
    const { results } = getOrderReasonList || {};

    return { results };
}

export function useCancelTrip(): { cancelTripBySystem: (val: any) => void; data: any; loading: boolean } {
    // CANCEL TRIP
    const [cancelTripBySystem, { data, loading }] = useMutation(CANCEL_TRIP, {
        client: serviceOrder,
        onError: () => null,
    });
    return { cancelTripBySystem, data, loading };
}

export function useFinishTrip(): { finishTripBySystem: (val: any) => void; data: any; loading: boolean } {
    // CANCEL TRIP
    const [finishTripBySystem, { data, loading }] = useMutation(FINISH_TRIP, {
        client: serviceOrder,
        onError: () => null,
    });
    return { finishTripBySystem, data, loading };
}
