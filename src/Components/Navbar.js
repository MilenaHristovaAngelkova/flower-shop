import "./Navbar.css";

const Navbar = () => {
    return (
        <nav>
            <div id="logo">
                <span id="logo-left">Flower</span>
                <span id="logo-right">Shop</span>
            </div>
            <ul>
                <li>Cart</li>
                <li>My Account</li>
                <li>Contact Us</li>
                <li>Log in</li>
            </ul>
        </nav>
    );
}
 
export default Navbar;