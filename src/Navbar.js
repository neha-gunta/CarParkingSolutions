import { Link } from "react-router-dom";


const Navbar = () => {
    return (  
        <header className="navbar">
            <h3>Car Parking Solutions</h3>
            <nav className="links">
                <Link to="/admindashboard">AD</Link>
                <Link to="/userdashboard">UD</Link>
                <Link to="/workerdashboard">WD</Link>
                <Link to="/test">ListEm</Link>
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
            </nav>
        </header>
    );
}
 
export default Navbar;