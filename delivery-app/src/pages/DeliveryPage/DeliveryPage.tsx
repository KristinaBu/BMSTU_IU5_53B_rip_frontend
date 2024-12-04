import { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { IPlanet } from "../../core/api/planets/typing";
import { ChangeEvent } from "../../App.typing.tsx";
import {getDeliveryList} from "../../core/api/delivery";
import {Delivery} from "../../core/api/delivery/typing.ts";
import {DeliveryListMock} from "../../modules/mocks.ts";

export interface DeliveryCardProps {}

export const useDeliveryPage = () => {
    // это states и функции для их изменения
    const [DeliveryList, setDeliveryList] = useState<Delivery[]>([]);
    // строка для поиска по цене
    const [priceStart, setPriceStart] = useState("");
    const [priceEnd, setPriceEnd] = useState("");

    // event handlers

    const handlePriceStartChange = (e: ChangeEvent) => {
        setPriceStart(e.target.value);
    }

    const handlePriceEndChange = (e: ChangeEvent) => {
        setPriceEnd(e.target.value);
    }

    // поиск доставки по цене - при нажатии на кнопку поиска
    const handleSearchDeliveryClick = () => {
        getDeliveryList(Number(priceStart), Number(priceEnd))
            .then((data) => {
                setDeliveryList(data.payload);
            })
            .catch(() => {
                const filteredDeliveries = DeliveryList.filter((delivery) =>
                    delivery.price >= Number(priceStart) && delivery.price <= Number(priceEnd)
                );
                setDeliveryList(filteredDeliveries);
            });
    };


    useEffect(() => {

        getDeliveryList()
            .then((data) => {
                setDeliveryList(data.payload);

            })
            .catch(() => {
                setDeliveryList(DeliveryListMock);
            });

    }, []);
    return {
        DeliveryList,
        handleSearchDeliveryClick,
        handlePriceStartChange,
        handlePriceEndChange,
    };
};