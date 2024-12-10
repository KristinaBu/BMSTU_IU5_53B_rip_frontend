import React from "react";
import { Navbar } from "../../components/Navbar";
import {Link} from "react-router-dom";
import Container from "react-bootstrap/Container";

export const MainPage: React.FC = () => {
    return (
        <div>
            <Container style={{textAlign: "center"}}>
                <Navbar></Navbar>
                <h1 style={{textAlign: "center"}}
                >Лучший сервис доставки, который вы когда-либо видели. Радость ближе, чем вы думаете! Буквально на расстоянии звонка!</h1>
                <Link
                    style={{display: "block", textAlign: "center", fontSize: "24px", marginTop: "20px"}}
                    to="/delivery">Посмотреть товары</Link>
            </Container>

        </div>
    );
};
