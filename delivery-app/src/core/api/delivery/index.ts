// getDeliveryList from mock

import {DeliveryCardResponse, DeliveryListResponse} from "./typing.ts";
import {sendRequest} from "../index.ts";

export const getDeliveryList = async (priceStart?: number, priceEnd?: number) => {
    // запрос на получение списка доставок
    try {
        const params: {[key: string]: any} = {};

        if (priceStart) {
            params.price_from = priceStart;
        }

        if (priceEnd) {
            params.price_to = priceEnd;
        }

        const response: DeliveryListResponse = await sendRequest({
            method: "GET",
            path: "/delivery",
            params: Object.keys(params).length > 0 ? params : undefined,
        });
        return response;


    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
}

export const getDelivery = async (id : string) => {
    try{
        const response : DeliveryCardResponse = await sendRequest({
            method : "GET",
            path: `/delivery/${id}`,
        });
        return response
    }
    catch (error){
        console.error("Error", error);
        throw error;
    }
}