import { NavLink } from "react-router-dom";
import { Nav, Navbar, NavDropdown, Image, Button } from "react-bootstrap";
import './Navbar.css';

interface MyNavbarProps {
    handleCarouselIndexChange : (index: number) => void;
}

const MyNavbar = ( props : MyNavbarProps) => {

    const { handleCarouselIndexChange } = props

    return (
        <Navbar fixed="top" bg="dark" variant="dark" className="navbar" expand="xxl">
                <Navbar.Brand as={NavLink} to="/">
                <Image src="./img/hi_logo_named.png" className="navbar-logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse style={{justifyContent: "center"}} id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link as={NavLink} to='/'className="me-3 p-0"
                        onClick={() => {handleCarouselIndexChange(0)}}>Home</Nav.Link>
                        <Nav.Link as={NavLink} to='/'className="me-3 p-0"
                        onClick={() => {handleCarouselIndexChange(1)}}>About</Nav.Link>
                        <Nav.Link as={NavLink} to='/' className="me-3 p-0"
                        onClick={() => {handleCarouselIndexChange(2)}}>Join Us</Nav.Link>
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