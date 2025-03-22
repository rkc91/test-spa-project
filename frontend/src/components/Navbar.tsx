import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
    <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/contact-us'>Contact Us</NavLink>
        <NavLink to='/events'>Guild Events</NavLink>
        <NavLink to='/join-us'>Join Horizon Initiative</NavLink>
        <NavLink to='/roster'>Guild Roster</NavLink>
        <NavLink to='/store'>Guild Store</NavLink>
        <NavLink to='/streams'>Live Streams</NavLink>
    </nav>
    );
}

export default Navbar;