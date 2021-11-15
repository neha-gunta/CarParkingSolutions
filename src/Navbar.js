import { Link } from "react-router-dom";


const Navbar = () => {
    return (  
        <header className="navbar">
            <h2>Car Parking Solutions</h2>
            <nav className="links">
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
            </nav>
        </header>
    );
}
 
export default Navbar;