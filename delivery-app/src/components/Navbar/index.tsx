import "./index.css"
import {FC} from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavbarComp from "react-bootstrap/Navbar";
import {Link, NavLink} from "react-router-dom";
import TelephoneIcon from "./TelephoneIcon.tsx";

export const Navbar: FC = () => {
    return (
        <>
            <NavbarComp expand="lg">
                <Container>
                    <NavbarComp.Brand>
                        <TelephoneIcon/>
                        <Link to="/" className="headerLink">
                            DeliVeryWell
                        </Link>
                    </NavbarComp.Brand>

                    <NavbarComp.Toggle
                        aria-controls="basic-navbar-nav"
                        className="outline-none"
                    />
                    <NavbarComp.Collapse id="basic-navbar-nav" className="collapse-navbar">

                        <Nav className="me-auto gap-4 gap-sm-3">
                            <NavLink to="/delivery" className="text-decoration-none">
                                Товары доставки
                            </NavLink>
                        </Nav>
                    </NavbarComp.Collapse>
                </Container>
            </NavbarComp>
        </>
    );
};

