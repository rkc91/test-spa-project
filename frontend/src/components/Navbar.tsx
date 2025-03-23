import { NavLink } from "react-router-dom";
import { Nav, Navbar, NavDropdown, Image } from "react-bootstrap";
import '../styling/components/Navbar.css';

const MyNavbar = () => {
    return (
        <Navbar fixed="top" bg="dark" variant="dark" className="navbar" expand="lg">
                <Navbar.Brand as={NavLink} to="/">
                <Image src="./img/hi_logo_named.png" className="navbar-logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link as={NavLink} to='/'>Home</Nav.Link>
                        <NavDropdown title="About Us" id="about-us">
                            <NavDropdown.Item as={NavLink} to="/about">About</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Join Us" id="join-us">
                            <NavDropdown.Item as={NavLink} to='/join-us'>Join Horizon Initiative</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Community" id="community" >
                            <NavDropdown.Item as={NavLink} to='/events'>Guild Events</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to='/roster'>Guild Roster</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to='/streams'>Live Streams</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={NavLink} to='/store' >Guild Store</Nav.Link>
                        <Nav.Link as={NavLink} to='/contact-us' >Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
    );
}

export default MyNavbar;