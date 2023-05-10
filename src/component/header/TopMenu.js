import React from "react";
import {Link} from "react-router-dom";

const TopMenu = () => {
    return(
        <ul className="navbar-nav navbar-nav-scroll ms-auto">
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="homeMenu"
                   data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">소설</a>
                <ul className="dropdown-menu" aria-labelledby="homeMenu">
                    <li><a className="dropdown-item" href="/community/">판타지</a></li>
                    <li><a className="dropdown-item" href="index-classic.html">무협</a></li>
                    <li><a className="dropdown-item" href="index-post.html">현대</a></li>
                    <li><a className="dropdown-item" href="index-video.html">로맨스</a></li>
                    <li><a className="dropdown-item" href="index-event.html">기타</a></li>
                    <li className="dropdown-divider"></li>
                    <li><a className="dropdown-item" href="app-download.html">19+</a></li>
                </ul>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="homeMenu"
                   data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">일반</a>
                <ul className="dropdown-menu" aria-labelledby="homeMenu">
                    <li><Link className="dropdown-item" to="/community/humor">유머</Link></li>
                    <li><Link className="dropdown-item" to="/community/sports">스포츠</Link></li>
                    <li><Link className="dropdown-item" to="/community/politics">정치</Link></li>
                    <li><Link className="dropdown-item" to="/community/stock">주식</Link></li>
                    <li><Link className="dropdown-item" to="/community/hotDeal">핫딜</Link></li>
                    <li className="dropdown-divider"></li>
                    <li><Link className="dropdown-item" to="/community/19">19+</Link></li>
                </ul>
            </li>
        </ul>
    );
}
export default TopMenu;