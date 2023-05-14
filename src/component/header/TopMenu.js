import React from "react";
import {Link} from "react-router-dom";

const TopMenu = () => {
    return(
        <ul className="navbar-nav navbar-nav-scroll ms-auto">
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="homeMenu"
                   data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">소설</a>
                <ul className="dropdown-menu" aria-labelledby="homeMenu">
                    <li><Link className="dropdown-item" to="/novel/fantasy">판타지</Link></li>
                    <li><Link className="dropdown-item" to="/novel/oriental">무협</Link></li>
                    <li><Link className="dropdown-item" to="/novel/modern">현대</Link></li>
                    <li><Link className="dropdown-item" to="/novel/romance">로맨스</Link></li>
                    <li><Link className="dropdown-item" to="/novel/etc">기타</Link></li>
                    <li className="dropdown-divider"></li>
                    <li><Link className="dropdown-item" to="/novel/19">19+</Link></li>
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