import React from "react";
import { Navbar } from "../../components/Navbar";
import {DeliveryCard} from "../../components/DeliveryCard";
import {Link} from "react-router-dom";
import Container from "react-bootstrap/Container";
import TelephoneIcon from "../../components/Navbar/TelephoneIcon.tsx";
import NavbarComp from "react-bootstrap/Navbar";

export const MainPage: React.FC = () => {
    return (
        <div>
            <Container style={{textAlign: "center"}}>
                <NavbarComp.Brand>
                    <TelephoneIcon />
                    <Link to="/" className="headerLink">
                        DeliVeryWell
                    </Link>
                </NavbarComp.Brand>
                <h1 style={{textAlign: "center"}}
                >Лучший сервис доставки, который вы когда-либо видели. Радость ближе, чем вы думаете! Буквально на расстоянии звонка!</h1>
                <Link
                    style={{display: "block", textAlign: "center", fontSize: "24px", marginTop: "20px"}}
                    to="/delivery">Посмотреть товары</Link>
            </Container>

        </div>
    );
};
