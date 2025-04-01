import { NavLink } from "react-router-dom";
import { Nav, Navbar, NavDropdown, Image } from "react-bootstrap";
import './Navbar.css';

const MyNavbar = () => {
    return (
        <Navbar fixed="top" bg="dark" variant="dark" className="navbar" expand="xxl">
                <Navbar.Brand as={NavLink} to="/">
                <Image src="./img/hi_logo_named.png" className="navbar-logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse style={{justifyContent: "center"}} id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link as={NavLink} to='/'className="me-3 p-0">Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/about" className="me-3 p-0">About</Nav.Link>
                        <Nav.Link as={NavLink} to='/join-us' className="me-3 p-0">Join Us</Nav.Link>
                        <NavDropdown title="Community" id="community" className="me-3 p-0">
                            <NavDropdown.Item as={NavLink} to='/events'>Guild Events</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to='/roster'>Guild Roster</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to='/streams'>Live Streams</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={NavLink} to='/store' className="me-3 p-0">Guild Store</Nav.Link>
                        <Nav.Link as={NavLink} to='/contact-us' className="me-3 p-0">Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
    );
}

export default MyNavbar;