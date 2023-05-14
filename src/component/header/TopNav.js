import React from "react";
import TopMenu from "./TopMenu";

const TopNav = () => {

    return(
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <img className="light-mode-item navbar-brand-item" src="/assets/images/logo/08.svg" alt="logo"/>
                </a>
                <button className="navbar-toggler ms-auto icon-md btn btn-light p-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-animation">
                            <span></span>
                            <span></span>
                            <span></span>
                            </span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <TopMenu />
                </div>
                </div>
        </nav>
    );
}
export default TopNav;