import {useRoutes} from "react-router-dom";
import {MainPage} from "./pages/MainPage";
import {DeliveryPage} from "./pages/DeliveryPage";
import {DeliveryDetailsPage} from "./pages/DeliveryDetailsPage";

const routes = [
    {
        path: "/",
        element: <MainPage/>,
    },
    {
        path: "/delivery",
        element: <DeliveryPage/>,
    },
    {
        path: "delivery/:id",
        element: <DeliveryDetailsPage/>,
    }
];

export const MainRouter = () => {
    return useRoutes(routes);
}
