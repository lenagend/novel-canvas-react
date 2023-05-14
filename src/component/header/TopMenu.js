import React, {useContext} from "react";
import {Link, useNavigate} from "react-router-dom";
import AuthContext from "../../security/AuthContext";

const TopMenu = () => {
    const { logout, userInfo, isAuthenticated } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLoginButton = (e) =>{
        e.preventDefault();
        navigate("/login");
    }

    const handleLogout = (e) => {
        e.preventDefault();
        logout();
        window.location.href="/";
    };

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
            {isAuthenticated ? (
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="homeMenu"
                       data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">유저닉네임</a>
                    <ul className="dropdown-menu" aria-labelledby="homeMenu">
                        <li><Link className="dropdown-item" to="/community/humor">마이페이지</Link></li>
                        <li className="dropdown-divider"></li>
                        <li><a className="dropdown-item" href="#!" onClick={(e)=>handleLogout(e)}>로그아웃</a></li>
                    </ul>
                </li>
            ): (
                <li className="nav-item"><a className="nav-link" href="#!" onClick={(e)=>handleLoginButton(e)}>로그인</a></li>
            )}
        </ul>
    );
}
export default TopMenu;