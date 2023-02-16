import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { Nav, Navbar } from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Link href="#home">Home</Link>
                        <Link href="#feed">Feed</Link>
                        <Link href="#add">Add</Link>
                        <Link href="#profile">Profile</Link>
                        <Link href="#login">Log In</Link>
                        <Link href="#register">Register</Link>
                    </Nav>
                </Container>
            </Navbar>
            <br />
        </>
    );
}

export default Navbar;
