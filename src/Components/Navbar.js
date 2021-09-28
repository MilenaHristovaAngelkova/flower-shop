import "./Navbar.css";
import {ImSearch} from "react-icons/im";
import {CgMenu} from "react-icons/cg";
import {CgClose} from "react-icons/cg";

const Navbar = () => {
    return (
        <nav>
            <div id="logo">
                <span id="logo-left">Flower</span>
                <span id="logo-right">Shop</span>
            </div>
            <div className="search">
                <input type="text" placeholder="Search..."/>
                <ImSearch id="search-icon"/>
            </div>
            <ul>
                <li>Cart</li>
                <li>My Account</li>
                <li>Log in</li>
            </ul>
        </nav>
    );
}
 
export default Navbar;