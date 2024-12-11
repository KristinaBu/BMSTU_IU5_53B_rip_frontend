import { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { IPlanet } from "../../core/api/planets/typing";
import { ChangeEvent } from "../../App.typing.tsx";
import {getDeliveryList} from "../../core/api/delivery";
import {Delivery} from "../../core/api/delivery/typing.ts";
import {DeliveryListMock} from "../../modules/mocks.ts";
import {useSelector, useDispatch} from "../../core/store";
import {selectApp} from "../../core/store/slices/selector.ts";
import {savePriceFrom, savePriceTo} from "../../core/store/slices/appSlice.ts";

export interface DeliveryCardProps {}

export const useDeliveryPage = () => {
    // это states и функции для их изменения
    const [DeliveryList, setDeliveryList] = useState<Delivery[]>([]);

    // для поиска по цене
    const { price_from: priceStart, price_to: priceEnd } = useSelector(selectApp);
    //const [priceEnd, setPriceEnd] = useState("");
    // dispatch для изменения состояния
    const dispatch = useDispatch();



    const handlePriceStartChange = (e: ChangeEvent) => {

        dispatch(savePriceFrom(e.target.value));
    }

    const handlePriceEndChange = (e: ChangeEvent) => {
        dispatch(savePriceTo(e.target.value));
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
        priceStart,
        priceEnd,
    };
};