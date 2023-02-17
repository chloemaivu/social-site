import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavigationBar() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>😇ANGELFACE😇</Navbar.Brand>
                    <Nav className="me-auto">
                        <Link to="/">Home</Link>
                        <Link to="/feed">Feed</Link>
                        <Link to="/add-post">Add</Link>
                        <Link to="/profile">Profile</Link>
                        <Link to="/">Log In</Link>
                        <Link to="/">Register</Link>
                    </Nav>
                </Container>
            </Navbar>
            <br />
        </>
    );
}

export default NavigationBar;
