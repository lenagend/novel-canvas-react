import React, {useContext} from 'react';
import {useNavigate} from "react-router-dom";
import AuthContext from "../../security/AuthContext";
import TopNav from "./TopNav";

const Header = () => {

    return (
        <header className="navbar-light fixed-top header-static bg-mode">
           <TopNav />
        </header>
    );

}

export default Header;