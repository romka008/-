import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import ApiRoutes, {BASE_URL_SUGGESTIONS} from "@api/ApiRoutes";
import {IDataAddress} from "@model/service/Search/IDataAdress";

const TOKEN = "9455b0c435ebea978cfd74e6d7c396e081ff7cad"; // может закончиться

export interface IGetAddressData {
    suggestions: {
        data: IDataAddress;
        unrestricted_value: string;
        value: string;
    }[];
}

export const searchApi = createApi({
    reducerPath: "searchApi",
    tagTypes: [],
    baseQuery: fetchBaseQuery({baseUrl: BASE_URL_SUGGESTIONS}), // указываем базовый URL, если необходимо
    endpoints: builder => ({
        getAddress: builder.mutation<IGetAddressData, {query: string; count?: number}>({
            query: body => {
                return {
                    url: ApiRoutes.suggest.address,
                    method: "post",
                    body,
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                        "Authorization": "Token " + TOKEN
                    }
                };
            }
        })
    })
});

export const {useGetAddressMutation} = searchApi;
