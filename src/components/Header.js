import { LOGO_IMG_URL } from "../utils/constants";
import { useState } from "react";

const Header = () =>{ 
    const [changeLoginLogout, setChangeLoginLogout] = useState("Login");
    console.log("header component");
    const btnLoginClick = () => {
        console.log("changeLoginLogout = ",changeLoginLogout);
        changeLoginLogout === "Login" ? setChangeLoginLogout("Logout") : setChangeLoginLogout("Login");
    };
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_IMG_URL} alt="Flavor Fusion Logo"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
                <button className="btn-login" onClick={btnLoginClick}>{changeLoginLogout}</button>
            </div>
        </div>
    );
}

export default Header;