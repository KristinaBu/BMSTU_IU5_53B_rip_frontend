import {FC} from "react";
import "./index.css";
import {Navbar} from "../../components/Navbar";
import {Container, Button} from "react-bootstrap"
import {useDeliveryPage} from "./DeliveryPage";
import {DeliveryCardProps} from "./typing.tsx";
import {Breadcrumbs} from "../../components/BreadCrumbs";
import {DeliveryCard} from "../../components/DeliveryCard";
import Basket from "../../components/Basket";


export const DeliveryPage: FC = () => {

    const {
        DeliveryList,
        handleSearchDeliveryClick,
        handlePriceStartChange,
        handlePriceEndChange,
    } = useDeliveryPage();

    return (
        <>
            <Container className="page">
                <Navbar/>
                <Breadcrumbs
                    endItem="Каталог"
                />
                <Container className="main-container">

                    <form className="search-container">
                        <input
                            className="search"
                            onChange={handlePriceStartChange}
                            placeholder="Цена от ..."
                            aria-label="Цена от ..."
                            type="text"
                        />
                        <input
                            className="search"
                            onChange={handlePriceEndChange}
                            placeholder="Цена до ..."
                            aria-label="Цена до ..."
                            type="text"
                        />
                        <Button
                            className="search-button"
                            onClick={handleSearchDeliveryClick}
                        >
                            Поиск
                        </Button>

                    </form>
                    {DeliveryList && !!DeliveryList.length ? (
                        <div className="card-group" >
                            {DeliveryList.map((delivery) => {
                                const props: DeliveryCardProps = {
                                    id: delivery.id,
                                    image: delivery.image,
                                    title: delivery.title,
                                    price: delivery.price,
                                };
                                return (

                                    <div className="col" key={delivery.id}>
                                        <DeliveryCard  {...props} />
                                    </div>

                                );
                            })}
                        </div>
                    ) : (
                        <Container className="d-flex justify-content-center mt-4 mb-5">
                            <h2>Ничего не найдено :( </h2>

                        </Container>
                    )}
                </Container>
            </Container>
            <Basket reqID={0} reqCallCount={0}/>
        </>

    );
}