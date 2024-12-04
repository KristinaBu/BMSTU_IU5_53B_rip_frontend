import "./index.css";
import {FC, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Container, Card, Image} from "react-bootstrap";
import {Navbar} from "../../components/Navbar";
import {DeliveryDetailsPageProps} from "./DeliveryDetailsPage.tsx";
import {getDelivery} from "../../core/api/delivery";
import {DeliveryListMock} from "../../modules/mocks.ts";
import {Breadcrumbs} from "../../components/BreadCrumbs";
import {Delivery} from "../../core/api/delivery/typing.ts";
import unknownImage from "/images/default-photo.png";

export const DeliveryDetailsPage: FC<DeliveryDetailsPageProps> = () => {
    const {id} = useParams();
    const [DeliveryDetailsData, setDeliveryDetailsData] = useState<Delivery | null>(null);
    useEffect(() => {
        if (id) {
            getDelivery(id)
                .then((data) => {
                    console.log("Fetched data:", data); // Log the fetched data
                    setDeliveryDetailsData(data.payload); // Ensure you are setting the correct part of the data
                })
                .catch(() => {
                    const delivery = DeliveryListMock.find(
                        (delivery) => delivery.id === Number(id)
                    );
                    setDeliveryDetailsData(delivery || null);
                });
        }
    }, [id]);
    if (!DeliveryDetailsData || !DeliveryDetailsData.title) {
        return (
            <>
                <Navbar/>
                <h1>Товар кто-то стащил...</h1>
            </>
        );
    }
    return (
        <>
            <Navbar/>
            <Breadcrumbs
                middleItems={[
                    {
                        name: "Каталог",
                        link: "/delivery"
                    }
                ]}
                endItem={DeliveryDetailsData?.title}
            />
            <Container>
                <Card className="main-center-card">
                    <div className="title">{DeliveryDetailsData.title}</div>
                    <div className="price">{DeliveryDetailsData.price} руб.</div>
                    <Image
                        className="big-img"
                        src={DeliveryDetailsData.image ? DeliveryDetailsData.image : unknownImage}
                        fluid
                    />
                    <div className="title">Описание:</div>
                    <div className="full-card-content">{DeliveryDetailsData.description}</div>
                </Card>
            </Container>

        </>
    );
};
