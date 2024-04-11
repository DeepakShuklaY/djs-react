import React from "react";
import ReactDOM from "react-dom/client";

/*
AppLayout
    Header
        - Logo
        - Nav Items
    Body 
        - Search Component
        - ReataurantContainer
        - Restaurant Cards
    Footer
        - Copyright
        - Social media items 
*/

const Header = () => (
    <div className="header">
        <div className="logo-container">
            <img className="logo" src="/images/FlavorFusionLogo.png" alt="Flavor Fusion Logo"></img>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
)

const AppLayout = () => (
    <div>
        <Header/>
    </div>
)
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);
