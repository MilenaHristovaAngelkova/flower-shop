import "./Navbar.css";
import {ImSearch} from "react-icons/im";
import {CgMenu} from "react-icons/cg";
import {CgClose} from "react-icons/cg";

function handleOpenMenu() {
    document.querySelector("ul").setAttribute("style", "display: flex");
    document.getElementById("open-menu").setAttribute("style", "display: none");
    document.getElementById("close-menu").setAttribute("style", "display: flex");
}

function handleCloseMenu() {
    document.querySelector("ul").setAttribute("style", "display: none");
    document.getElementById("open-menu").setAttribute("style", "display: flex");
    document.getElementById("close-menu").setAttribute("style", "display: none");
}

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
            <div className="nav-options">
                <CgMenu className="mob-menu-icon" id="open-menu" onClick={handleOpenMenu}/>
                <CgClose className="mob-menu-icon" id="close-menu" onClick={handleCloseMenu}/>
                <ul>
                    <li onClick={handleCloseMenu}>Cart</li>
                    <li onClick={handleCloseMenu}>My Account</li>
                    <li onClick={handleCloseMenu}>Log in</li>
                </ul>  
            </div>                     
        </nav>
    );
}
 
export default Navbar;