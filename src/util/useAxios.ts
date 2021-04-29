/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { Method } from 'axios';
import { message } from 'antd';
import { serviceAuthenticate, authKey } from 'env';

export interface AxiosProps {
    baseURL?: string;
    url: string;
    method?: Method;
    params?: unknown | undefined;
    data?: unknown | undefined;
}
export interface Instance {
    /** 
     - axios config more detail https://www.npmjs.com/package/axios#axios-api 
     - default​ method 'GET'
     - default​ baseUrl 'serviceAuthenticate'
    */
    config: AxiosProps;
    /** loading message Ex: 'Deleting ...' */
    loadingMsg?: string;
    /** success message Ex: 'Add new successfully' */
    successMsg?: string;
    /** method before request */
    onBefore?: () => void;
    /** method after response success */
    onSuccess?: () => void;
    /** method after response error */
    onError?: () => void;
}

export const useAxios = (): {
    instance: ({ config, loadingMsg, successMsg, onBefore, onSuccess, onError }: Instance) => any;
} => {
    async function instance({
        config: { baseURL = serviceAuthenticate, url, method = 'GET', params, data },
        loadingMsg,
        successMsg,
        onBefore,
        onSuccess,
        onError,
    }: Instance) {
        try {
            // method before request
            if (onBefore) {
                onBefore();
            }

            // Loading MSG
            if (loadingMsg) {
                message.loading(loadingMsg);
            }
            // API
            const { data: result } = await axios({
                baseURL,
                url,
                method,
                params,
                data,
                headers: { 'Content-Type': 'application/json', 'X-API-AUTH-KEY': authKey },
            });
            // Destroy when success Loading MSG
            if (loadingMsg) {
                message.destroy();
            }

            if (result) {
                // method after response success
                if (onSuccess) {
                    onSuccess();
                }

                // Alert message after response success
                if (successMsg) {
                    message.success(successMsg);
                }
                return { result };
            }
        } catch (error) {
            // Destroy when error Loading MSG
            if (loadingMsg) {
                message.destroy();
            }
            if (onError) {
                onError();
            }
            return {};
        }
    }
    return { instance };
};
