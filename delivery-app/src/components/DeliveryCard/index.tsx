import {FC} from "react";
import unknownImage from "/images/default-photo.png";
import {Link} from "react-router-dom";
import "./index.css";
import {DeliveryCardProps} from "../../pages/DeliveryPage/typing.tsx";


export const DeliveryCard: FC<DeliveryCardProps> = (delivery: DeliveryCardProps) => {
    return (
    <div className="card">
        <img
            src={delivery.image ? (delivery.image) : (unknownImage)}
            className="image"
            alt={delivery.title}
        />
            <div className="info">
                <div className="title">
                    {delivery.title}
                </div>
                <div className="price">
                    {delivery.price} руб.
                </div>
                <div>
                    <Link
                        to={"/delivery/" + delivery.id}
                        id={delivery.title}
                        className="info-button"
                        state={{from: delivery.title}}
                    >
                        Узнать подробнее
                    </Link>
                </div>
            </div>
    </div>
    );
};